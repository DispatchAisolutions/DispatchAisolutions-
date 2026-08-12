import { useState } from 'react';
import { ChevronDown, ArrowUpRight } from 'lucide-react';
import { Nav } from '@/components/Nav';
import { StarButton } from '@/components/ui/star-button';
import { cn } from '@/lib/utils';

const faqs = [
  {
    q: 'Is my customer data safe?',
    a: "Yes. Your customer data stays in your own CRM, connected only to your system. We don't share, sell, or use your data for anything outside of running your agents.",
  },
  {
    q: 'What if the AI says something wrong to a customer?',
    a: 'The agents are trained on your real services and information, not left to guess. For anything sensitive, complicated, or outside their scope, the conversation hands off to a real person instead of the AI improvising an answer.',
  },
  {
    q: 'How long does it take to get set up?',
    a: 'Most businesses are live within 3 weeks of the initial audit. Setup starts with a short discovery call, then we build and test everything before it ever reaches a real customer.',
  },
  {
    q: 'I already have a CRM. Do I need to switch?',
    a: "Not necessarily — we can often connect to what you're already using. If your current setup can't support the agents properly, we'll tell you honestly rather than force a switch you don't need.",
  },
  {
    q: 'Will this replace my staff?',
    a: 'No — it removes the repetitive, easy-to-forget tasks (follow-ups, review requests, first replies) so your team can focus on the parts that actually need a human.',
  },
  {
    q: 'What if a customer wants to speak to a real person?',
    a: "Every agent can hand off to a human at any point. The AI is there to make sure nothing gets missed, not to block people from reaching your team.",
  },
  {
    q: "How do I know if it's actually working?",
    a: "Your CRM tracks before-and-after numbers — engagement, reviews, response times, revenue — so you're seeing real data, not just taking our word for it.",
  },
  {
    q: 'Does this work for my type of business?',
    a: "If your business has repeat customers, relies on reviews, or gets inbound messages, the 3-agent system applies. If you're not sure, book a free growth audit and we'll tell you honestly whether it's a fit.",
  },
  {
    q: 'What happens after launch — do you just disappear?',
    a: "No. We monitor performance and fine-tune the agents on an ongoing basis using the same data your CRM tracks — this isn't a one-time build we hand off and walk away from.",
  },
];

function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#f5f5f5] dark">
      <Nav />

      {/* HERO */}
      <section className="pt-40 pb-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Questions You're Probably Asking Yourself Right Now
          </h1>
          <p className="text-xl text-[#a3a3a3] leading-relaxed font-light">
            No pitch here — just straight answers.
          </p>
        </div>
      </section>

      {/* FAQ LIST */}
      <section className="pb-24 px-6 border-t border-white/5 pt-16">
        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-xl border-[0.75px] border-white/10 bg-white/[0.02] overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between gap-4 text-left px-6 py-5 cursor-pointer"
                >
                  <span className="text-base md:text-lg font-semibold text-[#f5f5f5]">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={cn(
                      'h-5 w-5 text-[#a3a3a3] flex-shrink-0 transition-transform duration-300',
                      isOpen && 'rotate-180'
                    )}
                  />
                </button>
                <div
                  className={cn(
                    'grid transition-all duration-300 ease-in-out',
                    isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-sm md:text-base text-[#a3a3a3] leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CLOSING CTA */}
      <section id="contact" className="py-32 px-6 border-t border-white/5">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Still Have Questions?</h2>
          <p className="text-xl text-[#a3a3a3] leading-relaxed font-light mb-10">
            Book a free 20 min growth audit and ask us directly — no
            pressure, no sales script.
          </p>
          <StarButton
            lightColor="#FBBF24"
            duration={6}
            className="w-auto px-8 h-12 text-base font-semibold"
            onClick={() => window.open('https://cal.com/elhajj-ai-sundhf/15min', '_blank')}
          >
            Book a Free Growth Audit <ArrowUpRight className="w-4 h-4 ml-2 inline" />
          </StarButton>
        </div>
      </section>
    </div>
  );
}

export default Faq;
