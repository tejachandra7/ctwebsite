import { ArrowUpRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export function SelectedWork() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  // Placeholder images so the app builds without the Figma asset plugin.
  const placeholderImage = '/favicon.svg';

  const projects = [
    {
      title: 'OneLern - EdTech Platform focusing on Pre-Primary and Primary schools',
      domain: 'EdTech',
      category: 'EdTech | Product I',
      description: 'OneLern is a cross-platform digital learning ecosystem serving schools across India and Caribbean markets, with Teacher and Student applications available on mobile, web, and tablet. The platform also includes a web portal for school leadership (principals and administrators) and multiple internal applications supporting sales, school success specialists, authors, production teams, and administrative teams, enabling content creation, classroom delivery, school operations, and institutional management through a unified, role-based system built for scale.',
      image: placeholderImage,
      websiteUrl: 'https://www.onelern.com/',
      caseStudyUrl: '/case-study/onelern-assessments',
      isConfidential: true,
    },
    {
      title: 'Fortuna CySec - TheFense: AI-Powered Cybersecurity Orchestration Platform',
      domain: 'Cybersecurity',
      category: 'Cybersecurity | Product I',
      description: 'AI-powered integrated cybersecurity platform with XDR, SIEM, SOAR, which helps MSPs and MSSPs to onboard their customers, manage all their endpoints, identify threats, and mitigate them by automated playbooks.',
      image: placeholderImage,
      websiteUrl: 'https://www.fortunacysec.com/platform',
      isConfidential: true,
    },
    {
      title: 'Fortuna Clouds Website',
      domain: 'Cloud Computing',
      category: 'AI Enabled Cloud Based Solutions | Website',
      description: 'Led the end-to-end design and development of the Fortuna Clouds corporate website, translating complex AI and cloud service offerings into a clear, modern, and responsive digital experience. Defined the information architecture, visual direction, and interaction patterns while ensuring technical feasibility and performance across devices.',
      image: placeholderImage,
      websiteUrl: 'https://fortunaclouds.com/',
      isConfidential: false,
    },
  ];

  return (
    <section 
      ref={ref}
      id="work" 
      className={`px-6 md:px-12 py-12 bg-white transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
    >
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="mx-[0px] mt-[0px] mb-[48px]">
          <div className="text-xs font-bold text-black/30 tracking-widest mb-8">01 / PORTFOLIO</div>
          <h2 className="heading-font text-4xl lg:text-5xl font-bold text-black leading-none tracking-tight mb-8 font-['Work_Sans']">FEATURED WORK</h2>
          <div className="w-24 h-1 bg-[#FF6B35]"></div>
        </div>
        
        {/* Projects */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="grid lg:grid-cols-2 gap-8 items-center bg-white rounded-3xl hover:shadow-xl transition-shadow pl-[0px] pr-[32px] py-[16px]"
            >
              {/* Image Card - Left */}
              <div>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-black/5">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              {/* Content - Right */}
              <div className="space-y-4">
                {/* Category Tag and Confidential Badge */}
                <div className="flex items-center gap-3 flex-wrap">
                  <div className="text-xs font-bold text-black/40 uppercase tracking-wider whitespace-nowrap">
                    {project.category}
                  </div>
                  {project.isConfidential && (
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#FF6B35]/10 text-[#FF6B35] text-xs font-bold uppercase tracking-wider whitespace-nowrap">
                      NDA
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-black leading-tight font-['Work_Sans']">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-base text-black/60 leading-relaxed">
                  {project.description}
                </p>

                {/* Action Links */}
                <div className="flex flex-wrap gap-4 pt-2">
                  {project.caseStudyUrl && (
                    <a
                      href={project.caseStudyUrl}
                      className="inline-flex items-center gap-2 bg-black text-white hover:bg-black/90 px-6 py-3 rounded-full text-sm font-bold tracking-wider transition-colors group/btn"
                    >
                      CASE STUDY
                      <ArrowUpRight className="h-4 w-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                    </a>
                  )}

                  {/* Website Link */}
                  <a 
                    href={project.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-bold text-black hover:text-[#FF6B35] transition-colors group/btn px-2 py-3"
                  >
                    VISIT WEBSITE
                    <ArrowUpRight className="h-4 w-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Portfolio Links */}
        <div className="mt-16 pt-12 border-t border-black/10">
          <div className="flex flex-col items-center gap-6">
            <p className="text-sm font-bold text-black/60 uppercase tracking-wider">Find My My Older Works here</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="https://www.behance.net/tejachandra"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 bg-white hover:bg-black border-2 border-black px-8 py-4 rounded-full transition-all"
              >
                <span className="text-sm font-bold text-black group-hover:text-white tracking-wider">
                  BEHANCE
                </span>
                <ArrowUpRight className="h-5 w-5 text-black group-hover:text-white transition-colors" />
              </a>
              <a
                href="https://dribbble.com/tejachandra"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 bg-white hover:bg-[#FF6B35] border-2 border-[#FF6B35] px-8 py-4 rounded-full transition-all"
              >
                <span className="text-sm font-bold text-[#FF6B35] group-hover:text-white tracking-wider">
                  DRIBBBLE
                </span>
                <ArrowUpRight className="h-5 w-5 text-[#FF6B35] group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}