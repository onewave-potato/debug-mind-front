import { createPortal } from 'react-dom';
import { X, Send } from 'lucide-react';
import { useState, useEffect } from 'react';

interface MissionModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  question: string;
}

export function MissionModal({
  isOpen,
  onClose,
  title,
  question,
}: MissionModalProps) {
  const [answer, setAnswer] = useState('');

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setAnswer('');
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!answer.trim()) return;

    // TODO: Add API integration here
    alert('답변이 전송되었습니다!');
    onClose();
  };

  return createPortal(
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 p-4 duration-200 animate-in fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-sm rounded-[30px] bg-white p-6 shadow-xl duration-200 animate-in zoom-in-95"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-bold text-slate-800">{title}</h2>
          <button
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200"
          >
            <X size={18} />
          </button>
        </div>

        {/* Question */}
        <div className="mb-6 rounded-2xl bg-[#EEF2FF] p-5">
          <span className="mb-2 block text-xs font-bold text-[#7c5dfa]">
            TODAY'S QUESTION
          </span>
          <p className="text-base font-bold leading-relaxed text-slate-700">
            {question}
          </p>
        </div>

        {/* Input Form */}
        <form onSubmit={handleSubmit} className="relative">
          <textarea
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            placeholder="내 생각을 자유롭게 적어보세요..."
            className="h-32 w-full resize-none rounded-2xl bg-slate-50 p-4 pb-12 text-sm font-medium text-slate-800 outline-none ring-1 ring-slate-100 transition-all placeholder:text-slate-400 focus:bg-white focus:ring-2 focus:ring-[#7c5dfa]/20"
          />
          <button
            type="submit"
            disabled={!answer.trim()}
            className="absolute bottom-3 right-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[#7c5dfa] text-white shadow-md transition-all hover:scale-105 hover:bg-[#6b4ce6] active:scale-95 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:scale-100"
          >
            <Send size={18} />
          </button>
        </form>
      </div>
    </div>,
    document.body,
  );
}
