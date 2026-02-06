import {
  CircleHelp,
  FileText,
  ClipboardCheck,
  Trophy,
  Settings,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { DailyMissions } from '@/components/home/DailyMissions';
import { UsageModal } from '@/components/home/UsageModal';
import { LevelGuideModal } from '@/components/home/LevelGuideModal';
import { CompletionCalendarModal } from '@/components/home/CompletionCalendarModal';
import bgImage from '@/assets/images/bg.png';
import { useState } from 'react';
import lv1 from '@/assets/images/lv1.svg';
import lv2 from '@/assets/images/lv2.svg';
import lv3 from '@/assets/images/lv3.svg';
import lv4 from '@/assets/images/lv4.svg';
import lv5 from '@/assets/images/lv5.svg';
import lv6 from '@/assets/images/lv6.svg';

const CHARACTER_IMAGES: Record<number, string> = {
  1: lv1,
  2: lv2,
  3: lv3,
  4: lv4,
  5: lv5,
  6: lv6,
};

export default function HomePage() {
  const navigate = useNavigate();
  const [isMissionsOpen, setIsMissionsOpen] = useState(true);
  const [isUsageModalOpen, setIsUsageModalOpen] = useState(false);
  const [isLevelModalOpen, setIsLevelModalOpen] = useState(false);
  const [isCompletionModalOpen, setIsCompletionModalOpen] = useState(false);

  const level = 1; // 임시
  // const [level, setLevel] = useState(1); // 백엔드 데이터 연동 시 변경

  const menuItems = [
    { label: '사용법', icon: CircleHelp, path: '#' },
    { label: '답변 노트', icon: FileText, path: '/interview' },
    { label: '코드 평가', icon: ClipboardCheck, path: '/code-eval' },
    { label: '달성률', icon: Trophy, path: '#' },
    { label: '설정', icon: Settings, path: '/settings' },
  ];

  return (
    <div
      className="relative flex min-h-screen flex-col overflow-hidden bg-[#DAC2F6] bg-cover bg-no-repeat transition-[background-position] duration-500 ease-in-out"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundPosition: isMissionsOpen ? 'center -335px' : 'center -110px', // 여기서 위치를 조절하세요 (예: center, top, bottom, 50% 50%)
      }}
    >
      {/* Top Menu Section */}
      <div className="absolute left-0 right-0 top-3 z-10 p-6 pb-8">
        <div className="flex items-start justify-between">
          {menuItems.map((item) => (
            <button
              key={item.label}
              onClick={() => {
                console.log(item.label);
                if (item.label === '사용법') {
                  setIsUsageModalOpen(true);
                } else if (item.label === '달성률') {
                  setIsCompletionModalOpen(true);
                } else if (item.path !== '#') {
                  navigate(item.path);
                }
              }}
              className="flex flex-col items-center gap-2 transition-transform duration-200 hover:scale-105 active:scale-100"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/70 shadow-sm ring-1 ring-black/5">
                <item.icon className="h-6 w-6 text-slate-700" strokeWidth={2} />
              </div>
              <span className="text-xs font-medium text-slate-600">
                {item.label}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* 캐릭터 영역 */}
      <div
        className="-mt-10 flex flex-1 flex-col items-center justify-center transition-transform duration-500 ease-in-out"
        style={{
          transform: isMissionsOpen
            ? 'translateY(-125px)'
            : 'translateY(100px)',
        }}
      >
        <div
          onClick={(e) => {
            e.stopPropagation();
            setIsLevelModalOpen(true);
          }}
          className="group relative w-[60vw] max-w-[200px] cursor-pointer transition-transform duration-300 hover:scale-105"
        >
          {/* Desktop Tooltip (Hover) */}
          <div className="pointer-events-none absolute -top-12 left-1/2 hidden -translate-x-1/2 whitespace-nowrap rounded-full bg-white px-3 py-1.5 text-xs font-bold text-[#7c5dfa] opacity-0 shadow-lg transition-opacity duration-300 group-hover:opacity-100 md:block">
            ✨ 레벨업 과정 보기
            <div className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 bg-white"></div>
          </div>

          {/* Mobile Tooltip (Always Visible) */}
          <div className="absolute -bottom-8 left-1/2 flex -translate-x-1/2 transform items-center gap-1 whitespace-nowrap rounded-full bg-white/90 px-3 py-1.5 text-[11px] font-bold text-[#7c5dfa] shadow-sm backdrop-blur-sm md:hidden">
            <span className="animate-bounce">👆</span> 레벨 가이드
          </div>

          <img
            src={CHARACTER_IMAGES[level as keyof typeof CHARACTER_IMAGES]}
            alt="My Character"
            className="w-full object-contain drop-shadow-xl"
          />
        </div>
      </div>

      <DailyMissions
        isOpen={isMissionsOpen}
        onToggle={() => setIsMissionsOpen(!isMissionsOpen)}
      />

      <UsageModal
        isOpen={isUsageModalOpen}
        onClose={() => setIsUsageModalOpen(false)}
      />

      <LevelGuideModal
        isOpen={isLevelModalOpen}
        onClose={() => setIsLevelModalOpen(false)}
        currentLevel={level}
      />

      <CompletionCalendarModal
        isOpen={isCompletionModalOpen}
        onClose={() => setIsCompletionModalOpen(false)}
      />
    </div>
  );
}
