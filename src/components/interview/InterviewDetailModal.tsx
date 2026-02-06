// src/components/interview/InterviewDetailModal.tsx
import { X, Calendar } from 'lucide-react';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';

interface InterviewDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  date: string;
  content: string;
}

export function InterviewDetailModal({
  isOpen,
  onClose,
  title,
  date,
  content,
}: InterviewDetailModalProps) {
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

  return createPortal(
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative max-h-[80vh] w-full max-w-md overflow-hidden rounded-[30px] bg-white shadow-xl animate-in zoom-in-95 duration-200 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b px-6 py-5 bg-slate-50/50">
          <div className="flex flex-col gap-1">
            <span className="flex items-center gap-1.5 text-xs font-semibold text-slate-400">
              <Calendar size={12} />
              {date}
            </span>
            <h2 className="text-lg font-bold text-slate-800 leading-tight pr-4">
              {title}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 active:scale-95 transition-all"
          >
            <X size={18} />
          </button>
        </div>

        {/* Content - Scrollable */}
        <div className="flex-1 overflow-y-auto p-6">
          <div className="text-[15px] leading-7 text-slate-700 whitespace-pre-wrap">
            {content}
          </div>
        </div>

        {/* Footer (optional) */}
        <div className="border-t p-4 bg-slate-50/50">
          <button
            onClick={onClose}
            className="w-full rounded-xl bg-[#7c5dfa] py-3 text-sm font-bold text-white shadow-md active:scale-[0.98] transition-all"
          >
            닫기
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
}
