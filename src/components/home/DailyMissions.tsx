import { MessageSquare, BookOpen, Code, Trophy } from 'lucide-react';
import { cn } from '@/lib/utils';

interface DailyMissionsProps {
  isOpen: boolean;
  onToggle: () => void;
}

export function DailyMissions({ isOpen, onToggle }: DailyMissionsProps) {
  const missions = [
    {
      id: 1,
      title: '인성 면접',
      icon: MessageSquare,
      color: 'bg-[#9f85ff]',
      lightColor: 'bg-[#ede9fe]',
      textColor: 'text-[#7c5dfa]',
      action: '답변하기',
      status: 'active',
    },
    {
      id: 2,
      title: 'CS 퀴즈 챌린지',
      icon: BookOpen,
      color: 'bg-[#eb6b9a]',
      lightColor: 'bg-[#fce7f3]',
      textColor: 'text-[#db2777]',
      action: '도전하기',
      status: 'active',
    },
    {
      id: 3,
      title: '코딩테스트',
      icon: Code,
      color: 'bg-[#5bc183]',
      lightColor: 'bg-[#eef2ff]',
      textColor: 'text-[#6366f1]', // 미션 상태 텍스트 색상 (보라색 계열)
      action: '미완료',
      status: 'inactive',
    },
    {
      id: 4,
      title: '오픈 소스 기여',
      icon: Trophy,
      color: 'bg-[#fcd34d]',
      lightColor: 'bg-[#fef3c7]',
      textColor: 'text-[#d97706]',
      action: '보러가기',
      status: 'active',
    },
  ];

  return (
    <div
      className="absolute left-0 top-full min-h-[400px] w-full rounded-t-[30px] bg-white shadow-[0_-4px_20px_rgba(0,0,0,0.05)] transition-transform duration-500 ease-in-out"
      style={{
        transform: isOpen ? 'translateY(-335px)' : 'translateY(-110px)',
      }}
      onClick={(e) => e.stopPropagation()} // 하단 바 내부 클릭 시 닫히지 않도록 방지
    >
      {/* Handle */}
      <div
        className="mx-auto mt-3 h-1 w-10 cursor-pointer rounded-full bg-slate-300 transition-colors hover:bg-slate-400"
        onClick={onToggle}
      />

      {/* Level Info Section */}
      <div className="mb-8 px-6 pt-4">
        <div className="mb-2 flex items-end justify-between">
          <div className="flex items-baseline gap-2">
            <span className="text-xl font-extrabold text-[#1a1f36]">
              Lv. 12
            </span>
            <span className="text-sm font-medium text-gray-500">
              주니어 개발자
            </span>
          </div>
          <span className="text-sm font-bold text-[#5c59f2]">46%</span>
        </div>
        <div className="relative h-2.5 w-full overflow-hidden rounded-full bg-slate-100">
          <div
            className="absolute left-0 top-0 h-full rounded-full bg-gradient-to-r from-[#7c5dfa] to-[#5c59f2]"
            style={{ width: '46%' }}
          />
        </div>
      </div>

      {/* Daily Missions Section */}
      <div>
        <div className="overflow-hidden">
          <div className="px-6 pb-6">
            <h2 className="mb-4 text-xs font-bold tracking-wider text-slate-400">
              DAILY MISSIONS
            </h2>
            <div className="scrollbar-hide flex gap-4 overflow-x-auto pb-4">
              {missions.map((mission) => (
                <div
                  key={mission.id}
                  className={cn(
                    'flex min-w-[130px] flex-col items-center rounded-[24px] border p-4 text-center shadow-sm transition-transform active:scale-95',
                    mission.title === '오픈 소스 기여'
                      ? 'border-[#fcd34d]/30 bg-[#fffbeb]'
                      : 'border-slate-100 bg-white',
                  )}
                >
                  <div
                    className={`mb-3 flex h-14 w-14 items-center justify-center rounded-[20px] ${mission.color} text-white shadow-sm`}
                  >
                    <mission.icon size={24} strokeWidth={2.5} />
                  </div>
                  <h3 className="mb-3 whitespace-nowrap text-sm font-bold text-gray-800">
                    {mission.title}
                  </h3>
                  <button
                    className={`rounded-full px-3 py-1.5 text-[11px] font-bold ${
                      mission.status === 'inactive'
                        ? 'bg-[#f3f0ff] text-[#7c5dfa]'
                        : `${mission.lightColor} ${mission.textColor}`
                    }`}
                  >
                    {mission.action}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
