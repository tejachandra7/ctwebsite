import * as React from 'react';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

// ── Reusable layout primitives ────────────────────────────────────

function SectionLabel({ number, label }: { number: string; label: string }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className="text-xs font-bold text-[#FF6B35] tracking-widest uppercase">{number}</span>
      <div className="w-8 h-px bg-[#FF6B35]" />
      <span className="text-xs font-bold text-black/40 tracking-widest uppercase">{label}</span>
    </div>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="heading-font text-3xl md:text-4xl font-bold text-black leading-tight mb-6 font-['Work_Sans'] tracking-tight">
      {children}
    </h2>
  );
}

function SubHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="heading-font text-xl font-bold text-black mb-3 font-['Work_Sans']">
      {children}
    </h3>
  );
}

function BodyText({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-lg text-black/70 leading-relaxed mb-4">
      {children}
    </p>
  );
}

function Divider() {
  return <div className="w-full h-px bg-black/10 my-16" />;
}

function ImagePlaceholder({ label, hint, tall = false }: { label: string; hint: string; tall?: boolean }) {
  return (
    <div className={`w-full rounded-2xl border-2 border-dashed border-black/20 bg-black/[0.02] flex flex-col items-start justify-center gap-3 ${tall ? 'min-h-[320px]' : 'min-h-[220px]'} p-8`}>
      <div className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center">
        <div className="w-5 h-5 border-2 border-dashed border-black/20 rounded" />
      </div>
      <p className="text-sm font-bold text-black/50 tracking-wider uppercase text-left">{label}</p>
      <p className="text-xs font-bold text-black/30 tracking-wider uppercase text-left max-w-sm">{hint}</p>
    </div>
  );
}

function BulletItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3 text-base text-black/70 leading-relaxed">
      <div className="w-1.5 h-1.5 bg-[#FF6B35] rounded-full mt-2.5 flex-shrink-0" />
      <span>{children}</span>
    </li>
  );
}

function CalloutBox({
  label,
  children,
  variant = 'orange',
}: {
  label: string;
  children: React.ReactNode;
  variant?: 'orange' | 'black' | 'light' | 'warning';
}) {
  const styles = {
    orange: 'bg-[#FF6B35] text-white',
    black: 'bg-black text-white',
    light: 'bg-black/5 text-black',
    warning: 'bg-amber-50 border-2 border-amber-200 text-black',
  };
  const labelStyles = {
    orange: 'text-white/70',
    black: 'text-[#FF6B35]',
    light: 'text-black/40',
    warning: 'text-amber-600',
  };
  return (
    <div className={`rounded-2xl p-8 md:p-10 ${styles[variant]}`}>
      <div className={`text-xs font-bold uppercase tracking-widest mb-3 ${labelStyles[variant]}`}>{label}</div>
      <div className="text-lg leading-relaxed font-medium">{children}</div>
    </div>
  );
}

