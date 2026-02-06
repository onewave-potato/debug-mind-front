// src/pages/CodeEvalPage.tsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { EvaluationDetail } from '@/components/code-eval/EvaluationDetail';
import { WeeklyCalendar } from '@/components/code-eval/WeeklyCalendar';

// Dummy Data
const EVAL_DATA: Record<
  string,
  { rank: string; score: number; code: string; feedback: string }
> = {
  '2026-02-06': {
    rank: 'A',
    score: 85,
    feedback:
      '전반적으로 로직이 깔끔하지만, 중첩 반복문으로 인한 시간 복잡도 증가가 우려됩니다. 해시맵을 사용하여 O(N)으로 최적화할 수 있습니다.',
    code: `function twoSum(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }
  return [];
}`,
  },
  '2026-02-04': {
    rank: 'S',
    score: 98,
    feedback:
      '완벽한 풀이입니다! 변수 명명법도 직관적이고 엣지 케이스 처리도 훌륭합니다.',
    code: `const isValid = (s) => {
  const stack = [];
  const map = {
    "(": ")",
    "{": "}",
    "[": "]"
  };
  
  for (const char of s) {
    if (map[char]) {
      stack.push(map[char]);
    } else if (stack.pop() !== char) {
      return false;
    }
  }
  return stack.length === 0;
};`,
  },
};

export default function CodeEvalPage() {
  const navigate = useNavigate();
  // Initialize with a date that has data for demo purposes, or today
  const [selectedDate, setSelectedDate] = useState<Date>(
    new Date('2026-02-06'),
  );

  const formatDate = (date: Date) => {
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, '0');
    const d = String(date.getDate()).padStart(2, '0');
    return `${y}-${m}-${d}`;
  };

  const currentData = EVAL_DATA[formatDate(selectedDate)];
  const markedDates = Object.keys(EVAL_DATA);

  return (
    <div className="min-h-screen bg-[#EEF2FF] px-6 pb-6 pt-6">
      {/* Header Section */}
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate(-1)}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-sm transition-transform active:scale-95"
          >
            <ChevronLeft className="h-6 w-6 text-slate-700" strokeWidth={2.5} />
          </button>

          <div className="flex flex-col">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500/80">
              Evaluation
            </span>
            <h1 className="text-2xl font-extrabold text-slate-800">
              코드 평가
            </h1>
          </div>
        </div>
      </div>

      {/* Calendar Section */}
      <WeeklyCalendar
        selectedDate={selectedDate}
        onSelectDate={setSelectedDate}
        markedDates={markedDates}
      />

      {/* Result Section */}
      <div className="min-h-[300px]">
        {currentData ? (
          <EvaluationDetail
            rank={currentData.rank}
            score={currentData.score}
            code={currentData.code}
            feedback={currentData.feedback}
          />
        ) : (
          <div className="flex h-60 flex-col items-center justify-center rounded-[24px] border-2 border-dashed border-white/40 bg-white/20 text-center duration-500 animate-in fade-in">
            <span className="mb-2 text-4xl">💤</span>
            <p className="font-bold text-slate-700">평가 기록이 없습니다.</p>
            <p className="text-sm text-slate-500">다른 날짜를 선택해보세요.</p>
          </div>
        )}
      </div>
    </div>
  );
}
