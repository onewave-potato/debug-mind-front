import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Github, Sparkles } from 'lucide-react';

export default function OnboardingPage() {
  const navigate = useNavigate();
  const [nickname, setNickname] = useState('');
  const [repoUrl, setRepoUrl] = useState('');

  const handleStart = () => {
    if (!nickname || !repoUrl) {
      alert('모든 정보를 입력해주세요.');
      return;
    }
    // TODO: Save onboarding data logic here
    navigate('/');
  };

  return (
    <div className="flex min-h-screen flex-col bg-[#EEF2FF] px-6 pb-12 pt-12">
      {/* Header Section */}
      <div className="mb-10 mt-4 duration-700 animate-in slide-in-from-top-4">
        <span className="text-[10px] font-bold uppercase tracking-wider text-[#7c5dfa]">
          WELCOME TO DEBUG MIND
        </span>
        <h1 className="mt-2 text-3xl font-extrabold leading-snug text-slate-800">
          반가워요! 🥳
          <br />
          먼저 소개를 부탁드려요
        </h1>
        <p className="mt-3 text-sm text-slate-500">
          나만의 캐릭터와 함께 성장할 준비가 되셨나요?
        </p>
      </div>

      {/* Form Section */}
      <div className="hover:none flex-1 space-y-6 delay-100 duration-700 animate-in fade-in slide-in-from-bottom-8">
        {/* Nickname Input */}
        <div className="space-y-2">
          <label className="flex items-center gap-2 text-sm font-bold text-slate-600">
            <User size={16} /> 사용할 닉네임
          </label>
          <div className="rounded-[24px] bg-white p-2 shadow-sm">
            <input
              type="text"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              placeholder="멋진 닉네임을 입력하세요"
              className="w-full rounded-2xl bg-slate-50 px-4 py-4 font-medium text-slate-800 outline-none transition-all placeholder:text-slate-400 focus:ring-2 focus:ring-[#7c5dfa]/20"
            />
          </div>
        </div>

        {/* GitHub Repo Input */}
        <div className="space-y-2">
          <label className="flex items-center gap-2 text-sm font-bold text-slate-600">
            <Github size={16} /> GitHub Repository
          </label>
          <div className="rounded-[24px] bg-white p-2 shadow-sm">
            <input
              type="text"
              value={repoUrl}
              onChange={(e) => setRepoUrl(e.target.value)}
              placeholder="https://github.com/username/repo"
              className="w-full rounded-2xl bg-slate-50 px-4 py-4 font-medium text-slate-800 outline-none transition-all placeholder:text-slate-400 focus:ring-2 focus:ring-[#7c5dfa]/20"
            />
          </div>
          <p className="px-2 text-xs font-medium text-[#7c5dfa]">
            * 코딩 테스트 코드를 업로드할 레포지토리 주소를 입력해주세요.
          </p>
        </div>
      </div>

      {/* Start Button */}
      <div className="mt-8 delay-300 duration-700 animate-in fade-in slide-in-from-bottom-4">
        <button
          onClick={handleStart}
          disabled={!nickname || !repoUrl}
          className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#7c5dfa] py-4 text-base font-bold text-white shadow-lg transition-transform hover:bg-[#6b4ce6] active:scale-95 disabled:cursor-not-allowed disabled:opacity-50"
        >
          <Sparkles size={20} />
          시작하기
        </button>
      </div>
    </div>
  );
}
