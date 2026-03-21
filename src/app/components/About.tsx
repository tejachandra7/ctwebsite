import { 
  GraduationCap, 
  CheckSquare, 
  Shield, 
  Workflow,
  Users, 
  TrendingUp, 
  Target, 
  Scale, 
  Award, 
  UsersRound,
  Search,
  Compass,
  Hand,
  Boxes
} from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export function About() {
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

  const impacts = [
    {
      icon: Users,
      title: 'Team Leadership',
      text: 'Led product design across multiple teams and products',
    },
    {
      icon: UsersRound,
      title: 'Team Building',
      text: 'Experienced with building high performing teams from scratch',
    },
    {
      icon: TrendingUp,
      title: 'Mentorship',
      text: 'Mentored designers and helped them grow professionally',
    },
    {
      icon: Target,
      title: 'Collaboration',
      text: 'Partnered closely with product, engineering, and leadership',
    },
    {
      icon: Scale,
      title: 'Strategic Balance',
      text: 'Balanced user needs with business and technical constraints',
    },
    {
      icon: Award,
      title: 'Quality at Scale',
      text: 'Maintained design quality while scaling delivery',
    },
  ];

  const steps = [
    {
      icon: Search,
      number: '01',
      title: 'Understand problem and system context',
      description: 'Deep dive into user needs, technical constraints, and business goals',
    },
    {
      icon: Users,
      number: '02',
      title: 'Align stakeholders early',
      description: 'Build consensus and shared understanding across teams',
    },
    {
      icon: Compass,
      number: '03',
      title: 'Guide teams instead of micromanaging',
      description: 'Empower designers with clear direction and autonomy',
    },
    {
      icon: Hand,
      number: '04',
      title: 'Go hands-on when complexity demands',
      description: 'Jump into detailed design work for critical challenges',
    },
    {
      icon: Boxes,
      number: '05',
      title: 'Design for scale and long-term sustainability',
      description: 'Build systems and patterns that grow with the product',
    },
  ];

  return (
    <section 
      ref={ref}
      id="about" 
      className={`px-6 md:px-12 py-12 bg-white transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
    >
      <div className="max-w-[1400px] mx-auto">
        {/* Main Section Header */}
        <div className="mb-20">
          <div className="text-xs font-bold text-black/30 tracking-widest mb-8">03 / ABOUT</div>
          <h2 className="heading-font text-4xl lg:text-5xl font-bold text-black leading-none tracking-tight mb-8 font-['Work_Sans']">
            ABOUT ME
          </h2>
          <div className="w-24 h-1 bg-[#FF6B35]"></div>
        </div>

        {/* Professional Overview */}
        <div className="mb-24">
          <div className="grid lg:grid-cols-12 gap-20">
            {/* Left - Sub-section Title */}
            <div className="lg:col-span-4">
              <div className="sticky top-32 space-y-6">
                <h3 className="text-2xl font-bold text-black leading-tight font-['Work_Sans']">
                  PROFESSIONAL OVERVIEW
                </h3>
              </div>
            </div>

            {/* Right - Content Grid */}
            <div className="lg:col-span-8">
              <div className="space-y-12">
                {/* Profile Summary */}
                <div className="space-y-8">
                  <div className="inline-block bg-black text-white px-5 py-2.5 text-xs font-bold tracking-widest rounded-full">
                    PROFILE
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white p-6 rounded-2xl border-2 border-black/10">
                      <p className="text-base text-black/80 leading-relaxed font-medium">Senior product design leader with 13+ years of experience</p>
                    </div>
                    <div className="bg-white p-6 rounded-2xl border-2 border-black/10">
                      <p className="text-base text-black/80 leading-relaxed font-medium">
                        Background as a hands-on product designer
                      </p>
                    </div>
                    <div className="bg-white p-6 rounded-2xl border-2 border-black/10">
                      <p className="text-base text-black/80 leading-relaxed font-medium">
                        Currently leading and mentoring design teams
                      </p>
                    </div>
                    <div className="bg-white p-6 rounded-2xl border-2 border-black/10">
                      <p className="text-base text-black/80 leading-relaxed font-medium">
                        Strong at navigating ambiguity and complex systems
                      </p>
                    </div>
                  </div>
                </div>

                {/* Core Focus */}
                <div className="space-y-8 pt-8">
                  <div className="inline-block bg-[#FF6B35] text-white px-5 py-2.5 text-xs font-bold tracking-widest rounded-full">
                    CORE FOCUS
                  </div>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="bg-white p-6 rounded-2xl border-2 border-black/20 hover:shadow-xl transition-shadow">
                      <div className="space-y-2">
                        <div className="w-10 h-10 rounded-full bg-black/10 flex items-center justify-center mb-3">
                          <div className="w-3 h-3 rounded-full bg-black/40"></div>
                        </div>
                        <h3 className="font-bold text-black text-lg leading-tight font-['Work_Sans']">Product Design</h3>
                        <p className="text-black/60 text-sm">& UX Strategy</p>
                      </div>
                    </div>
                    
                    <div className="bg-white p-6 rounded-2xl border-2 border-black/20 hover:shadow-xl transition-shadow">
                      <div className="space-y-2">
                        <div className="w-10 h-10 rounded-full bg-black/10 flex items-center justify-center mb-3">
                          <div className="w-3 h-3 rounded-full bg-black/40"></div>
                        </div>
                        <h3 className="font-bold text-black text-lg leading-tight font-['Work_Sans']">Design Leadership</h3>
                        <p className="text-black/60 text-sm">& Team Management</p>
                      </div>
                    </div>

                    <div className="bg-white p-6 rounded-2xl border-2 border-black/20 hover:shadow-xl transition-shadow">
                      <div className="space-y-2">
                        <div className="w-10 h-10 rounded-full bg-black/10 flex items-center justify-center mb-3">
                          <div className="w-3 h-3 rounded-full bg-black/40"></div>
                        </div>
                        <h3 className="font-bold text-black text-lg leading-tight font-['Work_Sans']">Product Architecture</h3>
                        <p className="text-black/60 text-sm">& Design Systems</p>
                      </div>
                    </div>

                    <div className="bg-white p-6 rounded-2xl border-2 border-black/20 hover:shadow-xl transition-shadow">
                      <div className="space-y-2">
                        <div className="w-10 h-10 rounded-full bg-black/10 flex items-center justify-center mb-3">
                          <div className="w-3 h-3 rounded-full bg-black/40"></div>
                        </div>
                        <h3 className="font-bold text-black text-lg leading-tight font-['Work_Sans']">Cross-functional</h3>
                        <p className="text-black/60 text-sm">Collaboration</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Domains & Expertise */}
        <div className="mb-24">
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-black leading-tight font-['Work_Sans'] mb-8">
              DOMAINS & EXPERTISE
            </h3>
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

        {/* Leadership & Impact */}
        <div className="mb-24">
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-black leading-tight font-['Work_Sans'] mb-8">
              LEADERSHIP & IMPACT
            </h3>
          </div>

          {/* Minimal Grid Layout */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {impacts.map((impact, index) => {
              const Icon = impact.icon;
              
              return (
                <div
                  key={index}
                  className="bg-white p-8 rounded-2xl border border-black/10 hover:shadow-lg transition-all group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white rounded-xl group-hover:bg-[#FF6B35]/10 transition-colors flex items-center justify-center flex-shrink-0 border border-black/10">
                      <Icon className="h-5 w-5 text-black/70 group-hover:text-[#FF6B35] transition-colors" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-bold text-black/40 uppercase tracking-wider font-['Work_Sans'] whitespace-nowrap text-[14px]">
                        {impact.title}
                      </h3>
                      <p className="text-base font-medium text-black leading-relaxed">
                        {impact.text}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* How I Work */}
        <div>
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-black leading-tight font-['Work_Sans'] mb-8">
              HOW I WORK
            </h3>
          </div>
          
          {/* 2-Column Card Layout */}
          <div className="grid md:grid-cols-2 gap-6">
            {steps.map((step, index) => {
              const Icon = step.icon;
              
              return (
                <div
                  key={index}
                  className="bg-white p-8 rounded-2xl group hover:shadow-lg transition-all border-2 border-black/10"
                >
                  <div className="space-y-6">
                    {/* Header */}
                    <div className="flex items-start justify-between">
                      <div className="text-3xl font-bold text-black/10 leading-none group-hover:text-[#FF6B35]/30 transition-colors">
                        {step.number}
                      </div>
                      <div className="w-10 h-10 bg-white rounded-xl group-hover:bg-[#FF6B35] transition-colors flex items-center justify-center">
                        <Icon className="h-5 w-5 text-black group-hover:text-white transition-colors" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="space-y-2">
                      <h3 className="text-lg font-bold text-black leading-tight font-['Work_Sans']">
                        {step.title}
                      </h3>
                      <p className="text-base text-black/60 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}