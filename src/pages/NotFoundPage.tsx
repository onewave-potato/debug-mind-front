import { useNavigate } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#EEF2FF] p-6">
      <div className="flex flex-col items-center text-center duration-500 animate-in fade-in zoom-in">
        <h1 className="mb-4 text-4xl font-black leading-none text-[##3E4D62] opacity-90 drop-shadow-sm">
          404
        </h1>
        <h2 className="mb-2 text-2xl font-bold text-slate-800">
          페이지를 찾을 수 없습니다
        </h2>
        <p className="mb-8 text-sm leading-relaxed text-slate-600">
          요청하신 페이지가 존재하지 않거나,
          <br />
          이동되었을 수 있습니다.
        </p>

        <div className="flex w-full max-w-[280px] flex-col space-y-4">
          <button
            onClick={() => navigate('/')}
            className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#7c5dfa] text-sm font-bold text-white shadow-sm transition-transform hover:bg-[#6b4ce6] active:scale-95"
          >
            <Home size={18} />
            홈으로 돌아가기
          </button>

          <button
            onClick={() => navigate(-1)}
            className="flex items-center justify-center w-full h-12 gap-2 text-sm font-bold transition-transform bg-white shadow-sm rounded-xl text-slate-700 hover:bg-white/80 active:scale-95"
          >
            <ArrowLeft size={18} />
            이전 페이지
          </button>
        </div>
      </div>
    </div>
  );
}
