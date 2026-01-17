import { Phone, MessageSquare, Calendar, Users } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { cn } from "@/lib/utils";

export function Services() {
  return (
    <section className="py-24 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">What We Build</h2>
          <p className="text-xl text-[#a3a3a3] font-light">Purpose-built AI systems for your business.</p>
        </div>
        <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
          <GridItem
            area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
            icon={<Phone className="h-4 w-4" />}
            title="Voice AI (Inbound & Outbound)"
            description="A 24/7 AI receptionist + AI caller that answers calls, qualifies callers, books appointments, calls leads back, and runs outbound campaigns."
            outcome="Every call becomes booked, routed, or captured—never missed."
          />
          <GridItem
            area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
            icon={<Users className="h-4 w-4" />}
            title="AI Customer Support"
            description="Not a basic chatbot—this is Tier-1 support automation that resolves common questions, escalates edge cases to your team, and improves from past tickets."
            outcome="Fewer tickets, faster replies, and lower support workload."
          />
          <GridItem
            area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
            icon={<MessageSquare className="h-4 w-4" />}
            title="AI Lead Nurture & Follow-Up"
            description="An AI sales assistant that tags leads by intent, personalizes follow-ups, and reaches out via email, SMS, or calls—automatically reactivating cold leads."
            outcome="Every lead followed up on time—without human effort."
          />
          <GridItem
            area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
            icon={<Calendar className="h-4 w-4" />}
            title="AI Scheduling (Text & Voice)"
            description="A frictionless booking engine that handles reschedules, sends confirmations and reminders, and reduces no-shows—through voice or text."
            outcome="From inquiry to booked appointment automatically."
          />
        </ul>
      </div>
    </section>
  );
}

interface GridItemProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
  outcome?: string;
}

const GridItem = ({ area, icon, title, description, outcome }: GridItemProps) => {
  return (
    <li className={cn("min-h-[14rem] list-none", area)}>
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
              {outcome && (
                <p className="font-sans text-sm leading-[1.125rem] md:text-base md:leading-[1.375rem] text-white font-medium">
                  Outcome: {outcome}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
