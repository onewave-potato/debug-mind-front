// src/components/interview/InterviewCard.tsx
import { useState } from 'react';
import { InterviewDetailModal } from './InterviewDetailModal';

interface InterviewCardProps {
  date: string;
  title: string;
  content: string;
  hasNewBadge?: boolean;
}

export function InterviewCard({
  date,
  title,
  content,
  hasNewBadge = false,
}: InterviewCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="active:scale-99 relative mb-4 w-full rounded-[20px] bg-white p-5 px-6 shadow-sm transition-transform hover:shadow-md">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-xs font-medium text-slate-400">{date}</span>
          {hasNewBadge && (
            <div className="h-2.5 w-2.5 rounded-full bg-[#7c5dfa]" />
          )}
        </div>

        <h3 className="mb-3 text-lg font-bold text-slate-800">{title}</h3>

        <div
          onClick={() => setIsModalOpen(true)}
          className="line-clamp-2 cursor-pointer rounded-xl bg-slate-50 p-4 text-sm leading-relaxed text-slate-600 transition-colors hover:bg-slate-100 active:scale-[0.99]"
        >
          {content}
        </div>
      </div>

      <InterviewDetailModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={title}
        date={date}
        content={content}
      />
    </>
  );
}
