import { RefreshCw, Star, Zap } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { cn } from "@/lib/utils";

export function Services() {
  return (
    <section id="services" className="py-24 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">The Solution</h2>
          <p className="text-xl text-[#a3a3a3] font-light">
            One connected system, three jobs, all working while you run your business.
          </p>
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <GridItem
            icon={<RefreshCw className="h-4 w-4" />}
            title="Agent 1 — Reactivation"
            description="Brings past customers back and gets them buying again. Agent 1 reaches out to past customers with a personalized message, handles the back-and-forth conversation naturally, and gets them re-engaged — booked, ordered, or scheduled again. No customer falls through the cracks."
          />
          <GridItem
            icon={<Star className="h-4 w-4" />}
            title="Agent 2 — Follow-Up & Reputation"
            description="Turns every purchase into a review and a returning customer. After every purchase or service, Agent 2 checks in, makes sure the customer is satisfied, and asks for a review at exactly the right moment — while the experience is still fresh. More reviews. More trust. More referrals."
          />
          <GridItem
            icon={<Zap className="h-4 w-4" />}
            title="Agent 3 — Instant Reply & Campaigns"
            description="Never lets a message — or an opportunity — go unanswered. Every inbound message gets a fast, professional reply, 24/7. On top of that, Agent 3 sends targeted marketing campaigns to your customer list, turning your database into an active revenue channel."
          />
        </ul>

        <div className="mt-16 text-center">
          <p className="text-xl md:text-2xl font-light text-[#f5f5f5]">
            Three agents. One mission: <span className="font-semibold">more revenue, less manual work.</span>
          </p>
        </div>
      </div>
    </section>
  );
}

interface GridItemProps {
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}

const GridItem = ({ icon, title, description }: GridItemProps) => {
  return (
    <li className={cn("min-h-[16rem] list-none")}>
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
              {icon}
            </div>
            <div className="space-y-3">
              <h3 className="pt-0.5 text-xl leading-[1.375rem] font-semibold font-sans tracking-[-0.04em] md:text-2xl md:leading-[1.875rem] text-balance text-[#f5f5f5]">
                {title}
              </h3>
              <p className="font-sans text-sm leading-[1.125rem] md:text-base md:leading-[1.375rem] text-[#a3a3a3]">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
