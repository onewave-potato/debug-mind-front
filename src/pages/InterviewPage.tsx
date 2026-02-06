// src/pages/InterviewPage.tsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, MessageCircle, Code } from 'lucide-react';
import { PersonalityTab } from '@/components/interview/PersonalityTab';
import { TechnicalTab } from '@/components/interview/TechnicalTab';
import { cn } from '@/lib/utils';

export default function InterviewPage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'personality' | 'technical'>(
    'personality',
  );

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
              Archive
            </span>
            <h1 className="text-2xl font-extrabold text-slate-800">
              답변 노트
            </h1>
          </div>
        </div>
      </div>

      {/* Tab Switcher */}
      <div className="mb-6 flex w-full rounded-[20px] bg-white/40 p-1.5 backdrop-blur-sm">
        <button
          onClick={() => setActiveTab('personality')}
          className={cn(
            'flex flex-1 items-center justify-center gap-2 rounded-[16px] py-3 text-sm font-bold transition-all duration-200',
            activeTab === 'personality'
              ? 'bg-white text-slate-800 shadow-sm'
              : 'text-slate-600 hover:bg-white/50',
          )}
        >
          <MessageCircle className="h-4 w-4" strokeWidth={2.5} />
          <span>인성 면접</span>
        </button>
        <button
          onClick={() => setActiveTab('technical')}
          className={cn(
            'flex flex-1 items-center justify-center gap-2 rounded-[16px] py-3 text-sm font-bold transition-all duration-200',
            activeTab === 'technical'
              ? 'bg-white text-slate-800 shadow-sm'
              : 'text-slate-500 hover:bg-white/50',
          )}
        >
          <Code className="h-4 w-4" strokeWidth={2.5} />
          <span>기술(CS)</span>
        </button>
      </div>

      {/* Content Area */}
      <div className="duration-500 animate-in fade-in slide-in-from-bottom-4">
        {activeTab === 'personality' ? <PersonalityTab /> : <TechnicalTab />}
      </div>
    </div>
  );
}
