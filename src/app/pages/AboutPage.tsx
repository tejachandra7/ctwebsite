import { About } from "../components/About";
import { SkillsTools } from "../components/SkillsTools";
import { Contact } from "../components/Contact";
import { SiteNav } from "../components/SiteNav";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteNav />
      <div className="pt-24">
        <About sectionEyebrow="01 / ABOUT" />
        <SkillsTools sectionEyebrow="02 / CAPABILITIES" />
        <Contact />
      </div>
    </div>
  );
}
