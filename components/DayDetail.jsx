import { CheckCircle2, Zap, Code, BookOpen,Circle } from "lucide-react";

export default function DayDetail({
  selectedDay,
  dayContent,
  completedDays,
  toggleDay,
  toggleProblem,
  completedProblems
}) {
  if (!selectedDay) return null;

  const data = dayContent[selectedDay];

  return (
    <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 
    rounded-2xl p-6 border border-purple-500/30">

      {/* Header */}
      <div className="flex items-start justify-between mb-6">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="text-4xl font-bold text-purple-400">
              Day {selectedDay}
            </span>

            {completedDays.has(selectedDay) && (
              <CheckCircle2 className="w-8 h-8 text-green-400" />
            )}
          </div>

          <h3 className="text-2xl font-bold mb-2">{data.title}</h3>
        </div>

        <button
          onClick={() => toggleDay(selectedDay)}
          className={`px-6 py-3 rounded-xl font-semibold transition-all ${
            completedDays.has(selectedDay)
              ? "bg-green-500 hover:bg-green-600"
              : "bg-purple-500 hover:bg-purple-600"
          }`}
        >
          {completedDays.has(selectedDay) ? "Completed ✓" : "Mark Complete"}
        </button>
      </div>

      {/* Topics & Problems */}
      <div className="grid md:grid-cols-2 gap-6">

        {/* Topics */}
        <div>
          <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-purple-400" />
            Topics to Learn
          </h4>

          <ul className="space-y-2">
            {data.topics.map((topic, idx) => (
              <li key={idx} className="flex items-start gap-2 text-purple-100">
                <Zap className="w-4 h-4 text-yellow-400 mt-1" />
                <span>{topic}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Problems */}
        <div>
          <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
            <Code className="w-5 h-5 text-cyan-400" />
            Practice Problems
          </h4>

          <ul className="space-y-2">
            {data.problems.map((problem, idx) => (
              <li key={idx} className="flex items-center gap-2">

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleProblem(`${selectedDay}-${idx}`);
                  }}
                >
                  {completedProblems.has(`${selectedDay}-${idx}`) ? (
                    <CheckCircle2 className="w-5 h-5 text-green-400" />
                  ) : (
                    <Circle className="w-5 h-5 text-slate-400" />
                  )}
                </button>

                <span
                  className={
                    completedProblems.has(`${selectedDay}-${idx}`)
                      ? "line-through text-slate-400"
                      : "text-cyan-100"
                  }
                >
                  {problem}
                </span>

              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