function AnimatedSection({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const { ref, isVisible } = useScrollAnimation(0.08);
  return (
    <section
      ref={ref}
      className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${className}`}
    >
      {children}
    </section>
  );
}

export default function OneLernCaseStudyFull() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <div className="min-h-screen bg-white text-left">
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-black/10">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-6 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div className="w-10 h-10 bg-black flex items-center justify-center rounded-lg">
              <span className="text-sm font-bold text-white">CT</span>
            </div>
          </Link>
          <Link to="/">
            <button className="inline-flex items-center gap-2 h-10 px-6 rounded-full border-2 border-black text-xs font-bold tracking-widest text-black hover:bg-black hover:text-white transition-colors">
              <ArrowLeft className="h-3.5 w-3.5" />
              BACK
            </button>
          </Link>
        </div>
      </nav>

      {/* HERO */}
      <div className="pt-32 pb-16 max-w-4xl mx-auto px-6 md:px-12">
        <div className="mb-5">
          <span className="text-xs font-bold text-[#FF6B35] tracking-widest uppercase">
            Case Study · EdTech · UX Research & Product Design
          </span>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-black leading-[1.05] mb-8 font-['Work_Sans'] tracking-tight heading-font">
          Reimagining Assessment Creation in OneLern
        </h1>
        <p className="text-xl md:text-2xl text-black/60 leading-relaxed mb-12 max-w-3xl">
          A research-led redesign that delivered 400% growth in assessment adoption — retaining at-risk school
          contracts and proving that the right design decision is always grounded in real user behaviour.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-black/10">
          {[
            { label: 'Role', value: 'Senior Manager, Product Design' },
            { label: 'Company', value: 'FortunaPIX Pvt. Ltd.' },
            { label: 'Product', value: 'OneLern — EdTech Platform' },
            { label: 'Domain', value: 'B2B EdTech / K–12 Schools' },
          ].map(({ label, value }) => (
            <div key={label}>
              <div className="text-xs font-bold text-black/35 uppercase tracking-widest mb-1.5">{label}</div>
              <div className="text-sm font-medium text-black">{value}</div>
            </div>
          ))}
        </div>
      </div>

      {/* METRICS BAR */}
      <div className="bg-black text-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12 py-10">
          <div className="grid grid-cols-3 gap-8">
            {[
              { value: '400%', label: 'Adoption Increase', sub: 'in assessment module usage' },
              { value: '500+', label: 'Schools Researched', sub: 'across two research phases' },
              { value: '< 5 min', label: 'Time to Create', sub: 'down from 2–5 min per question' },
            ].map(({ value, label, sub }) => (
              <div key={label} className="border-l-2 border-[#FF6B35] pl-6">
                <div className="text-3xl md:text-4xl font-bold text-white font-['Work_Sans'] mb-1">{value}</div>
                <div className="text-xs font-bold text-white/80 uppercase tracking-wider mb-0.5">{label}</div>
                <div className="text-xs text-white/40">{sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* HERO IMAGE */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-12">
        <div className="bg-gradient-to-br from-[#FF6B35]/10 to-black/5 rounded-3xl overflow-hidden aspect-video flex items-start justify-start p-6">
          <p className="text-xs font-bold text-black/25 tracking-widest uppercase text-left">
            [ Hero Image — Product / Assessment Overview ]
          </p>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-4xl mx-auto px-6 md:px-12 pb-32 space-y-20">
        {/* 01 TL;DR */}
        <AnimatedSection>
          <SectionLabel number="01" label="Executive Summary" />
          <SectionHeading>TL;DR</SectionHeading>
          <CalloutBox label="The Short Version" variant="light">
            <div className="space-y-4 text-black/70 font-normal text-base">
              <p>
                OneLern is a K–12 EdTech platform that took partner schools fully digital — replacing paper textbooks
                and assessments with tablets. After early versions shipped, the Assessment Module had the highest
                stakeholder interest yet one of the lowest adoption rates across the platform.
              </p>
              <p>
                As Senior Manager of Product Design, I initiated and led a two-phase user research programme across
                500+ schools — designing the methodology, securing VP and management approvals, and coordinating execution through our Customer Success network. Research revealed one root cause: creating a
                single assessment question took teachers 2–5 minutes on a tablet, making a full test an impossible
                ask.
              </p>
              <p>
                The solution was a full workflow redesign — replacing the blank-canvas question builder with an auto-generation system anchored in a pre-populated question bank, offered in two contextually appropriate modes: Quick Test and Advanced Test. The result was a{' '}
                <strong className="text-black">400% increase in adoption</strong>, school contract retention, and a platform that finally delivered on its digital transformation promise.
              </p>
            </div>
          </CalloutBox>
        </AnimatedSection>

        <Divider />

        {/* 02 MY ROLE */}
        <AnimatedSection>
          <SectionLabel number="02" label="Contributions" />
          <SectionHeading>My Role & Key Contributions</SectionHeading>
          <BodyText>
            This was not a project handed to me — it was one I initiated, championed, and drove end-to-end.
          </BodyText>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-black text-white rounded-2xl p-8 space-y-5">
              <div className="text-xs font-bold text-[#FF6B35] uppercase tracking-widest">What I Led</div>
              <ul className="space-y-3">
                {[
                  'Conceived and proposed the entire user research initiative',
                  'Pitched the approach to VP and senior management to secure approvals',
                  'Designed the module-wise questionnaire framework for Phase 1',
                  'Co-ordinated distribution across 500 schools via the S3 network',
                  'Directed in-person school visits across all stakeholder groups',
                  'Synthesised findings into the research report and presented to leadership',
                  'Drove cross-functional alignment across design, product, engineering, and content',
                  'Made the strategic call to remove custom creation entirely',
                  'Oversaw design handoff documentation for tech and product teams',
                  'Led S3 training programme for change management and rollout',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-white/70 leading-relaxed">
                    <div className="w-1.5 h-1.5 bg-[#FF6B35] rounded-full mt-1.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-black/5 rounded-2xl p-8 space-y-5">
              <div className="text-xs font-bold text-black/40 uppercase tracking-widest">What I Collaborated On</div>
              <ul className="space-y-3">
                {[
                  'UX design and wireframing — with Ritisha, Sushil, and Swaroopa',
                  'Product prioritisation and roadmap framing — with Raja (PM)',
                  'Question bank content strategy — with the SME / Content team',
                  'Engineering delivery — with Sripathi (Head of Delivery)',
                  'Executive decisions — with Tharun (VP Design) and CEO',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-black/60 leading-relaxed">
                    <div className="w-1.5 h-1.5 bg-black/30 rounded-full mt-1.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </AnimatedSection>

        <Divider />

        {/* 03 CONTEXT */}
        <AnimatedSection>
          <SectionLabel number="03" label="Background" />
          <SectionHeading>Context — The Product & The Platform</SectionHeading>
          <BodyText>
            OneLern is FortunaPIX's flagship K–12 EdTech platform operating across three surfaces, each serving a distinct user group:
          </BodyText>
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            {[
              {
                title: 'OneLern Teacher App',
                desc: 'Primary daily users — in and outside classrooms. Modules: Library, Lesson Delivery, Assignments, Assessments, and Doubts.',
                highlight: true,
              },
              {
                title: 'OneLern Student App',
                desc: 'Students access learning content, take assessments, and raise doubts — to their class teacher or school-wide.',
                highlight: false,
              },
              {
                title: 'Admin & Principal Web Portal',
                desc: 'School admins and principals manage students, teachers, classes, curriculum, and view learning outcomes.',
                highlight: true,
              },
            ].map(({ title, desc, highlight }) => (
              <div
                key={title}
                className={`rounded-2xl p-6 border-2 ${
                  highlight ? 'border-[#FF6B35]/30 bg-[#FF6B35]/5' : 'border-black/10 bg-white'
                }`}
              >
                <div className="text-sm font-bold text-black mb-2">{title}</div>
                <p className="text-sm text-black/55 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
          <BodyText>
            The shift to OneLern represented a complete digital transformation for partner schools — institutions that had previously relied entirely on physical textbooks and paper-based assessments. Tablets became the primary device. For this transformation to succeed, every feature had to be genuinely usable by real teachers in real classrooms. The Assessment Module was the clearest gap.
          </BodyText>
        </AnimatedSection>

        <Divider />

        {/* 04 RESEARCH */}
        <AnimatedSection>
          <SectionLabel number="04" label="Discovery" />
          <SectionHeading>The Research Initiative</SectionHeading>
          <BodyText>
            Good design does not come from conference rooms. After the first versions of OneLern shipped, I made the case to leadership that we needed to go back to schools — not with assumptions, but with structured research — and listen. Securing VP and management approval was the first challenge. Designing and executing the research was the second.
          </BodyText>

          <div className="space-y-5 mb-12">
            <div className="flex items-center gap-4">
              <div className="w-9 h-9 rounded-full bg-[#FF6B35] flex items-center justify-center flex-shrink-0">
                <span className="text-sm font-bold text-white">1</span>
              </div>
              <SubHeading>Quantitative Research Across 500 Schools</SubHeading>
            </div>
            <BodyText>
              We designed a structured questionnaire segmented module by module — covering Library, Lesson Delivery, Assignments, Assessments, and Doubts. Separate questionnaires were created for each stakeholder: Teacher, Student, School Admin, and Principal. Our School Success Specialists (S3s) distributed these across 500 schools, giving us a rich, module-by-module picture of what was working and what was not.
            </BodyText>
            <div className="grid md:grid-cols-2 gap-4">
              <ImagePlaceholder label="Stakeholder Questionnaires" hint="Teacher, Student, School Admin & Principal questionnaires from Phase 1" />
              <ImagePlaceholder label="Consolidated Research Report" hint="Phase 1 findings report summarising results across 500 schools" />
            </div>
          </div>

          <div className="space-y-5">
            <div className="flex items-center gap-4">
              <div className="w-9 h-9 rounded-full bg-black flex items-center justify-center flex-shrink-0">
                <span className="text-sm font-bold text-white">2</span>
              </div>
              <SubHeading>In-Person Qualitative Research</SubHeading>
            </div>
            <BodyText>
              Numbers tell you what. People tell you why. After synthesising Phase 1, we visited schools in person and interviewed teachers, students, school admins, and principals face to face. We also conducted classroom monitoring sessions — observing live classes to see exactly how teachers interacted with the application in real teaching conditions.
            </BodyText>
            <div className="grid md:grid-cols-2 gap-4">
              <ImagePlaceholder label="School Visit — User Interviews" hint="Photos from in-person visits: interviews with teachers, students, admins, and principals" tall />
              <ImagePlaceholder label="Classroom Monitoring Sessions" hint="Photos from classroom observation — teachers using OneLern during live classes" tall />
            </div>
          </div>
        </AnimatedSection>

        <Divider />

        {/* 05 FINDINGS */}
        <AnimatedSection>
          <SectionLabel number="05" label="Findings" />
          <SectionHeading>High Intent, Low Adoption</SectionHeading>
          <BodyText>
            One pattern stood out clearly across both research phases: the Assessment Module had the highest stakeholder interest of any module — yet one of the lowest adoption rates. Every user group had a reason to care:
          </BodyText>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {[
              { group: 'Teachers', reason: 'Wanted to test student understanding quickly without paper' },
              { group: 'Admins & Principals', reason: 'Needed outcome data to track learning progress across classes' },
              { group: 'Parents', reason: 'Interested in student performance visibility and results' },
              { group: 'Management', reason: 'Needed proof that digital assessment worked to justify contracts' },
            ].map(({ group, reason }) => (
              <div key={group} className="bg-black/5 rounded-2xl p-5">
                <div className="text-xs font-bold text-[#FF6B35] uppercase tracking-wider mb-2">{group}</div>
                <p className="text-sm text-black/60 leading-relaxed">{reason}</p>
              </div>
            ))}
          </div>

          <SubHeading>Root Cause: The Question Creation Process Was Broken</SubHeading>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-amber-50 border-2 border-amber-200 rounded-2xl p-7">
              <div className="text-xs font-bold text-amber-600 uppercase tracking-widest mb-4">The Friction</div>
              <ul className="space-y-3">
                {[
                  'Each question required extensive metadata — type, difficulty, topic tags, marks, and more',
                  'A single question took 2–5 minutes to create from scratch',
                  'Primary teacher device is a tablet — not a keyboard-friendly laptop',
                  'A 20-question test could take 40–100 minutes — an impossible ask',
                ].map((item) => (
                  <BulletItem key={item}>{item}</BulletItem>
                ))}
              </ul>
            </div>
            <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-7">
              <div className="text-xs font-bold text-green-700 uppercase tracking-widest mb-4">The Opportunity</div>
              <ul className="space-y-3">
                {[
                  "OneLern already had a question bank — it just wasn't being populated or prioritised",
                  "If teachers didn't have to create questions at all, the adoption barrier disappears",
                  'Auto-generation could reduce creation time to under 5 minutes',
                  'This would unlock outcome data for all stakeholders — completing the value loop',
                ].map((item) => (
                  <BulletItem key={item}>{item}</BulletItem>
                ))}
              </ul>
            </div>
          </div>
        </AnimatedSection>

        <Divider />

        {/* 06 ALIGNMENT */}
        <AnimatedSection>
          <SectionLabel number="06" label="Strategy" />
          <SectionHeading>Stakeholder Alignment & Problem Framing</SectionHeading>
          <BodyText>
            Research findings are only as powerful as the decisions they unlock. We compiled findings into a formal research report and presented to the product management team — framing the problem not as a UX issue, but as a platform adoption crisis with direct business consequences.
          </BodyText>
          <BodyText>
            The product manager and team subsequently visited one of the flagged schools themselves. Seeing the friction firsthand completed the alignment. The issue was escalated to the CEO level. Fixing the Assessment Module became a company-wide, high-priority initiative.
          </BodyText>
          <div className="mb-8">
            <ImagePlaceholder
              label="Internal Alignment & Discussion Sessions"
              hint="Photos from internal team discussions, whiteboarding sessions, and stakeholder alignment meetings"
            />
          </div>
          <CalloutBox label="Formally Framed Problem Statement" variant="orange">
            "How might we reduce the time and effort required for teachers to create assessments — so that digital assessment becomes a natural, habitual part of teaching rather than a burden that gets avoided?"
          </CalloutBox>
        </AnimatedSection>

        <Divider />

        {/* 07 DESIGN PROCESS */}
        <AnimatedSection>
          <SectionLabel number="07" label="Process" />
          <SectionHeading>Design Process & Artefacts</SectionHeading>
          <BodyText>
            With alignment secured, the design team moved into exploration. Our process ran from problem definition through to handoff — ensuring every design decision was traceable back to a user need.
          </BodyText>

          <div className="space-y-12">
            <div>
              <SubHeading>User Flow Analysis — Old vs. New</SubHeading>
              <BodyText>
                Before sketching solutions, we mapped the existing assessment creation flow end to end, documenting every step and every decision point a teacher had to navigate. This gave us a clear before-state and a measurable target for improvement.
              </BodyText>
              <ImagePlaceholder
                label="User Flow Comparison — Old vs. New Assessment Workflow"
                hint="Side-by-side user flow diagrams showing the old complex creation flow vs. the new auto-generation flow"
                tall
              />
            </div>
            <div>
              <SubHeading>Wireframes & Design Explorations</SubHeading>
              <BodyText>
                Multiple design directions were explored before converging on the Quick Test and Advanced Test model. Early explorations tested different ways of surfacing question bank options, filter configurations, and review interfaces.
              </BodyText>
              <ImagePlaceholder
                label="Wireframes & Design Explorations"
                hint="Wireframes, sketches, or low-fidelity explorations from the ideation phase"
                tall
              />
            </div>
            <div>
              <SubHeading>Updated Design Screens</SubHeading>
              <BodyText>
                Once the direction was validated, the team moved to high-fidelity design. The updated screens reflect the simplified, auto-generation-first approach across both Quick Test and Advanced Test modes.
              </BodyText>
              <div className="grid md:grid-cols-2 gap-4">
                <ImagePlaceholder
                  label="Before — Old Assessment Creation Screens"
                  hint="Original question creation screens showing the complex, time-consuming workflow"
                  tall
                />
                <ImagePlaceholder
                  label="After — New Quick Test & Advanced Test Screens"
                  hint="Redesigned high-fidelity screens for the new assessment creation workflow"
                  tall
                />
              </div>
            </div>
            <div>
              <SubHeading>Design Handoff Documentation</SubHeading>
              <BodyText>
                To ensure design intent translated accurately through engineering delivery, we produced comprehensive handoff documentation — covering interaction specifications, component states, edge cases, and annotated screens for both product management and the technology team.
              </BodyText>
              <ImagePlaceholder
                label="Design Handoff Documentation — Tech & Product Management"
                hint="Pages from the design handoff documentation prepared for engineering and product management"
              />
            </div>
          </div>
        </AnimatedSection>

        <Divider />

        {/* 08 SOLUTION */}
        <AnimatedSection>
          <SectionLabel number="08" label="Solution" />
          <SectionHeading>Two Modes, One Core Principle</SectionHeading>
          <BodyText>
            The core design principle was simple: <strong>never ask a teacher to start from a blank page.</strong> Every assessment creation path begins with the system auto-generating a complete question paper from the OneLern question bank. The teacher's job is to review and refine — not to build from scratch.
          </BodyText>
          <BodyText>We identified two distinct teacher contexts and designed a dedicated mode for each:</BodyText>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="border-2 border-black/10 rounded-2xl p-8 space-y-5 hover:border-[#FF6B35]/40 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-black flex items-center justify-center">
                  <span className="text-sm font-bold text-white">Q</span>
                </div>
                <div>
                  <div className="text-base font-bold text-black">Quick Test</div>
                  <div className="text-xs text-black/40 italic">For the teacher who needs an assessment right now</div>
                </div>
              </div>
              <ol className="space-y-2.5">
                {['Select class and section', 'Select chapter and sections', 'System auto-generates the question paper', 'Optional: swap any question with one tap', 'Schedule and done'].map((step, i) => (
                  <li key={step} className="flex items-start gap-3 text-sm text-black/60">
                    <span className="w-5 h-5 rounded-full bg-black/10 flex items-center justify-center text-xs font-bold text-black/40 flex-shrink-0 mt-0.5">{i + 1}</span>
                    {step}
                  </li>
                ))}
              </ol>
              <div className="pt-2 border-t border-black/10">
                <span className="text-sm font-bold text-[#FF6B35]">Under 5 minutes. </span>
                <span className="text-sm text-black/40">Generate + schedule only: under 2 minutes.</span>
              </div>
            </div>

            <div className="border-2 border-[#FF6B35]/30 bg-[#FF6B35]/5 rounded-2xl p-8 space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#FF6B35] flex items-center justify-center">
                  <span className="text-sm font-bold text-white">A</span>
                </div>
                <div>
                  <div className="text-base font-bold text-black">Advanced Test</div>
                  <div className="text-xs text-black/40 italic">For the teacher with time and a specific vision</div>
                </div>
              </div>
              <ol className="space-y-2.5">
                {['Same chapter/section selection as Quick Test', 'System auto-generates the full question paper', 'Swap, delete & re-add, or directly replace questions from the bank', 'Section questions by type — MCQ, short answer, etc.', 'Switch between OneLern and School Question Bank'].map((step, i) => (
                  <li key={step} className="flex items-start gap-3 text-sm text-black/60">
                    <span className="w-5 h-5 rounded-full bg-[#FF6B35]/20 flex items-center justify-center text-xs font-bold text-[#FF6B35] flex-shrink-0 mt-0.5">{i + 1}</span>
                    {step}
                  </li>
                ))}
              </ol>
              <div className="pt-2 border-t border-[#FF6B35]/20">
                <span className="text-sm font-bold text-[#FF6B35]">More control. </span>
                <span className="text-sm text-black/40">Still anchored in auto-generation.</span>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <Divider />

        {/* 09 CONSTRAINTS */}
        <AnimatedSection>
          <SectionLabel number="09" label="Tradeoffs" />
          <SectionHeading>Constraints, Tradeoffs & What I'd Revisit</SectionHeading>
          <SubHeading>The Custom Creation Removal — Bold but Considered</SubHeading>
          <BodyText>
            The decision to remove the original custom question creation flow entirely was deliberate and strategic. The data showed it was the source of the adoption problem, and keeping it as a secondary option risked teachers defaulting to it out of habit.
          </BodyText>
          <BodyText>
            We preserved the ability for teachers to create their own questions by routing it through the School Question Bank — separating content creation from assessment creation, which is a fundamentally better mental model.
          </BodyText>
          <div className="mb-10">
            <CalloutBox label="The Tradeoff" variant="black">
              We gave up maximum flexibility in the moment of assessment creation to gain dramatically better adoption. The bet was that most teachers would prefer a fast, good-enough assessment over a slow, perfectly customised one — and the 400% adoption increase validated that bet.
            </CalloutBox>
          </div>
          <SubHeading>Constraints We Navigated</SubHeading>
          <ul className="space-y-3 mb-10">
            {[
              'Tablet-first constraint: All design decisions had to work on tablets — limiting interaction patterns significantly.',
              'Content dependency: The solution was only as good as the question bank. We depended on the SME/Content team delivering quality questions before launch.',
              'Change management risk: Removing a familiar workflow required careful rollout planning to avoid teacher frustration.',
              'Cross-functional co-ordination: Aligning design, product, content, and engineering on a shared timeline was a significant operational challenge.',
            ].map((item) => (
              <BulletItem key={item}>{item}</BulletItem>
            ))}
          </ul>
          <SubHeading>What I'd Revisit</SubHeading>
          <ul className="space-y-3">
            {[
              'Earlier awareness-building: In retrospect, in-app onboarding at first launch would have reduced confusion further beyond the S3 training.',
              'Deeper post-launch research: A formal post-launch usability study would have helped us iterate faster on edge cases.',
              'Student-side impact: A follow-up study on how the assessment experience changed for students would complete the picture.',
            ].map((item) => (
              <BulletItem key={item}>{item}</BulletItem>
            ))}
          </ul>
        </AnimatedSection>

        <Divider />

        {/* 10 ROLLOUT */}
        <AnimatedSection>
          <SectionLabel number="10" label="Rollout" />
          <SectionHeading>Change Management & Rollout</SectionHeading>
          <BodyText>
            Shipping a redesign that removes a familiar workflow — even a painful one — carries adoption risk. We managed this through a structured training programme before the launch reached schools.
          </BodyText>
          <BodyText>
            The product design team first ran internal training sessions with our School Success Specialists (S3s), walking them through every change: what was removed, what replaced it, and why. The S3s were not just messengers — they were the trusted faces that schools already relied on for support.
          </BodyText>
          <CalloutBox label="Full Circle Moment" variant="light">
            The same S3 network that helped us distribute research questionnaires to 500 schools at the start of this project became the delivery mechanism for the solution at the end. Using the same infrastructure for both discovery and adoption was a systems-level decision I'm proud of.
          </CalloutBox>
        </AnimatedSection>

        <Divider />

        {/* 11 IMPACT */}
        <AnimatedSection>
          <SectionLabel number="11" label="Results" />
          <SectionHeading>Impact & Outcomes</SectionHeading>
          <div className="bg-black text-white rounded-3xl p-10 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { value: '400%', label: 'Adoption Increase', sub: 'in assessment module usage post-launch' },
                { value: '2–3', label: 'Schools Retained', sub: 'at-risk contracts renewed after redesign' },
                { value: '< 5 min', label: 'Creation Time', sub: 'down from 40–100 min for a full test' },
              ].map(({ value, label, sub }) => (
                <div key={label} className="border-l-2 border-[#FF6B35] pl-6">
                  <div className="text-4xl font-bold text-white font-['Work_Sans'] mb-1">{value}</div>
                  <div className="text-xs font-bold text-white/60 uppercase tracking-wider mb-1">{label}</div>
                  <div className="text-xs text-white/35">{sub}</div>
                </div>
              ))}
            </div>
          </div>
          <BodyText>
            The 400% adoption increase validated every decision made along the way. More concretely, at least two schools that had been actively voicing concerns about the platform's value — and were at risk of not renewing their contracts — were retained after the redesign.
          </BodyText>
          <BodyText>
            Beyond the numbers, this project proved something important for FortunaPIX: investing in user research at scale is not a luxury — it is the most efficient path to building features that actually get used.
          </BodyText>
        </AnimatedSection>

        <Divider />

        {/* 12 REFLECTIONS */}
        <AnimatedSection>
          <SectionLabel number="12" label="Learnings" />
          <SectionHeading>Reflections</SectionHeading>
          <BodyText>
            Looking back, the most important thing I did on this project was not design a screen or facilitate a workshop. It was making the case for user research before any design work began — and building the organisational infrastructure to do it at scale across 500 schools.
          </BodyText>
          <BodyText>
            Design leadership is not about having the best ideas in the room. It is about creating the conditions for good decisions to be made — across teams, across hierarchies, and across the full lifecycle of a product.
          </BodyText>
          <CalloutBox label="Key Learning" variant="black">
            The 400% adoption increase is the headline. The real story is everything that had to happen before, during, and after the design work to make it possible — and why thinking from the user's perspective, backed by real data, will always beat designing from assumptions.
          </CalloutBox>
        </AnimatedSection>

        <Divider />

        {/* 13 TEAM */}
        <AnimatedSection>
          <SectionLabel number="13" label="Credits" />
          <SectionHeading>The Team</SectionHeading>
          <BodyText>A true cross-functional effort across research, design, product, and technology.</BodyText>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { name: 'Chandra Teja', role: 'Senior Manager – Product Design', contribution: 'Research initiative, design strategy, stakeholder alignment & rollout', highlight: true },
              { name: 'Tharun', role: 'Vice President – Design', contribution: 'Design leadership & executive sponsorship', highlight: false },
              { name: 'Ritisha (Module Owner – Assessments)', role: 'Senior Product Designer', contribution: 'UX design & research execution', highlight: false },
              { name: 'Sushil', role: 'Senior Product Designer', contribution: 'UX design & research execution', highlight: false },
              { name: 'Swaroopa', role: 'Senior Product Designer', contribution: 'UX design & research execution', highlight: false },
              { name: 'Raja', role: 'Product Manager', contribution: 'Product strategy & cross-team coordination', highlight: false },
              { name: 'Sripathi', role: 'Head – Delivery (Technology)', contribution: 'Engineering delivery & implementation oversight', highlight: false },
              { name: '+ SME / Content, S3s & Sales', role: 'Cross-functional Contributors', contribution: 'Question bank creation, school outreach & contract retention', highlight: false },
            ].map(({ name, role, contribution, highlight }) => (
              <div key={name} className={`rounded-2xl p-5 border-2 ${highlight ? 'border-[#FF6B35] bg-[#FF6B35]/5' : 'border-black/10 bg-white'}`}>
                <div className={`text-sm font-bold mb-0.5 ${highlight ? 'text-[#FF6B35]' : 'text-black'}`}>{name}</div>
                <div className="text-xs font-medium text-black/50 mb-2">{role}</div>
                <p className="text-xs text-black/40 leading-relaxed">{contribution}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>

      {/* FOOTER NAV */}
      <div className="border-t border-black/10">
        <div className="max-w-4xl mx-auto px-6 md:px-12 py-12 flex justify-between items-center">
          <Link to="/">
            <button className="inline-flex items-center gap-2 h-11 px-6 rounded-full border-2 border-black text-xs font-bold tracking-widest text-black hover:bg-black hover:text-white transition-colors">
              <ArrowLeft className="h-4 w-4" />
              BACK TO PORTFOLIO
            </button>
          </Link>
          <div className="text-xs font-medium text-black/30 tracking-wider">chandrateja.com</div>
        </div>
      </div>

      {/* SCROLL TO TOP */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-black text-white rounded-full flex items-center justify-center hover:bg-[#FF6B35] transition-colors shadow-xl"
        aria-label="Scroll to top"
      >
        <ArrowUpRight className="h-4 w-4 -rotate-90" />
      </button>
    </div>
  );
}

