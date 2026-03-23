import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Hero } from '../components/Hero';
import { SelectedWork } from '../components/SelectedWork';
import { AIWorkflow } from '../components/AIWorkflow';
import { Contact } from '../components/Contact';

/** Set to `true` when you want the AI Integration section back on the home page. */
const SHOW_AI_INTEGRATION_SECTION = false;

export default function HomePage() {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash?.replace(/^#/, '');
    if (!hash) return;
    const el = document.getElementById(hash);
    if (el) {
      const t = window.setTimeout(() => {
        el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      return () => window.clearTimeout(t);
    }
  }, [location.pathname, location.hash]);

  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <SelectedWork />
      {SHOW_AI_INTEGRATION_SECTION ? <AIWorkflow /> : null}
      <Contact />
    </div>
  );
}