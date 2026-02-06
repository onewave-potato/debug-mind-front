// src/components/home/LevelGuideModal.tsx
import { X, Trophy, Star, Zap } from 'lucide-react';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import lv1 from '@/assets/images/lv1.svg';
import lv2 from '@/assets/images/lv2.svg';
import lv3 from '@/assets/images/lv3.svg';
import lv4 from '@/assets/images/lv4.svg';
import lv5 from '@/assets/images/lv5.svg';
import lv6 from '@/assets/images/lv6.svg';
import { cn } from '@/lib/utils';

interface LevelGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLevel: number;
}

const LEVEL_INFO = [
  {
    level: 1,
    image: lv1,
    title: '코딩 독학러',
    desc: '맨땅에 헤딩하며 방구석에서 시작하는 단계',
  },
  {
    level: 2,
    image: lv2,
    title: '전공 학부생',
    desc: '이론은 조금 알지만 실전은 아직 서툰 단계',
  },
  {
    level: 3,
    image: lv3,
    title: '부트캠프 수료생',
    desc: '프로젝트를 경험하며 밤샘에 익숙해진 단계',
  },
  {
    level: 4,
    image: lv4,
    title: '주니어 개발자',
    desc: '실무에 투입되어 정신없이 배우는 단계',
  },
  {
    level: 5,
    image: lv5,
    title: '시니어 개발자',
    desc: '팀을 이끌며 노련하게 문제를 해결하는 단계',
  },
  {
    level: 6,
    image: lv6,
    title: '네카라쿠배 합격',
    desc: '꿈의 기업에 입사하여 성공한 단계',
  },
];

export function LevelGuideModal({
  isOpen,
  onClose,
  currentLevel,
}: LevelGuideModalProps) {
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
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 duration-200 animate-in fade-in"
      onClick={onClose}
    >
      <div
        className="relative flex max-h-[85vh] w-full max-w-md flex-col overflow-hidden rounded-[30px] bg-[#f8f9fc] shadow-xl duration-200 animate-in zoom-in-95"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="z-10 flex items-center justify-between bg-white px-6 py-4 shadow-sm">
          <div className="flex items-center gap-2">
            <Trophy className="text-[#7c5dfa]" size={20} />
            <h2 className="text-lg font-bold text-slate-800">레벨업 가이드</h2>
          </div>
          <button
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200"
          >
            <X size={18} />
          </button>
        </div>

        {/* Content - Scrollable */}
        <div className="scrollbar-hide flex-1 overflow-y-auto p-6">
          {/* XP Rules Section */}
          <div className="mb-8 rounded-[24px] bg-white p-5 shadow-sm">
            <h3 className="mb-4 flex items-center gap-2 text-sm font-bold text-slate-500">
              <Zap size={16} /> 경험치 획득 방법
            </h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between rounded-xl bg-slate-50 p-3">
                <span className="text-sm font-medium text-slate-700">
                  미션 클리어
                </span>
                <span className="text-sm font-bold text-[#7c5dfa]">+10 XP</span>
              </div>
              <div className="flex items-center justify-between rounded-xl bg-slate-50 p-3">
                <span className="text-sm font-medium text-slate-700">
                  일일 미션 올클리어
                </span>
                <span className="text-sm font-bold text-[#7c5dfa]">+10 XP</span>
              </div>
              <div className="flex items-center justify-between rounded-xl bg-slate-50 p-3">
                <span className="text-sm font-medium text-slate-700">
                  오픈소스 기여
                </span>
                <span className="text-sm font-bold text-[#7c5dfa]">+20 XP</span>
              </div>
              <div className="flex items-center justify-between rounded-xl bg-slate-50 p-3">
                <span className="text-sm font-medium text-slate-700">
                  코딩테스트 랭크
                </span>
                <span className="rounded border bg-white px-2 py-1 text-xs font-bold text-slate-500">
                  차등 지급
                </span>
              </div>
            </div>
          </div>

          {/* Levels List */}
          <h3 className="mb-4 ml-1 flex items-center gap-2 text-sm font-bold text-slate-500">
            <Star size={16} /> 레벨별 성장 과정
          </h3>
          <div className="space-y-4">
            {LEVEL_INFO.map((info) => {
              const isCurrent = info.level === currentLevel;
              return (
                <div
                  key={info.level}
                  className={cn(
                    'relative flex items-center gap-4 rounded-[24px] border-2 bg-white p-4 shadow-sm transition-all',
                    isCurrent
                      ? 'border-[#7c5dfa] ring-4 ring-[#7c5dfa]/10'
                      : 'border-transparent',
                  )}
                >
                  <div className="relative h-20 w-20 shrink-0">
                    <img
                      src={info.image}
                      alt={`Lv.${info.level}`}
                      className="h-full w-full object-contain"
                    />
                    <div className="absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-slate-800 text-[10px] font-bold text-white shadow-md">
                      {info.level}
                    </div>
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4
                      className={cn(
                        'mb-1 font-bold',
                        isCurrent ? 'text-[#7c5dfa]' : 'text-slate-800',
                      )}
                    >
                      Lv.{info.level} {info.title}
                    </h4>
                    <p className="break-keep text-xs leading-relaxed text-slate-500">
                      {info.desc}
                    </p>
                  </div>
                  {isCurrent && (
                    <div className="absolute -top-3 right-4 rounded-full bg-[#7c5dfa] px-3 py-1 text-[10px] font-bold text-white shadow-sm">
                      현재 단계
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}
