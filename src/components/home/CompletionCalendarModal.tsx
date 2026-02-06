// src/components/home/CompletionCalendarModal.tsx
import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CompletionCalendarModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// Dummy data: date string 'YYYY-MM-DD' -> completed count (0-3)
const COMPLETION_DATA: Record<string, number> = {
  '2026-02-01': 1,
  '2026-02-02': 3,
  '2026-02-03': 2,
  '2026-02-04': 3,
  '2026-02-05': 0,
  '2026-02-06': 1,
  '2026-02-07': 3,
};

export function CompletionCalendarModal({
  isOpen,
  onClose,
}: CompletionCalendarModalProps) {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (year: number, month: number) => {
    return new Date(year, month, 1).getDay();
  };

  const handlePrevMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1),
    );
  };

  const handleNextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1),
    );
  };

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const daysInMonth = getDaysInMonth(year, month);
  const firstDay = getFirstDayOfMonth(year, month);

  const days = [];
  // Empty slots for previous month
  for (let i = 0; i < firstDay; i++) {
    days.push(null);
  }
  // Days of current month
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i);
  }

  const getDayStyle = (day: number) => {
    const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    const count = COMPLETION_DATA[dateStr] || 0;

    if (count === 0) return 'bg-transparent text-slate-600';
    if (count === 1) return 'bg-[#7c5dfa]/30 text-[#7c5dfa] font-bold'; // 30% opacity
    if (count === 2) return 'bg-[#7c5dfa]/60 text-white font-bold'; // 60% opacity
    if (count >= 3) return 'bg-[#7c5dfa] text-white font-bold shadow-sm'; // 100% opacity, Max

    return 'bg-transparent text-slate-600';
  };

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 duration-200 animate-in fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-sm overflow-hidden rounded-[30px] bg-white p-6 shadow-xl duration-200 animate-in zoom-in-95"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-bold text-slate-800">이달의 달성률</h2>
          <button
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200"
          >
            <X size={18} />
          </button>
        </div>

        {/* Calendar Navigation */}
        <div className="mb-6 flex items-center justify-center gap-4">
          <button
            onClick={handlePrevMonth}
            className="flex h-8 w-8 items-center justify-center rounded-full text-slate-400 hover:bg-slate-100 active:scale-95"
          >
            <ChevronLeft size={20} />
          </button>
          <span className="text-lg font-bold text-slate-800">
            {year}년 {month + 1}월
          </span>
          <button
            onClick={handleNextMonth}
            className="flex h-8 w-8 items-center justify-center rounded-full text-slate-400 hover:bg-slate-100 active:scale-95"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Calendar Grid */}
        <div className="mb-2 grid grid-cols-7 text-center">
          {['일', '월', '화', '수', '목', '금', '토'].map((day) => (
            <div key={day} className="py-2 text-xs font-bold text-slate-400">
              {day}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-y-2 text-center">
          {days.map((day, index) => (
            <div key={index} className="flex items-center justify-center">
              {day ? (
                <div
                  className={cn(
                    'flex h-9 w-9 items-center justify-center rounded-full text-sm transition-all',
                    getDayStyle(day),
                  )}
                >
                  {day}
                </div>
              ) : (
                <div className="h-9 w-9" />
              )}
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className="mt-6 flex items-center justify-center gap-4 text-[10px] text-slate-500">
          <div className="flex items-center gap-1.5">
            <div className="h-2.5 w-2.5 rounded-full bg-[#7c5dfa]/30" />
            <span>1개</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="h-2.5 w-2.5 rounded-full bg-[#7c5dfa]/60" />
            <span>2개</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="h-2.5 w-2.5 rounded-full bg-[#7c5dfa]" />
            <span>완료</span>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}
