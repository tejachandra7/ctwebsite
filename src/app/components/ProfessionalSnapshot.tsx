import { useScrollAnimation } from '../hooks/useScrollAnimation';

export function ProfessionalSnapshot() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section 
      ref={ref}
      id="snapshot" 
      className={`px-6 md:px-12 py-12 bg-white transition-all duration-700 ${
        isVisible ? 'translate-y-0' : 'translate-y-8'
      }`}
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-12 gap-20">
          {/* Left - Section Header */}
          <div className="lg:col-span-4">
            <div className="sticky top-32 space-y-6">
              <div className="text-xs font-bold text-black/30 tracking-widest">03 / OVERVIEW</div>
              <h2 className="heading-font text-4xl lg:text-5xl font-bold text-black leading-none tracking-tight mb-8 font-['Work_Sans']">
                PROFESSIONAL OVERVIEW
              </h2>
              <div className="w-24 h-1 bg-[#FF6B35]"></div>
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
    </section>
  );
}