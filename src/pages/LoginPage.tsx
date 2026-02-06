import { Github } from 'lucide-react';
import bgImage from '@/assets/images/bg.png';
import logo from '@/assets/images/logo.svg';
import heroImage1 from '@/assets/images/lv1_6-1.svg';
import heroImage2 from '@/assets/images/lv1_6-2.svg';

export default function LoginPage() {
  const handleGithubLogin = () => {
    // TODO: Implement Github OAuth
    console.log('Github Login Clicked');
  };

  return (
    <div
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#DAC2F6] bg-cover bg-center bg-no-repeat px-4"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <style>{`
        @keyframes alternating-float {
          0% { transform: translateY(0px); }
          25% { transform: translateY(-15px); }
          50% { transform: translateY(0px); }
          100% { transform: translateY(0px); }
        }
        .animate-float-1 {
          animation: alternating-float 4s ease-in-out infinite;
        }
        .animate-float-2 {
          animation: alternating-float 4s ease-in-out infinite;
          animation-delay: 2s;
        }
      `}</style>

      {/* Logo Section */}
      <div className="mb-16 w-full px-8 duration-700 animate-in slide-in-from-top-10">
        <img
          src={logo}
          alt="Debug Mind Logo"
          className="w-full drop-shadow-md"
        />
      </div>

      {/* Hero Image Section (Overlapping Animation) */}
      <div className="relative mb-16 flex h-[40vh] w-full max-w-[400px] items-center justify-center delay-100 duration-700 animate-in zoom-in-95">
        {/* Image 1 - Moves Up/Down */}
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src={heroImage1}
            alt="Level Elements 1"
            className="animate-float-1 w-full object-contain drop-shadow-xl"
          />
        </div>

        {/* Image 2 - Moves Down/Up (Alternating) */}
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src={heroImage2}
            alt="Level Elements 2"
            className="animate-float-2 w-full object-contain drop-shadow-xl"
          />
        </div>
      </div>

      {/* GitHub Login Button */}
      <div className="w-full max-w-[280px] delay-200 duration-700 animate-in slide-in-from-bottom-10">
        <button
          onClick={handleGithubLogin}
          className="group flex w-full items-center justify-center gap-3 rounded-xl bg-[#24292F] px-6 py-4 text-base font-bold text-white shadow-xl transition-all hover:bg-[#24292F]/90 hover:shadow-2xl active:scale-95"
          aria-label="Sign in with GitHub"
        >
          <Github className="h-6 w-6 transition-transform group-hover:-rotate-12" />
          <span>GitHub로 시작하기</span>
        </button>
        <p className="mt-4 text-center text-xs font-medium text-slate-500/80">
          ⓒ 2026 Debug Mind. All rights reserved.
        </p>
      </div>
    </div>
  );
}
