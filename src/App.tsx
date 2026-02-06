import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MobileLayout from '@/layout/MobileLayout';
import HomePage from '@/pages/HomePage';
import LoginPage from '@/pages/LoginPage';
import OnboardingPage from '@/pages/OnboardingPage';
import InterviewPage from '@/pages/InterviewPage';
import CodeEvalPage from '@/pages/CodeEvalPage';
import SettingsPage from '@/pages/SettingsPage';
import NotFoundPage from '@/pages/NotFoundPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MobileLayout />}>
          {/* Public Routes */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/onboarding" element={<OnboardingPage />} />

          {/* Main Routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/interview" element={<InterviewPage />} />
          <Route path="/code-eval" element={<CodeEvalPage />} />
          <Route path="/settings" element={<SettingsPage />} />

          {/* Catch all - 404 Not Found */}
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
