import { TrendingUp, ShieldCheck, Sparkles, Database, Search, Wrench, Link2, FlaskConical } from 'lucide-react';
import { Nav } from '@/components/Nav';
import { GlowingEffect } from '@/components/ui/glowing-effect';
import { StarButton } from '@/components/ui/star-button';
import { cn } from '@/lib/utils';

const beliefs = [
  {
    icon: <TrendingUp className="h-4 w-4" />,
    title: 'Revenue first, technology second.',
    description:
      "We don't sell AI because it's trendy — we use it because it's the most reliable way to make sure no customer and no message falls through the cracks.",
  },
  {
    icon: <ShieldCheck className="h-4 w-4" />,
    title: 'Proof over promises.',
    description:
      'Every system we build tracks its own before-and-after numbers. You should never have to take our word for it.',
  },
  {
    icon: <Sparkles className="h-4 w-4" />,
    title: 'Built for your business, not a template.',
    description:
      'Every agent is trained on your services, your customers, and how you actually talk to people — not a generic script.',
  },
];

const steps = [
  {
    icon: <Database className="h-4 w-4" />,
    title: 'We process your business data',
    description:
      'Customer history, service records, past conversations — we start by seeing exactly how your business runs today.',
  },
  {
    icon: <Search className="h-4 w-4" />,
    title: 'We analyze where revenue is leaking',
    description:
      'Which customers stopped coming back, which messages went unanswered, which happy customers never got asked for a review.',
  },
  {
    icon: <Wrench className="h-4 w-4" />,
    title: 'We build and train each agent on your real business',
    description:
      'Your services, your customer conversations, your tone — not a generic script pulled from a template.',
  },
  {
    icon: <Link2 className="h-4 w-4" />,
    title: 'We connect everything to your CRM',
    description: 'So every interaction is tracked, not just automated.',
  },
  {
    icon: <FlaskConical className="h-4 w-4" />,
    title: 'We test, launch, and keep refining',
    description:
      'We test before it ever reaches a real customer, then monitor performance after launch and keep refining it.',
  },
];

function About() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#f5f5f5] dark">
      <Nav />

      {/* HERO */}
      <section className="pt-40 pb-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight leading-tight">
            We Built ElHajj Ai to Fix One Problem:{' '}
            <span className="text-[#a3a3a3]">Businesses Losing Money They Already Earned</span>
          </h1>
          <p className="text-xl text-[#a3a3a3] leading-relaxed font-light max-w-2xl mx-auto">
            Not another generic AI chatbot company. A flexible system built
            around one job — making sure the customers you already have
            don't slip away.
          </p>
        </div>
      </section>

      {/* WHY */}
      <section className="py-24 px-6 border-t border-white/5">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Why ElHajj Ai Exists</h2>
          <p className="text-xl text-[#a3a3a3] leading-relaxed font-light mb-4">
            Most businesses spend their energy chasing new customers while
            quietly losing the ones they already have. A customer visits
            once, is happy, and never hears from the business again. A great
            review never gets asked for. A message sits unanswered overnight
            and the sale goes to whoever replies first.
          </p>
          <p className="text-xl text-[#f5f5f5] leading-relaxed font-medium">
            That gap — between doing good work and actually getting credit
            and revenue for it — is what ElHajj Ai was built to close.
          </p>
        </div>
      </section>

      {/* WHAT WE BELIEVE */}
      <section className="py-24 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">How We Think About This</h2>
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {beliefs.map((belief, index) => (
              <li key={index} className="min-h-[14rem] list-none">
                <div className="relative h-full rounded-[1.25rem] border-[0.75px] border-white/5 p-2 md:rounded-[1.5rem] md:p-3">
                  <GlowingEffect
                    spread={40}
                    glow={true}
                    disabled={false}
                    proximity={64}
                    inactiveZone={0.01}
                    borderWidth={3}
                  />
                  <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-[0.75px] bg-[#0a0a0a] p-6 shadow-sm md:p-6">
                    <div className="relative flex flex-1 flex-col justify-between gap-3">
                      <div className="w-fit rounded-lg border-[0.75px] border-white/10 bg-white/5 p-2">
                        {belief.icon}
                      </div>
                      <div className="space-y-3">
                        <h3 className="pt-0.5 text-xl leading-[1.375rem] font-semibold font-sans tracking-[-0.04em] md:text-2xl md:leading-[1.875rem] text-balance text-[#f5f5f5]">
                          {belief.title}
                        </h3>
                        <p className="font-sans text-sm leading-[1.125rem] md:text-base md:leading-[1.375rem] text-[#a3a3a3]">
                          {belief.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="py-24 px-6 border-t border-white/5">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">How We Work</h2>
            <p className="text-xl text-[#a3a3a3] leading-relaxed font-light">
              We don't just plug in a generic chatbot and call it done.
              Here's what actually happens behind the scenes.
            </p>
          </div>

          <ol className="space-y-8">
            {steps.map((step, index) => (
              <li key={index} className="flex gap-5">
                <div className="flex flex-col items-center">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full border border-white/10 bg-white/5 text-sm font-semibold flex-shrink-0">
                    {index + 1}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="w-px flex-1 bg-white/10 mt-2" />
                  )}
                </div>
                <div className="pb-2">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[#a3a3a3]">{step.icon}</span>
                    <h3 className="text-lg md:text-xl font-semibold text-[#f5f5f5]">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-base md:text-lg text-[#a3a3a3] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>

          <p className="text-center text-lg md:text-xl text-[#f5f5f5] font-medium mt-12">
            This isn't a plug-and-play tool. It's a system built from your
            actual data, for your actual business.
          </p>
        </div>
      </section>

      {/* WHO WE'RE FOR */}
      <section className="py-24 px-6 border-t border-white/5">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Built for Businesses That Already Have Customers
          </h2>
          <p className="text-xl text-[#a3a3a3] leading-relaxed font-light">
            ElHajj Ai isn't for businesses starting from zero. It's for
            businesses that already have real customers walking through the
            door, buying, and coming back — and want to stop losing that
            revenue to silence, slow replies, and missed follow-ups.
          </p>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section id="contact" className="py-32 px-6 border-t border-white/5">
        <div className={cn('max-w-2xl mx-auto text-center')}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's See Where Your Revenue Is Leaking
          </h2>
          <p className="text-xl text-[#a3a3a3] leading-relaxed font-light mb-10">
            Book a free growth audit — no pitch, no pressure. We'll walk
            through your current follow-up, review, and response process and
            show you exactly what a system like this would fix.
          </p>
          <StarButton
            lightColor="#FBBF24"
            duration={6}
            className="w-auto px-8 h-12 text-base font-semibold"
            onClick={() => window.open('https://cal.com/elhajjai/20min', '_blank')}
          >
            Book Free Consultation
          </StarButton>
        </div>
      </section>
    </div>
  );
}

export default About;
