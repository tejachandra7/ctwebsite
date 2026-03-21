import { Hero } from '../components/Hero';
import { SelectedWork } from '../components/SelectedWork';
import { About } from '../components/About';
import { SkillsTools } from '../components/SkillsTools';
import { AIWorkflow } from '../components/AIWorkflow';
import { Contact } from '../components/Contact';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <SelectedWork />
      <AIWorkflow />
      <About />
      <SkillsTools />
      <Contact />
    </div>
  );
}