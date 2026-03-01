import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans antialiased">
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
}
