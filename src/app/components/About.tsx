import { useScrollAnimation } from '../hooks/useScrollAnimation';

type AboutProps = {
  sectionEyebrow?: string;
};

export function About({ sectionEyebrow = '03 / ABOUT' }: AboutProps) {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section
      ref={ref}
      id="about"
      className={`px-6 md:px-12 py-12 bg-white transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
    >
      <div className="max-w-[1400px] mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <div className="text-xs font-bold text-black/30 tracking-widest mb-8">{sectionEyebrow}</div>
          <h2 className="heading-font text-4xl lg:text-5xl font-bold text-black leading-none tracking-tight mb-8 font-['Work_Sans']">
            ABOUT ME
          </h2>
          <div className="w-24 h-1 bg-[#FF6B35]"></div>
        </div>

        {/* Two paragraphs */}
        <div className="max-w-4xl space-y-8">
          <p className="text-lg md:text-xl text-black/70 leading-relaxed">
            I'm a senior product design leader with 13+ years of experience, rooted in a hands-on background as a product designer. I currently lead and mentor design teams across complex, multi-product environments — spanning EdTech, Cybersecurity, Test Automation, and Robotic Process Automation. I'm strong at navigating ambiguity, designing for scale, and building the kind of cross-functional trust that lets good ideas move fast. My work covers the full spectrum: UX strategy, product architecture, design systems, and close collaboration with product, engineering, and leadership to balance user needs with business and technical constraints.
          </p>
          <p className="text-lg md:text-xl text-black/70 leading-relaxed">
            My approach starts with understanding the problem and system context deeply — not just the surface request. I align stakeholders early, guide teams with clear direction rather than micromanagement, and go hands-on whenever the complexity demands it. I've built high-performing teams from scratch, mentored designers at every stage of their careers, and maintained design quality while scaling delivery. I believe the best design decisions come from real user insight, organisational clarity, and a relentless focus on long-term sustainability — not just shipping screens.
          </p>
        </div>
      </div>
    </section>
  );
}
