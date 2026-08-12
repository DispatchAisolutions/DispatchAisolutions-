import { ArrowUpRight, RefreshCw, Star, Zap, CheckCircle2, Network } from 'lucide-react';
import { Nav } from '@/components/Nav';
import { StarButton } from '@/components/ui/star-button';

const systemPoints = [
  'Agent 1 brings past customers back',
  'Agent 2 turns visits into reviews and repeat business',
  'Agent 3 makes sure no message ever goes unanswered',
  "The CRM ties it all together and proves it's working",
];

const agents = [
  {
    icon: <RefreshCw className="h-5 w-5" />,
    number: '01',
    title: 'Agent 1 — Reactivation',
    what: "Agent 1 goes through your customer list, identifies who hasn't come back in a while, and reaches out with a personalized message — not a generic blast. It handles the conversation naturally, answers questions, and gets the customer re-booked, re-ordered, or re-engaged.",
    why: "A past customer is far easier and cheaper to sell to than a stranger. Most businesses have this revenue sitting untouched in a customer list that never gets followed up on. Agent 1 turns that list into an active channel.",
    steps: [
      'Identifies inactive customers based on your rules (e.g., no purchase in X days)',
      'Sends a personalized outreach message',
      'Handles replies — questions, objections, scheduling — in a natural conversation',
      'Books or closes the customer, and logs everything to your CRM',
      'Hands off to a real person immediately if the conversation needs one',
    ],
  },
  {
    icon: <Star className="h-5 w-5" />,
    number: '02',
    title: 'Agent 2 — Follow-Up & Reputation',
    what: "After every purchase or service, Agent 2 checks in with the customer, makes sure they're satisfied, and asks for a review at the moment they're most likely to say yes — right after a good experience, while it's still fresh.",
    why: "Reviews don't happen by accident. Without a system prompting for them at the right time, even your happiest customers stay silent — and your online reputation stops growing.",
    steps: [
      'Triggered automatically after a completed purchase or appointment',
      'Sends a short, friendly check-in message',
      'If the customer is happy — asks for a review, with a direct link',
      "If the customer isn't happy — we take their feedback to improve, and step in before it turns into a bad review",
      'Logs satisfaction and review data to your CRM',
    ],
  },
  {
    icon: <Zap className="h-5 w-5" />,
    number: '03',
    title: 'Agent 3 — Instant Reply & Campaigns',
    what: 'Agent 3 replies to every inbound message — questions, inquiries, new leads — professionally and instantly, 24/7. It also sends targeted marketing campaigns to segments of your customer list when you want to promote something specific.',
    why: 'The business that replies first usually wins the customer. A message left unanswered overnight is a sale handed to a competitor. Agent 3 closes that gap completely.',
    steps: [
      'A new message comes in, any time, day or night',
      'Agent 3 replies immediately and professionally, using real information about your business',
      'Answers common questions, qualifies the lead, and moves the conversation forward',
      'Hands off to a real person for anything outside its scope',
      'Separately, sends campaign messages to targeted customer segments when you launch a promotion',
    ],
  },
];

const crmPoints = [
  'Before/after tracking — see your real numbers before the system launched vs. after',
  'Full visibility — every customer interaction, review, and response time in one place',
  "You stay in control — a small amount of manual input is expected; this isn't a black box",
  'Ongoing tuning — we use the same data to monitor performance and improve the agents over time',
];

const additional = [
  'Custom automations for internal operations (scheduling, reporting, admin work)',
  'Additional AI agents for workflows specific to your business',
  'Integrations with the tools and platforms you already use',
];

