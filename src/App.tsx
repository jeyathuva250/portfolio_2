import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import HospitalSystem from './pages/HospitalSystem';
import IdentityIssuing from './pages/IdentityIssuing';
import VivaPizzeria from './pages/VivaPizzeria';
import FlightDelay from './pages/FlightDelay';
import Skills from './pages/Skills';
import TLogoLoader from './components/TLogoLoader';

type Phase = 'logo' | 'done';

export default function App() {
  // Always start at 'logo' — animations play fresh on every page load
  const [phase, setPhase] = useState<Phase>('logo');

  return (
    <>
      {/* Main app always rendered underneath; overlays cover via position:fixed */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="skills" element={<Skills />} />
          <Route path="hospital" element={<HospitalSystem />} />
          <Route path="sportsx" element={<IdentityIssuing />} />
          <Route path="viva" element={<VivaPizzeria />} />
          <Route path="flight-delay" element={<FlightDelay />} />
          <Route path="*" element={<Dashboard />} />
        </Route>
      </Routes>

      {phase === 'logo' && (
        <TLogoLoader onComplete={() => setPhase('done')} />
      )}
    </>
  );
}

