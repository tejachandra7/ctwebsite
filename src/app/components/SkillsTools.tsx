import { Palette, Users2, Wrench } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export function SkillsTools() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  const skillCategories = [
    {
      icon: Palette,
      title: 'Design & UX',
      skills: [
        'Product Design',
        'UX Strategy',
        'Product Architecture',
        'Design Systems',
        'User Research',
        'Prototyping',
      ],
    },
    {
      icon: Users2,
      title: 'Leadership',
      skills: [
        'Team Building & Mentorship',
        'Talent Development & Hiring',
        'Stakeholder Alignment',
        'Design Strategy',
        'Process Optimization',
        'Cross-functional Leadership',
      ],
    },
    {
      icon: Wrench,
      title: 'Tools',
      skills: [
        'Figma (Advanced Prototyping & Systems)',
        'AI-Assisted Design Workflows',
        'User Research & Validation',
        'Analytics & Product Metrics',
      ],
    },
  ];

  return (
    <section 
      ref={ref}
      id="skills" 
      className={`px-6 md:px-12 py-12 bg-white transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
    >
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="mb-16">
          <div className="text-xs font-bold text-black/30 tracking-widest mb-8">04 / CAPABILITIES</div>
          <h2 className="heading-font text-4xl lg:text-5xl font-bold text-black leading-none tracking-tight mb-8 font-['Work_Sans']">
            CORE CAPABILITIES
          </h2>
          <div className="w-24 h-1 bg-[#FF6B35]"></div>
        </div>
        
        {/* Skills Grid - Asymmetric */}
        <div className="grid lg:grid-cols-12 gap-8">
          {/* First Category - Large */}
          <div className="lg:col-span-5 bg-black text-white p-12 rounded-3xl space-y-8 hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-4 pb-6 border-b border-white/20">
              <div className="w-12 h-12 bg-[#FF6B35] rounded-2xl flex items-center justify-center">
                <Palette className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold font-['Work_Sans']">
                {skillCategories[0].title}
              </h3>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {skillCategories[0].skills.map((skill, skillIndex) => (
                <div
                  key={skillIndex}
                  className="bg-white/10 rounded-xl px-4 py-3 hover:bg-white/20 transition-colors"
                >
                  <span className="text-sm text-white/90 whitespace-nowrap">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Second Category - Tall */}
          <div className="lg:col-span-7 lg:row-span-2 bg-white border border-black/10 rounded-3xl p-12 space-y-8 hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-4 pb-6 border-b border-black/10">
              <div className="w-12 h-12 bg-[#FF6B35] rounded-2xl flex items-center justify-center">
                <Users2 className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-black font-['Work_Sans']">
                {skillCategories[1].title}
              </h3>
            </div>
            
            <div className="space-y-3">
              {skillCategories[1].skills.map((skill, skillIndex) => (
                <div
                  key={skillIndex}
                  className="group bg-white rounded-xl px-6 py-3.5 hover:bg-[#FF6B35] hover:text-white transition-all border border-black/10"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-2 h-2 bg-[#FF6B35] rounded-full group-hover:bg-white"></div>
                    <span className="text-base font-semibold">{skill}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Third Category - Wide */}
          <div className="lg:col-span-5 bg-[#FF6B35] text-white p-12 rounded-3xl space-y-8 hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-4 pb-6 border-b border-white/20">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center">
                <Wrench className="h-6 w-6 text-[#FF6B35]" />
              </div>
              <h3 className="text-xl font-bold font-['Work_Sans']">
                {skillCategories[2].title}
              </h3>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {skillCategories[2].skills.map((skill, skillIndex) => (
                <div
                  key={skillIndex}
                  className="bg-white rounded-xl px-4 py-3 hover:bg-white/90 transition-colors border border-white"
                >
                  <span className="text-sm text-black font-semibold">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}