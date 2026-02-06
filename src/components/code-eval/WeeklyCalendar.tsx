// src/components/code-eval/WeeklyCalendar.tsx
import { useState } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Calendar as CalendarIcon,
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface WeeklyCalendarProps {
  selectedDate: Date;
  onSelectDate: (date: Date) => void;
  markedDates?: string[]; // 'YYYY-MM-DD' format
}

export function WeeklyCalendar({
  selectedDate,
  onSelectDate,
  markedDates = [],
}: WeeklyCalendarProps) {
  const [currentWeekStart, setCurrentWeekStart] = useState<Date>(() => {
    const d = new Date(selectedDate);
    // Adjust to generate a week starting on Sunday or Monday. Let's start Sunday.
    const day = d.getDay();
    d.setDate(d.getDate() - day);
    return d;
  });
  const [isMonthPickerOpen, setIsMonthPickerOpen] = useState(false);

  // Generate week days
  const weekDays = Array.from({ length: 7 }).map((_, i) => {
    const d = new Date(currentWeekStart);
    d.setDate(d.getDate() + i);
    return d;
  });

  const formatDate = (date: Date) => {
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, '0');
    const d = String(date.getDate()).padStart(2, '0');
    return `${y}-${m}-${d}`;
  };

  const handlePrevWeek = () => {
    const newStart = new Date(currentWeekStart);
    newStart.setDate(newStart.getDate() - 7);
    setCurrentWeekStart(newStart);
  };

  const handleNextWeek = () => {
    const newStart = new Date(currentWeekStart);
    newStart.setDate(newStart.getDate() + 7);
    setCurrentWeekStart(newStart);
  };

  const handleMonthSelect = (monthIndex: number) => {
    const year = selectedDate.getFullYear();
    const newDate = new Date(year, monthIndex, 1);

    // update week start to first week of that month
    const day = newDate.getDay();
    const weekStart = new Date(newDate);
    weekStart.setDate(newDate.getDate() - day);
    setCurrentWeekStart(weekStart);

    // Select the 1st of that month
    onSelectDate(newDate);

    setIsMonthPickerOpen(false);
  };

  return (
    <div className="relative mb-6 rounded-[24px] bg-white p-5 shadow-sm transition-all duration-300 ease-in-out">
      {/* Conditionally render content to allow container to resize */}
      {!isMonthPickerOpen ? (
        <div className="duration-200 animate-in fade-in slide-in-from-top-2">
          {/* Header (Month Navigation and Toggle) */}
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrevWeek}
                className="flex h-8 w-8 items-center justify-center rounded-full text-slate-400 hover:bg-slate-100"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={() => setIsMonthPickerOpen(true)}
                className="flex items-center gap-2 rounded-full px-3 py-1.5 text-lg font-bold text-slate-800 transition-colors hover:bg-slate-50"
              >
                {selectedDate.toLocaleDateString('ko-KR', {
                  year: 'numeric',
                  month: 'long',
                })}
                <CalendarIcon size={16} className="text-slate-400" />
              </button>
              <button
                onClick={handleNextWeek}
                className="flex h-8 w-8 items-center justify-center rounded-full text-slate-400 hover:bg-slate-100"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* Week Grid */}
          <div className="flex justify-between">
            {weekDays.map((date) => {
              const isSelected = formatDate(date) === formatDate(selectedDate);
              const isToday = formatDate(date) === formatDate(new Date());
              const hasMark = markedDates.includes(formatDate(date));

              return (
                <button
                  key={date.toISOString()}
                  onClick={() => onSelectDate(date)}
                  className="group flex flex-col items-center gap-2"
                >
                  <span
                    className={cn(
                      'text-xs font-medium uppercase',
                      isSelected ? 'text-slate-600' : 'text-slate-400',
                    )}
                  >
                    {date.toLocaleDateString('en-US', { weekday: 'short' })}
                  </span>
                  <div
                    className={cn(
                      'flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold transition-all',
                      isSelected
                        ? 'scale-110 bg-[#7c5dfa] text-white shadow-md'
                        : isToday
                          ? 'bg-slate-100 text-slate-700'
                          : 'text-slate-600 hover:bg-slate-50',
                    )}
                  >
                    {date.getDate()}
                  </div>
                  {/* Dot indicator */}
                  <div
                    className={cn(
                      'h-1.5 w-1.5 rounded-full',
                      hasMark ? 'bg-[#7c5dfa]' : 'bg-transparent',
                    )}
                  />
                </button>
              );
            })}
          </div>
        </div>
      ) : (
        /* Simple Month Picker Content */
        <div className="duration-200 animate-in fade-in zoom-in-95">
          <div className="mb-4 flex items-center justify-between border-b pb-2">
            <span className="font-bold text-slate-800">월 선택</span>
            <button
              onClick={() => setIsMonthPickerOpen(false)}
              className="rounded-lg px-2 py-1 text-sm font-medium text-slate-400 transition-colors hover:bg-slate-50 hover:text-slate-600"
            >
              닫기
            </button>
          </div>
          <div className="grid grid-cols-4 gap-2">
            {Array.from({ length: 12 }).map((_, i) => (
              <button
                key={i}
                onClick={() => handleMonthSelect(i)}
                className={cn(
                  'rounded-xl py-3 text-sm font-medium transition-colors hover:bg-slate-100',
                  i === selectedDate.getMonth()
                    ? 'bg-[#7c5dfa] text-white hover:bg-[#6b4ce6]'
                    : 'bg-slate-50 text-slate-600',
                )}
              >
                {i + 1}월
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
