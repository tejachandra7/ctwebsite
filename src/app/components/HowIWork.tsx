import { Search, Users, Compass, Hand, Boxes } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export function HowIWork() {
  const { ref, isVisible } = useScrollAnimation(0.1);

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
      id="process" 
      className={`px-6 md:px-12 py-12 bg-white transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
    >
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="mb-16">
          <div className="text-xs font-bold text-black/30 tracking-widest mb-8">06 / APPROACH</div>
          <h2 className="heading-font text-4xl lg:text-5xl font-bold text-black leading-none tracking-tight mb-8 font-['Work_Sans']">
            HOW I WORK
          </h2>
          <div className="w-24 h-1 bg-[#FF6B35]"></div>
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
    </section>
  );
}