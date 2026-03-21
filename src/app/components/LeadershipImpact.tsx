import { Users, TrendingUp, Target, Scale, Award, UsersRound } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export function LeadershipImpact() {
  const { ref, isVisible } = useScrollAnimation(0.1);

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

  return (
    <section 
      ref={ref}
      id="leadership" 
      className={`px-6 md:px-12 py-12 bg-white transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
    >
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="mb-16">
          <div className="text-xs font-bold text-black/30 tracking-widest mb-8">05 / LEADERSHIP</div>
          <h2 className="heading-font text-4xl lg:text-5xl font-bold text-black leading-none tracking-tight mb-8 font-['Work_Sans']">
            LEADERSHIP & IMPACT
          </h2>
          <div className="w-24 h-1 bg-[#FF6B35]"></div>
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
    </section>
  );
}