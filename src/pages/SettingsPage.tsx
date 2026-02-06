// src/pages/SettingsPage.tsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, Save, User, Github } from 'lucide-react';

export default function SettingsPage() {
  const navigate = useNavigate();

  // State for form fields
  const [characterName, setCharacterName] = useState('ㅇ');
  const [githubRepo, setGithubRepo] = useState('ㄱㄱ');

  return (
    <div className="min-h-screen bg-[#EEF2FF] px-6 pb-24 pt-6">
      {/* Header Section */}
      <div className="mb-8 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate(-1)}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-sm transition-transform active:scale-95"
          >
            <ChevronLeft className="h-6 w-6 text-slate-700" strokeWidth={2.5} />
          </button>

          <div className="flex flex-col">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500/80">
              CONFIGURATION
            </span>
            <h1 className="text-2xl font-extrabold text-slate-800">
              환경 설정
            </h1>
          </div>
        </div>
      </div>

      {/* Basic Info Section */}
      <div className="mb-24">
        <h2 className="mb-3 flex items-center gap-2 text-sm font-bold text-slate-400">
          <User size={16} /> 기본 정보
        </h2>
        <div className="space-y-6 rounded-[24px] bg-white p-6 shadow-sm">
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-600">
              캐릭터 이름
            </label>
            <input
              type="text"
              value={characterName}
              onChange={(e) => setCharacterName(e.target.value)}
              className="w-full rounded-2xl bg-slate-50 px-4 py-4 font-medium text-slate-800 outline-none transition-all focus:ring-2 focus:ring-[#7c5dfa]/20"
            />
          </div>

          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-bold text-slate-600">
              <Github size={16} /> GitHub Repository
            </label>
            <input
              type="text"
              value={githubRepo}
              onChange={(e) => setGithubRepo(e.target.value)}
              className="w-full rounded-2xl bg-slate-50 px-4 py-4 font-medium text-slate-800 outline-none transition-all focus:ring-2 focus:ring-[#7c5dfa]/20"
            />
          </div>
        </div>
      </div>

      {/* Save Button */}
      <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-t from-[#EEF2FF] via-[#EEF2FF] to-transparent p-6">
        <button className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#7c5dfa] py-4 text-base font-bold text-white shadow-lg transition-transform hover:bg-[#6b4ce6] active:scale-95">
          <Save size={20} />
          변경사항 저장
        </button>
      </div>
    </div>
  );
}
