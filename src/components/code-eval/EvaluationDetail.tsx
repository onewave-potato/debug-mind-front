// src/components/code-eval/EvaluationDetail.tsx
import { Terminal } from 'lucide-react';

interface EvaluationDetailProps {
  rank: string;
  code: string;
  feedback: string;
  score: number;
}

export function EvaluationDetail({
  rank,
  code,
  feedback,
  score,
}: EvaluationDetailProps) {
  const getRankColor = (rank: string) => {
    switch (rank.toUpperCase()) {
      case 'S':
        return 'text-[#f59e0b] bg-[#fffbeb] border-[#fcd34d]';
      case 'A':
        return 'text-[#7c5dfa] bg-[#f3f0ff] border-[#ddd6fe]';
      case 'B':
        return 'text-[#3b82f6] bg-[#eff6ff] border-[#bfdbfe]';
      default:
        return 'text-slate-600 bg-slate-50 border-slate-200';
    }
  };

  return (
    <div className="space-y-6 duration-500 animate-in slide-in-from-bottom-4">
      {/* Rank & Score Card */}
      <div className="flex items-center gap-4 rounded-[24px] bg-white p-6 shadow-sm">
        <div
          className={`flex h-20 w-20 items-center justify-center rounded-[20px] border-2 text-4xl font-black ${getRankColor(rank)}`}
        >
          {rank}
        </div>
        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400">
            Total Score
          </h3>
          <div className="mt-1 flex items-baseline gap-1">
            <span className="text-3xl font-extrabold text-slate-800">
              {score}
            </span>
            <span className="text-lg font-medium text-slate-400">/ 100</span>
          </div>
        </div>
      </div>

      {/* Feedback Message */}
      <div className="rounded-[24px] bg-white p-6 shadow-sm">
        <h3 className="mb-3 flex items-center gap-2 text-lg font-bold text-slate-800">
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#ff7b7b] text-xs text-white">
            !
          </span>
          피드백 메시지
        </h3>
        <p className="leading-relaxed text-slate-600">{feedback}</p>
      </div>

      {/* Code Snippet */}
      <div className="rounded-[24px] bg-white p-6 shadow-sm">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="flex items-center gap-2 text-lg font-bold text-slate-800">
            <Terminal size={20} className="text-slate-400" />
            제출한 코드
          </h3>
          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-500">
            JavaScript
          </span>
        </div>
        <div className="overflow-hidden rounded-xl bg-[#1e1e1e] p-4">
          <pre className="overflow-x-auto font-mono text-sm leading-relaxed text-[#d4d4d4]">
            <code>{code}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}
