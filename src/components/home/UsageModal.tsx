import { X } from 'lucide-react';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';

interface UsageModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function UsageModal({ isOpen, onClose }: UsageModalProps) {
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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-md overflow-hidden rounded-[30px] bg-white shadow-xl animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b px-6 py-4">
          <h2 className="text-lg font-bold text-slate-800">사용법</h2>
          <button
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200"
          >
            <X size={18} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="space-y-4 text-sm text-slate-600">
            <p>
              <span className="font-bold text-[#7c5dfa]">디버그 마인드</span>에 오신 것을 환영합니다!
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <span className="font-semibold text-slate-800">답변 노트:</span> 면접 예상 질문에 대한 답변을 작성하고 연습해보세요.
              </li>
              <li>
                <span className="font-semibold text-slate-800">코드 평가:</span> 작성한 코드를 AI가 분석하고 피드백을 제공합니다.
              </li>
              <li>
                <span className="font-semibold text-slate-800">데일리 미션:</span> 매일 제공되는 미션을 수행하고 레벨을 올려보세요.
              </li>
              <li>
                <span className="font-semibold text-slate-800">캐릭터 성장:</span> 활동을 통해 경험치를 얻으면 캐릭터가 성장합니다.
              </li>
            </ul>
          </div>
          
          <div className="mt-8 flex justify-center">
            <button
              onClick={onClose}
              className="w-full rounded-xl bg-[#7c5dfa] py-3 font-bold text-white transition-colors hover:bg-[#6d51dd]"
            >
              확인했어요
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
