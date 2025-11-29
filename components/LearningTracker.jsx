"use client";
import React, { useState, useEffect, useRef } from "react";
import Header from "./Header";
import StatsDashboard from "./StatsDashboard";
import ProgressBar from "./ProgressBar";
import PhasesGrid from "./PhaseGrid";
import DaysGrid from "./DaysGrid";
import DayDetail from "./DayDetail";
import { Brain } from "lucide-react";
import { curriculum, dayContent } from "./utils/curriculum";

const LearningTracker = () => {
  const [completedDays, setCompletedDays] = useState(new Set());
  const [completedProblems, setCompletedProblems] = useState(new Set());
  const [selectedDay, setSelectedDay] = useState(null);

  const detailRef = useRef(null);

  // Load from DB
  useEffect(() => {
    async function loadProgress() {
      try {
        const res = await fetch("/api/progress/get");
        const json = await res.json();

        if (!json.success || !json.data) return;
        const data = json.data;

        if (data.completedDays) setCompletedDays(new Set(data.completedDays));
        if (data.completedProblems)
          setCompletedProblems(new Set(data.completedProblems));

      } catch (error) {
        console.log("Failed to load progress:", error);
      }
    }
    loadProgress();
  }, []);

  // Save to DB
  useEffect(() => {
    async function save() {
      await fetch("/api/progress", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          completedDays: [...completedDays],
          completedProblems: [...completedProblems],
        }),
      });
    }

    if (completedDays.size > 0 || completedProblems.size > 0) save();
  }, [completedDays, completedProblems]);

  // Auto-scroll when a day is selected
  useEffect(() => {
    if (selectedDay && detailRef.current) {
      detailRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [selectedDay]);

  const toggleDay = (day) => {
    const next = new Set(completedDays);
    next.has(day) ? next.delete(day) : next.add(day);
    setCompletedDays(next);
  };

  const toggleProblem = (id) => {
    const next = new Set(completedProblems);
    next.has(id) ? next.delete(id) : next.add(id);
    setCompletedProblems(next);
  };

  const getPhaseProgress = (phase) =>
    (phase.days.filter((d) => completedDays.has(d)).length /
      phase.days.length) *
    100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white p-8">

      <div className="max-w-7xl mx-auto mb-8">

        <Header />

        <StatsDashboard 
          completedDays={completedDays}
          completedProblems={completedProblems}
        />

        <ProgressBar completedDays={completedDays} />

        <PhasesGrid 
          curriculum={curriculum}
          getPhaseProgress={getPhaseProgress}
        />

        <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-6 border border-slate-700/50">

          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <Brain className="w-8 h-8 text-purple-400" />
            Daily Learning Path
          </h2>

          <DaysGrid
            curriculum={curriculum}
            completedDays={completedDays}
            selectedDay={selectedDay}
            setSelectedDay={setSelectedDay}
          />

          {/* SCROLL TARGET */}
          <div ref={detailRef}>
            <DayDetail
              selectedDay={selectedDay}
              dayContent={dayContent}
              completedDays={completedDays}
              toggleDay={toggleDay}
              toggleProblem={toggleProblem}
              completedProblems={completedProblems}
            />
          </div>

        </div>

      </div>
    </div>
  );
};

export default LearningTracker;
