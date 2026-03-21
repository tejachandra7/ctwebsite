import { Brain, Pencil, BookOpen } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export function AIWorkflow() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  const workflowBlocks = [
    {
      icon: Brain,
      title: 'AI as a Thinking Partner',
      tool: 'ChatGPT',
      color: 'black',
      points: [
        'Idea expansion and structured thinking',
        'UX writing refinement and clarity improvement',
        'Workflow critique and friction identification',
        'Research data synthesis and validation',
        'Acting as a second brain for strategic decision-making',
      ],
    },
    {
      icon: Pencil,
      title: 'AI in Design Execution',
      tool: 'Figma Make',
      color: 'orange',
      points: [
        'Rapid prototype generation to clarify workflows',
        'Exploring multiple solution paths quickly',
        'Translating early concepts into interactive prototypes',
        'Generating deployment-ready websites',
        'Reducing ambiguity in early-stage product thinking',
      ],
    },
    {
      icon: BookOpen,
      title: 'AI for Learning & Context Building',
      tool: 'NotebookLM',
      color: 'white',
      points: [
        'Deep-diving into complex topics and documentation',
        'Summarizing technical material for faster understanding',
        'Structuring research insights',
        'Accelerating domain learning in new problem spaces',
      ],
    },
  ];

  return (
    <section 
      ref={ref}
      id="ai-workflow" 
      className={`px-6 md:px-12 py-12 bg-white transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
    >
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="mb-16">
          <div className="text-xs font-bold text-black/30 tracking-widest mb-8">02 / AI INTEGRATION</div>
          <h2 className="heading-font text-4xl lg:text-5xl font-bold text-black leading-none tracking-tight mb-8 font-['Work_Sans']">
            AI-AUGMENTED PRODUCT WORKFLOW
          </h2>
          <div className="w-24 h-1 bg-[#FF6B35]"></div>
        </div>

        {/* Intro Statement */}
        <div className="mb-16 max-w-4xl">
          <p className="text-lg text-black leading-relaxed font-medium">
            I approach AI not as a shortcut, but as a strategic augmentation layer — accelerating insight, refining workflows, and reducing ambiguity in complex product environments. I integrate AI across thinking, execution, and learning to enhance both speed and clarity in product design.
          </p>
        </div>
        
        {/* Workflow Blocks Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {workflowBlocks.map((block, index) => {
            const IconComponent = block.icon;
            const isBlack = block.color === 'black';
            const isOrange = block.color === 'orange';
            const isWhite = block.color === 'white';

            return (
              <div
                key={index}
                className={`rounded-3xl space-y-8 hover:shadow-xl transition-shadow ${ isBlack ? 'bg-black text-white' : isOrange ? 'bg-[#FF6B35] text-white' : 'bg-white text-black border-2 border-black/10' } p-[40px]`}
              >
                {/* Header */}
                <div className="space-y-6">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${
                    isBlack ? 'bg-[#FF6B35]' : 
                    isOrange ? 'bg-white' : 
                    'bg-black'
                  }`}>
                    <IconComponent className={`h-7 w-7 ${
                      isBlack ? 'text-white' : 
                      isOrange ? 'text-[#FF6B35]' : 
                      'text-white'
                    }`} />
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold leading-tight font-['Work_Sans']">
                      {block.title}
                    </h3>
                    <div className={`inline-block px-4 py-2 rounded-full text-xs font-bold tracking-wider transition-all ${
                      isBlack ? 'bg-white text-black border-2 border-white' : 
                      isOrange ? 'bg-white text-[#FF6B35] border-2 border-white' : 
                      'bg-white text-black border-2 border-black/10'
                    }`}>
                      TOOL: {block.tool}
                    </div>
                  </div>
                </div>

                {/* Points */}
                <div className="space-y-3 pt-4">
                  {block.points.map((point, pointIndex) => (
                    <div
                      key={pointIndex}
                      className="flex items-start gap-3"
                    >
                      <div className={`w-1.5 h-1.5 rounded-full mt-2 shrink-0 ${
                        isBlack ? 'bg-[#FF6B35]' : 
                        isOrange ? 'bg-white' : 
                        'bg-[#FF6B35]'
                      }`}></div>
                      <span className={`text-sm leading-relaxed ${
                        isBlack ? 'text-white/90' : 
                        isOrange ? 'text-white/95' : 
                        'text-black/80'
                      }`}>
                        {point}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Statement */}
        <div className="mt-16 p-[0px]">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-base text-black/70 leading-relaxed italic">
              This approach positions me as a hands-on builder–leader who integrates AI thoughtfully into product strategy and execution — not replacing human judgment, but amplifying it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}