function Services() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#f5f5f5] dark">
      <Nav />

      {/* HERO */}
      <section className="pt-40 pb-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight leading-tight">
            One System. Three Agents. Every Revenue Gap Covered.
          </h1>
          <p className="text-xl text-[#a3a3a3] leading-relaxed font-light max-w-2xl mx-auto mb-10">
            A closer look at exactly what ElHajj Ai builds for your business — how
            each agent works, what the CRM actually does, and what else we can
            build once the core system is live.
          </p>
          <StarButton
            lightColor="#FBBF24"
            duration={6}
            className="w-auto px-8 h-12 text-base font-semibold"
            onClick={() => window.open('https://cal.com/elhajjai/20min', '_blank')}
          >
            Book a Free Growth Audit <ArrowUpRight className="w-4 h-4 ml-2 inline" />
          </StarButton>
        </div>
      </section>

      {/* SYSTEM OVERVIEW */}
      <section className="py-24 px-6 border-t border-white/5">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <div className="w-fit mx-auto rounded-lg border-[0.75px] border-white/10 bg-white/5 p-3 mb-6">
              <Network className="h-5 w-5" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">How the Pieces Fit Together</h2>
            <p className="text-xl text-[#a3a3a3] leading-relaxed font-light">
              Every business we work with runs on the same core system: 3 AI
              agents, each with one clear job, all connected to a single CRM
              that tracks everything they do.
            </p>
          </div>

          <ul className="space-y-4 max-w-xl mx-auto mb-10">
            {systemPoints.map((point, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-[#FBBF24] flex-shrink-0 mt-0.5" />
                <span className="text-base md:text-lg text-[#a3a3a3] leading-relaxed">
                  {point}
                </span>
              </li>
            ))}
          </ul>

          <p className="text-center text-[#a3a3a3] italic">Below is the detail on each one.</p>
        </div>
      </section>

      {/* AGENTS */}
      {agents.map((agent, index) => (
        <section
          key={agent.number}
          id={`agent-${index + 1}`}
          className="py-24 px-6 border-t border-white/5"
        >
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="flex items-center justify-center h-12 w-12 rounded-full border border-white/10 bg-white/5 flex-shrink-0">
                {agent.icon}
              </div>
              <div>
                <span className="text-xs tracking-widest text-[#a3a3a3] font-semibold">
                  {agent.number}
                </span>
                <h2 className="text-2xl md:text-4xl font-bold">{agent.title}</h2>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              <div>
                <h3 className="text-sm uppercase tracking-wide text-[#FBBF24] font-semibold mb-3">
                  What it does
                </h3>
                <p className="text-base md:text-lg text-[#a3a3a3] leading-relaxed">
                  {agent.what}
                </p>
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-wide text-[#FBBF24] font-semibold mb-3">
                  Why it matters
                </h3>
                <p className="text-base md:text-lg text-[#a3a3a3] leading-relaxed">
                  {agent.why}
                </p>
              </div>
            </div>

            <div className="rounded-2xl border-[0.75px] border-white/10 bg-white/[0.02] p-6 md:p-8">
              <h3 className="text-sm uppercase tracking-wide text-[#a3a3a3] font-semibold mb-6">
                What a typical flow looks like
              </h3>
              <ol className="space-y-5">
                {agent.steps.map((step, stepIndex) => (
                  <li key={stepIndex} className="flex gap-4">
                    <div className="flex items-center justify-center h-7 w-7 rounded-full border border-white/10 bg-white/5 text-xs font-semibold flex-shrink-0">
                      {stepIndex + 1}
                    </div>
                    <span className="text-sm md:text-base text-[#a3a3a3] leading-relaxed pt-0.5">
                      {step}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>
      ))}

      {/* CRM */}
      <section className="py-24 px-6 border-t border-white/5">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">The System Behind the System</h2>
            <p className="text-xl text-[#a3a3a3] leading-relaxed font-light">
              Every conversation, booking, and customer detail the 3 agents
              handle is logged automatically into your own CRM. It's what
              powers the agents — and it's also how you get real proof of
              what's working.
            </p>
          </div>

          <ul className="space-y-4 max-w-2xl mx-auto">
            {crmPoints.map((point, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-[#FBBF24] flex-shrink-0 mt-0.5" />
                <span className="text-base md:text-lg text-[#a3a3a3] leading-relaxed">
                  {point}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ADDITIONAL SERVICES */}
      <section className="py-24 px-6 border-t border-white/5">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Beyond the Core System</h2>
          <p className="text-xl text-[#a3a3a3] leading-relaxed font-light mb-10">
            The 3 agents and CRM are the foundation — but every business has
            its own specific gaps. Once your core system is live, we also
            build:
          </p>
          <ul className="space-y-4 max-w-xl mx-auto text-left mb-10">
            {additional.map((point, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-[#FBBF24] flex-shrink-0 mt-0.5" />
                <span className="text-base md:text-lg text-[#a3a3a3] leading-relaxed">
                  {point}
                </span>
              </li>
            ))}
          </ul>
          <p className="text-lg md:text-xl text-[#f5f5f5] font-medium">
            If something is eating up time on your team, tell us — we'll tell
            you honestly whether it can be automated.
          </p>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section id="contact" className="py-32 px-6 border-t border-white/5">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to See This Built for Your Business?
          </h2>
          <p className="text-xl text-[#a3a3a3] leading-relaxed font-light mb-10">
            Book a free growth audit. We'll walk through your current
            follow-up, review, and response process and show you exactly what
            each agent would fix.
          </p>
          <StarButton
            lightColor="#FBBF24"
            duration={6}
            className="w-auto px-8 h-12 text-base font-semibold"
            onClick={() => window.open('https://cal.com/elhajjai/20min', '_blank')}
          >
            Book a Call <ArrowUpRight className="w-4 h-4 ml-2 inline" />
          </StarButton>
        </div>
      </section>
    </div>
  );
}

export default Services;
