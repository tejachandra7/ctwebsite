import { GraduationCap, CheckSquare, Shield, Workflow } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export function DomainsExpertise() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  const domains = [
    {
      icon: GraduationCap,
      number: '01',
      title: 'EdTech Platforms',
      description: 'Designing tools for teachers, students, and institutions at scale.',
    },
    {
      icon: Shield,
      number: '02',
      title: 'Cybersecurity',
      description: 'Identity, access management, governance, and enterprise security systems.',
    },
    {
      icon: CheckSquare,
      number: '03',
      title: 'Test Automation',
      description: 'Building intuitive interfaces for automated testing and quality assurance platforms.',
    },
    {
      icon: Workflow,
      number: '04',
      title: 'Robotic Process Automation',
      description: 'Designing RPA solutions that streamline workflows and enhance operational efficiency.',
    },
  ];

  return (
    <section 
      ref={ref}
      id="domains" 
      className={`px-6 md:px-12 py-12 bg-white transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
    >
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="mb-16">
          <div className="text-xs font-bold text-black/30 tracking-widest mb-8">04 / EXPERTISE</div>
          <h2 className="heading-font text-4xl lg:text-5xl font-bold text-black leading-none tracking-tight mb-8 font-['Work_Sans']">
            DOMAINS & EXPERTISE
          </h2>
          <div className="w-24 h-1 bg-[#FF6B35]"></div>
        </div>
        
        {/* Domains Grid - Asymmetric */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Large Featured Card */}
          <div className="lg:col-span-2 lg:row-span-1 bg-white p-12 rounded-3xl relative overflow-hidden group hover:shadow-xl transition-shadow border-2 border-black/10">
            <div className="absolute top-8 right-8 text-[160px] font-bold text-black/5 leading-none group-hover:text-[#FF6B35]/10 transition-colors">
              {domains[0].number}
            </div>
            <div className="relative z-10 space-y-6">
              <div className="w-12 h-12 bg-[#FF6B35] rounded-2xl flex items-center justify-center">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-black leading-tight max-w-sm font-['Work_Sans'] whitespace-nowrap">
                {domains[0].title}
              </h3>
              <p className="text-base text-black/60 leading-relaxed max-w-md">
                {domains[0].description}
              </p>
            </div>
          </div>

          {/* Tall Card */}
          <div className="lg:row-span-2 bg-black p-12 rounded-3xl relative overflow-hidden group hover:shadow-xl transition-shadow">
            <div className="absolute bottom-8 right-8 text-[160px] font-bold text-white/5 leading-none group-hover:text-[#FF6B35]/20 transition-colors">
              {domains[1].number}
            </div>
            <div className="relative z-10 space-y-6 h-full flex flex-col justify-end">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center">
                <Shield className="h-6 w-6 text-black" />
              </div>
              <h3 className="text-xl font-bold text-white leading-tight font-['Work_Sans']">
                {domains[1].title}
              </h3>
              <p className="text-base text-white/60 leading-relaxed">
                {domains[1].description}
              </p>
            </div>
          </div>

          {/* Medium Card */}
          <div className="bg-white p-12 rounded-3xl relative overflow-hidden group border-2 border-black/10 hover:shadow-xl transition-shadow">
            <div className="absolute top-8 right-8 text-[120px] font-bold text-black/5 leading-none group-hover:text-[#FF6B35]/10 transition-colors">
              {domains[2].number}
            </div>
            <div className="relative z-10 space-y-6">
              <div className="w-12 h-12 bg-black rounded-2xl flex items-center justify-center">
                <CheckSquare className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-black leading-tight font-['Work_Sans']">
                {domains[2].title}
              </h3>
              <p className="text-sm text-black/60 leading-relaxed">
                {domains[2].description}
              </p>
            </div>
          </div>

          {/* Accent Card */}
          <div className="bg-[#FF6B35] p-12 rounded-3xl relative overflow-hidden group hover:shadow-xl transition-shadow">
            <div className="absolute top-8 right-8 text-[120px] font-bold text-white/10 leading-none group-hover:text-white/20 transition-colors">
              {domains[3].number}
            </div>
            <div className="relative z-10 space-y-6">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center">
                <Workflow className="h-6 w-6 text-[#FF6B35]" />
              </div>
              <h3 className="text-xl font-bold text-white leading-tight font-['Work_Sans']">
                {domains[3].title}
              </h3>
              <p className="text-sm text-white/90 leading-relaxed">
                {domains[3].description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}