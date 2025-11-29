export default function PhasesGrid({ curriculum, getPhaseProgress }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
      {curriculum.phases.map((phase, idx) => (
        <div key={idx}
          className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-6 
          border border-slate-700/50 hover:border-purple-500/50 transition-all">

          <div className="flex items-center gap-3 mb-4">
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${phase.color}
            flex items-center justify-center font-bold text-lg`}>
              {idx + 1}
            </div>

            <div className="flex-1">
              <h3 className="font-bold text-lg">{phase.name}</h3>
              <p className="text-sm text-slate-400">
                Days {phase.days[0]} - {phase.days.at(-1)}
              </p>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-slate-400">Progress</span>
              <span className="font-semibold">
                {Math.round(getPhaseProgress(phase))}%
              </span>
            </div>

            <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
              <div className={`h-full bg-gradient-to-r ${phase.color}`}
                style={{ width: `${getPhaseProgress(phase)}%` }} />
            </div>
          </div>

        </div>
      ))}
    </div>
  );
}
