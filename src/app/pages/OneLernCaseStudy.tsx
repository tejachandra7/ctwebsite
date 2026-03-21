import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router';

export default function OneLernCaseStudy() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-black/10">
        <div className="max-w-6xl mx-auto px-6 md:px-12 py-6 flex justify-between items-center">
          <Link
            to="/"
            className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity"
          >
            <div className="w-10 h-10 bg-black flex items-center justify-center rounded-lg">
              <span className="text-sm font-bold text-white">CT</span>
            </div>
          </Link>

          <Link to="/">
            <button className="inline-flex items-center justify-center gap-2 h-11 px-6 rounded-full border-2 border-black text-sm font-bold tracking-wider text-black hover:bg-black hover:text-white transition-colors">
              <ArrowLeft className="h-4 w-4" />
              BACK
            </button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <div className="mb-6">
            <span className="text-sm font-bold text-[#FF6B35] tracking-wider uppercase">
              Case Study — 2022
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-black leading-[1.1] mb-8 font-['Work_Sans']">
            OneLern Assessment Redesign
          </h1>
          
          <p className="text-xl md:text-2xl text-black/60 leading-relaxed mb-12 max-w-3xl">
            Transforming teacher workflows from manual question creation to structured curation — reducing effort while maintaining academic rigor across K–12 classrooms in India and the Caribbean.
          </p>

          {/* Quick Info Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-black/10">
            <div>
              <div className="text-xs font-bold text-black/40 uppercase tracking-wider mb-2">Role</div>
              <div className="text-base text-black font-medium">UX Product Design Manager</div>
            </div>
            <div>
              <div className="text-xs font-bold text-black/40 uppercase tracking-wider mb-2">Year</div>
              <div className="text-base text-black font-medium">2022</div>
            </div>
            <div>
              <div className="text-xs font-bold text-black/40 uppercase tracking-wider mb-2">Domain</div>
              <div className="text-base text-black font-medium">EdTech</div>
            </div>
            <div>
              <div className="text-xs font-bold text-black/40 uppercase tracking-wider mb-2">Platform</div>
              <div className="text-base text-black font-medium">iOS, Android, Web</div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Image */}
      <div className="mb-24">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="bg-gradient-to-br from-[#FF6B35]/10 to-black/5 rounded-3xl overflow-hidden aspect-video flex items-center justify-center">
            <p className="text-sm font-bold text-black/30 tracking-wider uppercase">
              [Hero Image / Product Overview]
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 md:px-12 pb-24 space-y-24">
        
        {/* Overview */}
        <section className="space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-black font-['Work_Sans']">
            Overview
          </h2>
          
          <p className="text-lg text-black/70 leading-relaxed">
            OneLern is a cross-platform digital learning ecosystem serving K–12 schools across India and the Caribbean. After launching to partner schools, we discovered significant friction in the Assessments module — a critical feature for product adoption.
          </p>

          <p className="text-lg text-black/70 leading-relaxed">
            Teachers valued assessments but struggled with manual question creation, particularly on tablets. I led a cross-functional initiative to reimagine the entire assessment experience, shifting from creation to curation through a structured Question Bank ecosystem.
          </p>

          <div className="bg-[#FF6B35] text-white rounded-2xl p-8 md:p-10">
            <div className="text-sm font-bold text-white/80 uppercase tracking-wider mb-3">Key Challenge</div>
            <p className="text-xl md:text-2xl font-bold leading-tight">
              "How might we reduce teacher effort while maintaining academic rigor and ensuring scalability across multiple markets?"
            </p>
          </div>
        </section>

        {/* Research */}
        <section className="space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-black font-['Work_Sans']">
            Understanding the Problem
          </h2>
          
          <p className="text-lg text-black/70 leading-relaxed">
            We conducted field research across multiple schools, observing teachers in their actual classroom environments and conducting in-depth interviews to understand the friction points.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="text-base font-bold text-black">What we discovered:</div>
              <ul className="space-y-3">
                {[
                  'Question creation was extremely data-heavy and time-consuming',
                  'Tablet typing significantly increased friction',
                  'Teachers wanted speed; admins wanted standardization',
                  'High effort overhead reduced overall assessment adoption'
                ].map((insight, index) => (
                  <li key={index} className="flex items-start gap-3 text-base text-black/70">
                    <div className="w-1.5 h-1.5 bg-[#FF6B35] rounded-full mt-2 flex-shrink-0"></div>
                    {insight}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-black/5 rounded-2xl p-8 flex items-center justify-center min-h-[240px]">
              <p className="text-xs font-bold text-black/30 tracking-wider uppercase text-center">
                [Research Photos]
              </p>
            </div>
          </div>
        </section>

        {/* Reframing */}
        <section className="space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-black font-['Work_Sans']">
            Reframing the Problem
          </h2>
          
          <p className="text-lg text-black/70 leading-relaxed">
            Initial discussions focused on UI improvements. But our research revealed a deeper system-level problem — the entire model of manual question creation was fundamentally misaligned with teacher workflows and device constraints.
          </p>

          <div className="bg-white border-2 border-black/10 rounded-2xl p-8 md:p-10 space-y-6">
            <div>
              <div className="text-xs font-bold text-black/30 uppercase tracking-wider mb-3">Initial Assumption</div>
              <p className="text-xl text-black/50 italic">"Let's improve the question creation UI."</p>
            </div>
            
            <div className="w-12 h-px bg-[#FF6B35]"></div>

            <div>
              <div className="text-xs font-bold text-[#FF6B35] uppercase tracking-wider mb-3">Reframed Problem</div>
              <p className="text-xl text-black font-bold">"How do we shift from manual creation to intelligent curation?"</p>
            </div>
          </div>
        </section>

        {/* Solution */}
        <section className="space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-black font-['Work_Sans']">
            The Solution
          </h2>
          
          <p className="text-lg text-black/70 leading-relaxed">
            We introduced a two-part solution: a backend Question Bank ecosystem and redesigned teacher-facing workflows.
          </p>

          {/* Part 1 */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#FF6B35] flex items-center justify-center flex-shrink-0">
                <span className="text-lg font-bold text-white">1</span>
              </div>
              <h3 className="text-2xl font-bold text-black font-['Work_Sans']">Question Bank Ecosystem</h3>
            </div>

            <p className="text-base text-black/70 leading-relaxed">
              We worked with Subject Matter Experts to build a structured content library with multi-level academic tagging (Subject → Book → Chapter → Section). This shifted the heavy lifting from teachers to a backend production pipeline.
            </p>

            <div className="bg-black/5 rounded-2xl p-8 flex items-center justify-center min-h-[200px]">
              <p className="text-xs font-bold text-black/30 tracking-wider uppercase text-center">
                [Question Bank Structure Diagram]
              </p>
            </div>
          </div>

          {/* Part 2 */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#FF6B35] flex items-center justify-center flex-shrink-0">
                <span className="text-lg font-bold text-white">2</span>
              </div>
              <h3 className="text-2xl font-bold text-black font-['Work_Sans']">Redesigned Test Creation Modes</h3>
            </div>

            <p className="text-base text-black/70 leading-relaxed">
              We introduced two distinct modes: <strong>Quick Test Mode</strong> for rapid assessment generation using smart filters, and <strong>Advanced Test Mode</strong> for granular question selection and customization.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-black/5 rounded-2xl p-8 flex items-center justify-center min-h-[240px]">
                <p className="text-xs font-bold text-black/30 tracking-wider uppercase text-center">
                  [Quick Mode Flow]
                </p>
              </div>
              <div className="bg-black/5 rounded-2xl p-8 flex items-center justify-center min-h-[240px]">
                <p className="text-xs font-bold text-black/30 tracking-wider uppercase text-center">
                  [Advanced Mode Flow]
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Impact */}
        <section className="space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-black font-['Work_Sans']">
            Impact
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { label: 'Reduction in assessment creation time', icon: '⏱️' },
              { label: 'Increase in teacher adoption', icon: '📈' },
              { label: 'Questions added to bank', icon: '📚' },
              { label: 'Positive teacher feedback', icon: '💬' }
            ].map((item, index) => (
              <div key={index} className="bg-white border-2 border-black/10 rounded-2xl p-8 space-y-3 hover:border-[#FF6B35]/30 transition-colors">
                <div className="text-3xl">{item.icon}</div>
                <div className="text-base font-medium text-black/70">{item.label}</div>
              </div>
            ))}
          </div>

          <div className="bg-black/5 rounded-2xl p-8 flex items-center justify-center min-h-[200px]">
            <p className="text-xs font-bold text-black/30 tracking-wider uppercase text-center">
              [Analytics & Feedback Visualization]
            </p>
          </div>
        </section>

        {/* Process */}
        <section className="space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-black font-['Work_Sans']">
            My Role & Process
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              'Led field research strategy and execution across multiple schools',
              'Synthesized insights into system-level problem definition',
              'Facilitated cross-functional workshops with Product, Engineering, and SMEs',
              'Guided design team through iterative workflow prototyping',
              'Ensured scalable structure for multi-market deployment',
              'Balanced academic rigor with usability and teacher workflows'
            ].map((role, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-[#FF6B35] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-base text-black/70">{role}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Challenges */}
        <section className="space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-black font-['Work_Sans']">
            Challenges & Learnings
          </h2>
          
          <p className="text-lg text-black/70 leading-relaxed">
            This project required significant organizational alignment. Convincing stakeholders to invest in content infrastructure (instead of just UI fixes) was challenging. Managing SME bandwidth and balancing speed vs. academic quality required constant negotiation.
          </p>

          <div className="bg-black text-white rounded-2xl p-8 md:p-10">
            <p className="text-lg leading-relaxed">
              <strong className="text-[#FF6B35]">Key Learning:</strong> Designing for education at scale requires more than interface optimization. Real impact often lies in reframing the problem, aligning cross-functional teams, and building systems that reduce effort while maintaining quality.
            </p>
          </div>
        </section>

      </div>

      {/* Navigation Footer */}
      <div className="border-t border-black/10">
        <div className="max-w-4xl mx-auto px-6 md:px-12 py-12">
          <div className="flex justify-between items-center">
            <Link to="/">
              <button className="inline-flex items-center justify-center gap-2 h-11 px-6 rounded-full border-2 border-black text-sm font-bold tracking-wider text-black hover:bg-black hover:text-white transition-colors">
                <ArrowLeft className="h-4 w-4" />
                BACK TO PORTFOLIO
              </button>
            </Link>

            <div className="text-sm font-medium text-black/40">
              More case studies coming soon
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-14 h-14 bg-black text-white rounded-full flex items-center justify-center hover:bg-[#FF6B35] transition-colors shadow-xl"
        aria-label="Scroll to top"
      >
        <ArrowUpRight className="h-5 w-5 rotate-[-90deg]" />
      </button>
    </div>
  );
}
