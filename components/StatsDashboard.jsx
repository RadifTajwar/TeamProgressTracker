import React from "react";
import { Target, Code, TrendingUp, Award } from "lucide-react";

export default function StatsDashboard({ completedDays, completedProblems }) {
  const totalProgress = (completedDays.size / 30) * 100;

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">

      {/* Overall */}
      <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 
      backdrop-blur-lg rounded-2xl p-6 border border-purple-500/30">
        <div className="flex items-center gap-3 mb-2">
          <Target className="w-6 h-6 text-purple-400" />
          <span className="text-sm text-purple-200">Overall Progress</span>
        </div>
        <div className="text-3xl font-bold">{Math.round(totalProgress)}%</div>
        <div className="text-sm text-purple-300">{completedDays.size}/30 days</div>
      </div>

      {/* Problems Solved */}
      <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 
      backdrop-blur-lg rounded-2xl p-6 border border-blue-500/30">
        <div className="flex items-center gap-3 mb-2">
          <Code className="w-6 h-6 text-blue-400" />
          <span className="text-sm text-blue-200">Problems Solved</span>
        </div>
        <div className="text-3xl font-bold">{completedProblems.size}</div>
        <div className="text-sm text-blue-300">LeetCode challenges</div>
      </div>

      {/* Streak */}
      <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 
      backdrop-blur-lg rounded-2xl p-6 border border-green-500/30">
        <div className="flex items-center gap-3 mb-2">
          <TrendingUp className="w-6 h-6 text-green-400" />
          <span className="text-sm text-green-200">Current Streak</span>
        </div>
        <div className="text-3xl font-bold">{completedDays.size}</div>
        <div className="text-sm text-green-300">days in a row</div>
      </div>

      {/* Achievement */}
      <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 
      backdrop-blur-lg rounded-2xl p-6 border border-orange-500/30">
        <div className="flex items-center gap-3 mb-2">
          <Award className="w-6 h-6 text-orange-400" />
          <span className="text-sm text-orange-200">Achievement</span>
        </div>
        <div className="text-3xl font-bold">
          {completedDays.size >= 30 ? "🏆" : completedDays.size >= 20 ? "⭐" : completedDays.size >= 10 ? "🌟" : "💪"}
        </div>
        <div className="text-sm text-orange-300">Keep going!</div>
      </div>
    </div>
  );
}
