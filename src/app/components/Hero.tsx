import { Download, ArrowDown, ChevronDown, Eye } from "lucide-react";
import { Button } from "./ui/button";
import { useState, useEffect } from "react";

export function Hero() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToWork = () => {
    document
      .getElementById("work")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="bg-white relative overflow-hidden py-12 md:py-16 px-6 md:px-12">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm transition-shadow duration-300 px-6 md:px-12 ${
        isScrolled ? "shadow-md" : ""
      }`}>
        <div className="max-w-[1400px] mx-auto py-6 flex justify-between items-center relative">
          <button
            onClick={scrollToTop}
            className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity"
          >
            <div className="w-10 h-10 bg-black flex items-center justify-center rounded-lg">
              <span className="text-sm font-bold text-white">
                CT
              </span>
            </div>
          </button>

          {/* Navigation Links - Centered */}
          <div className="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            <a
              href="#work"
              className="font-bold text-black/60 hover:text-black tracking-wider uppercase transition-colors text-[13px]"
            >
              Work
            </a>
            <a
              href="#ai-workflow"
              className="font-bold text-black/60 hover:text-black tracking-wider uppercase transition-colors text-[13px]"
            >
              AI Integration
            </a>
            <a
              href="#about"
              className="text-xs font-bold text-black/60 hover:text-black tracking-wider uppercase transition-colors"
            >
              About
            </a>
            <a
              href="#skills"
              className="text-xs font-bold text-black/60 hover:text-black tracking-wider uppercase transition-colors"
            >
              Capabilities
            </a>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://drive.google.com/file/d/1IzwB15tZ6ifleu91ckA67inLejH-Sfe3/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:block text-xs font-bold text-black/60 hover:text-black tracking-wider uppercase transition-colors"
            >
              Resume
            </a>
            <a href="#contact" className="cursor-pointer">
              <Button
                size="sm"
                className="bg-black text-white hover:bg-black/90 rounded-full px-8 h-11 font-bold tracking-wider cursor-pointer"
              >CONTACT ME</Button>
            </a>
          </div>
        </div>
      </nav>

      <div className="pt-24 relative z-10">
        <div className="max-w-[1400px] mx-auto">
          {/* Status Badge - Top */}
          <div className="mb-8">
            <div className="inline-flex items-center gap-3 bg-black text-white px-6 py-3 rounded-full">
              <div className="w-2.5 h-2.5 bg-[#FF6B35] rounded-full animate-pulse"></div>
              <span className="text-xs font-bold tracking-widest uppercase">
                Available for New Opportunities
              </span>
            </div>
          </div>

          <div className="space-y-12">
            {/* Main Content */}
            <div className="space-y-6">
              {/* Main Headline */}
              <div>
                <h1 className="heading-font font-bold text-black leading-[0.9] tracking-tight font-[Work_Sans] text-[48px] px-[0px] pt-[0px] pb-[8px] mx-[0px] mt-[64px] mb-[0px]">
                  <span className="text-black/70">Hey 👋 </span>I'M CHANDRA TEJA
                </h1>
              </div>

              {/* Role & Description */}
              <div className="space-y-5">
                <div className="space-y-2">
                  <div className="w-16 h-1 bg-[#FF6B35] rounded-full"></div>
                  
                </div>

                {/* Single Line Description */}
                <div className="pt-2 max-w-full lg:max-w-[60%]">
                  <p className="text-black/70 leading-relaxed px-[0px] pt-[8px] pb-[0px] text-[18px] min-w-[70%]">A Product Design Manager driven by a builder mindset, shaping digital products across EdTech, Cybersecurity, Test Automation, and RPA — leading teams while staying hands-on with complex design challenges and actively utilizing AI to push design efficiency and pace.</p>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-3 pt-4 mx-[0px] mt-[0px] mb-[64px]">
                <a
                  href="https://drive.google.com/file/d/1IzwB15tZ6ifleu91ckA67inLejH-Sfe3/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="lg"
                    className="bg-[#FF6B35] hover:bg-[#FF5722] text-white rounded-full h-12 font-bold tracking-wider text-sm px-[24px] py-[0px]"
                  >
                    <Eye className="mr-2 h-4 w-4" />
                    VIEW RESUME
                  </Button>
                </a>
              </div>

              {/* Pills below button */}
              <div className="flex flex-wrap gap-2 p-[0px]">
                <div className="bg-white border border-black/20 py-1.5 rounded-full px-[20px] py-[6px]">
                  <span className="text-xs font-bold text-black tracking-wider whitespace-nowrap">
                    AI ASSISTED DESIGN
                  </span>
                </div>
                <div className="bg-white border border-black/20 py-1.5 rounded-full px-[20px] py-[6px]">
                  <span className="text-xs font-bold text-black tracking-wider whitespace-nowrap">
                    CONVERSATIONAL DESIGN
                  </span>
                </div>
                <div className="bg-white border border-black/20 py-1.5 rounded-full px-[20px] py-[6px]">
                  <span className="text-xs font-bold text-black tracking-wider whitespace-nowrap">
                    HANDS-ON WORK
                  </span>
                </div>
                <div className="bg-white border border-black/20 py-1.5 rounded-full px-[20px] py-[6px]">
                  <span className="text-xs font-bold text-black tracking-wider whitespace-nowrap">
                    LEADERSHIP
                  </span>
                </div>
                <div className="bg-white border border-black/20 py-1.5 rounded-full px-[20px] py-[6px]">
                  <span className="text-xs font-bold text-black tracking-wider whitespace-nowrap">
                    STRATEGY
                  </span>
                </div>
              </div>
            </div>

            {/* At a Glance - Horizontal Layout */}
            <div className="p-[0px]">
              <div className="bg-black text-white p-8 rounded-2xl">
                <div className="flex flex-col lg:flex-row lg:items-center gap-8">
                  {/* Label */}
                  <div className="font-bold text-white/50 uppercase tracking-widest lg:w-32 shrink-0 text-[12px]">
                    At a Glance
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-8 flex-1">
                    {/* Experience */}
                    <div className="border-l-2 border-[#FF6B35] pl-4 py-1">
                      <div className="text-white leading-none mb-1 font-[Work_Sans] text-[36px]">
                        13+
                      </div>
                      <div className="text-white/70 uppercase tracking-wider text-[11px]">
                        Years Experience
                      </div>
                    </div>

                    {/* Leadership */}
                    <div className="border-l-2 border-white/30 pl-4 py-1">
                      <div className="text-white leading-none mb-1 font-[Work_Sans] text-[36px]">
                        5+
                      </div>
                      <div className="text-white/70 uppercase tracking-wider text-[11px]">Years of Design Leadership</div>
                    </div>

                    {/* Domains */}
                    <div className="border-l-2 border-white/30 pl-4 py-1">
                      <div className="text-white leading-none mb-1 font-[Work_Sans] text-[36px]">
                        4
                      </div>
                      <div className="text-white/70 uppercase tracking-wider text-[11px]">
                        Industry Domains
                      </div>
                    </div>

                    {/* Domains List */}
                    <div className="col-span-2 md:col-span-1 flex items-center">
                      <div className="flex flex-wrap gap-1.5">
                        {[
                          "EdTech",
                          "Cybersecurity",
                          "Test Automation",
                          "RPA",
                        ].map((domain) => (
                          <span
                            key={domain}
                            className="font-semibold text-white bg-white/20 px-3 py-1.5 rounded-full text-[12px]"
                          >
                            {domain}
                          </span>
                        ))}
                      </div>
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