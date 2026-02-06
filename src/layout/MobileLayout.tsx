import { Outlet } from 'react-router-dom';

export default function MobileLayout() {
  return (
    <div className="flex min-h-screen w-full justify-center bg-gray-50 dark:bg-black">
      <div className="relative w-full max-w-md bg-background shadow-sm sm:max-w-lg md:shadow-lg">
        <main className="pb-safe min-h-screen">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
