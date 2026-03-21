import { Mail, Linkedin, Eye, Briefcase, MapPin, Phone, Copy, Check } from 'lucide-react';
import { Button } from './ui/button';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useState } from 'react';

export function Contact() {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    try {
      // Use fallback method (works in all contexts including iframes)
      const textArea = document.createElement('textarea');
      textArea.value = text;
      textArea.style.position = 'fixed';
      textArea.style.left = '-999999px';
      textArea.style.top = '-999999px';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      
      try {
        const successful = document.execCommand('copy');
        textArea.remove();
        
        if (successful) {
          if (type === 'email') {
            setCopiedEmail(true);
            setTimeout(() => setCopiedEmail(false), 2000);
          } else {
            setCopiedPhone(true);
            setTimeout(() => setCopiedPhone(false), 2000);
          }
        }
      } catch (err) {
        textArea.remove();
        console.error('Copy failed: ', err);
      }
    } catch (err) {
      console.error('Failed to create copy element: ', err);
    }
  };

  return (
    <section 
      ref={ref}
      id="contact" 
      className={`px-6 md:px-12 py-12 bg-black relative overflow-hidden transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
    >
      {/* Decorative gradient blobs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#FF6B35]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#FF6B35]/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-[1400px] mx-auto relative z-10">
        {/* Section Number */}
        <div className="text-xs font-bold text-white/30 tracking-widest mb-16">05 / CONTACT</div>

        <div className="grid lg:grid-cols-12 gap-20">
          {/* Left - Large CTA */}
          <div className="lg:col-span-6 space-y-12">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-4 rounded-full border border-white/20">
              <div className="w-3 h-3 bg-[#FF6B35] rounded-full animate-pulse"></div>
              <Briefcase className="h-5 w-5 text-white" />
              <span className="text-white font-bold tracking-wider text-sm uppercase whitespace-nowrap">Open to Opportunities</span>
            </div>

            {/* Massive CTA */}
            <div className="space-y-8">
              <h2 className="heading-font text-7xl lg:text-8xl font-bold text-white leading-[0.85] tracking-tight font-['Work_Sans']">
                LET'S<br />CONNECT
              </h2>
              
              <div className="w-32 h-1 bg-[#FF6B35]"></div>
              
              <p className="text-2xl text-white/70 leading-relaxed max-w-lg">Actively exploring senior and leadership product design roles.</p>
            </div>

            {/* Location Info */}
            <div className="flex items-center gap-3 text-white/50 pt-8">
              <MapPin className="h-5 w-5" />
              <span className="text-lg">Based in Hyderabad, India</span>
            </div>
          </div>

          {/* Right - Contact Cards */}
          <div className="lg:col-span-6 space-y-6">
            {/* Primary Contact - Email & Phone */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Email Card */}
              <a 
                href="mailto:tejachandra7@gmail.com"
                className="group block bg-white hover:bg-white transition-all duration-300 p-8 rounded-3xl border-4 border-white hover:border-[#FF6B35] hover:shadow-xl"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-14 h-14 bg-black rounded-2xl group-hover:bg-[#FF6B35] transition-colors flex items-center justify-center">
                    <Mail className="h-7 w-7 text-white" />
                  </div>
                  <div className="text-3xl text-black/10 group-hover:text-[#FF6B35]/30 transition-colors">→</div>
                </div>
                <div>
                  <div className="text-xs font-bold text-black/40 uppercase tracking-wider mb-2">Contact</div>
                  <div className="text-xl font-bold text-black group-hover:text-[#FF6B35] transition-colors mb-1">
                    Email Me
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="text-black/60 text-[15px]">tejachandra7@gmail.com</div>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        copyToClipboard('tejachandra7@gmail.com', 'email');
                      }}
                      className="text-black/40 hover:text-[#FF6B35] transition-colors"
                      title="Copy email"
                    >
                      {copiedEmail ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                    </button>
                  </div>
                </div>
              </a>

              {/* Phone Card */}
              <a 
                href="tel:+919491446414"
                className="group block bg-white hover:bg-white transition-all duration-300 p-8 rounded-3xl border-4 border-white hover:border-[#FF6B35] hover:shadow-xl"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-14 h-14 bg-black rounded-2xl group-hover:bg-[#FF6B35] transition-colors flex items-center justify-center">
                    <Phone className="h-7 w-7 text-white" />
                  </div>
                  <div className="text-3xl text-black/10 group-hover:text-[#FF6B35]/30 transition-colors">→</div>
                </div>
                <div>
                  <div className="text-xs font-bold text-black/40 uppercase tracking-wider mb-2">Contact</div>
                  <div className="text-xl font-bold text-black group-hover:text-[#FF6B35] transition-colors mb-1">
                    Call Me
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="text-black/60 text-[15px]">+91 9491 446 414</div>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        copyToClipboard('+919491446414', 'phone');
                      }}
                      className="text-black/40 hover:text-[#FF6B35] transition-colors"
                      title="Copy phone number"
                    >
                      {copiedPhone ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                    </button>
                  </div>
                </div>
              </a>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* LinkedIn */}
              <a 
                href="https://www.linkedin.com/in/teja-chandra/"
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-white/5 hover:bg-white/10 backdrop-blur-sm border-2 border-white/20 hover:border-[#FF6B35] transition-all duration-300 p-8 rounded-2xl"
              >
                <div className="space-y-6">
                  <div className="w-14 h-14 bg-white/10 rounded-2xl group-hover:bg-[#FF6B35] transition-colors flex items-center justify-center">
                    <Linkedin className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white/40 uppercase tracking-wider mb-2">Connect</div>
                    <div className="text-xl font-bold text-white">
                      LinkedIn
                    </div>
                  </div>
                </div>
              </a>

              {/* Resume */}
              <a 
                href="https://drive.google.com/file/d/1IzwB15tZ6ifleu91ckA67inLejH-Sfe3/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-[#FF6B35] hover:bg-[#FF5722] transition-all duration-300 p-8 rounded-2xl shadow-2xl hover:shadow-[#FF6B35]/50"
              >
                <div className="space-y-6">
                  <div className="w-14 h-14 bg-white/20 rounded-2xl group-hover:bg-white/30 transition-colors flex items-center justify-center">
                    <Eye className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white/70 uppercase tracking-wider mb-2">View</div>
                    <div className="text-xl font-bold text-white">
                      Resume
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-32 pt-12 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-white/40 text-sm">
              © 2026 Chandra Teja
            </p>
            <p className="text-white/40 text-sm italic">Design for clarity, build for impact</p>
          </div>
        </div>
      </div>
    </section>
  );
}