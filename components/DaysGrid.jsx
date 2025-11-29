export default function DaysGrid({ completedDays, setSelectedDay, selectedDay, curriculum }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-3 mb-8">
      {Array.from({ length: 30 }, (_, i) => i + 1).map(day => {
        const phase = curriculum.phases.find(p => p.days.includes(day));
        const isCompleted = completedDays.has(day);
        const isSelected = selectedDay === day;

        return (
          <button
            key={day}
            onClick={() => setSelectedDay(day)}
            className={`
              relative group p-4 rounded-xl border-2 transition-all cursor-pointer
              ${isCompleted
                ? `bg-gradient-to-br ${phase.color} border-transparent shadow-lg`
                : "bg-slate-700/50 border-slate-600 hover:border-purple-500"
              }
              ${isSelected 
                ? "scale-105 ring-2 ring-purple-500  ring-offset-slate-900" 
                : "hover:scale-105"
              }
            `}
          >
            <div className="flex flex-col items-center gap-2">
              <span className="text-2xl font-bold">
                {isCompleted ? "✓" : day}
              </span>

              <span className={`text-xs opacity-75 ${isSelected ? "text-purple-300" : ""}`}>
                Day {day}
              </span>
            </div>
          </button>
        );
      })}
    </div>
  );
}
