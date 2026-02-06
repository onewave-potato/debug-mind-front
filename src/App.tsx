import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from '@/pages/HomePage';
import LoginPage from '@/pages/LoginPage';
import OnboardingPage from '@/pages/OnboardingPage';
import CsQuizPage from '@/pages/CsQuizPage';
import CodeEvalPage from '@/pages/CodeEvalPage';
import SettingsPage from '@/pages/SettingsPage';
import NotFoundPage from '@/pages/NotFoundPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/onboarding" element={<OnboardingPage />} />

        {/* Main Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/cs-quiz" element={<CsQuizPage />} />
        <Route path="/code-eval" element={<CodeEvalPage />} />
        <Route path="/settings" element={<SettingsPage />} />

        {/* Catch all - 404 Not Found */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
