export default function ProgressBar({ completedDays }) {
  const totalProgress = (completedDays.size / 30) * 100;

  return (
    <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-6 
    border border-slate-700/50 mb-8">
      
      <div className="flex items-center justify-between mb-3">
        <span className="text-lg font-semibold">Learning Journey</span>
        <span className="text-sm text-purple-300">
          {completedDays.size} / 30 days completed
        </span>
      </div>

      <div className="h-4 bg-slate-700 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-purple-500 via-pink-500 
          to-cyan-500 transition-all duration-500"
          style={{ width: `${totalProgress}%` }}
        />
      </div>
    </div>
  );
}
