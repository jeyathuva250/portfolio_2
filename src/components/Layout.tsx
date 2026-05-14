import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

export default function Layout() {
  return (
    <div className="flex min-h-screen w-screen overflow-x-hidden">
      <Sidebar />
      <main className="main-content-wrapper">
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '2.5rem 3rem' }} className="responsive-padding">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
