import { UserX, MessageSquareX, Clock } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { cn } from "@/lib/utils";

export function Problem() {
  return (
    <section className="py-24 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Where Your Revenue Is Quietly Leaking Out
          </h2>
          <p className="text-xl text-[#a3a3a3] font-light max-w-2xl mx-auto">
            You already have the customers. The problem is what happens — or
            doesn't happen — after they buy from you the first time.
          </p>
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <PainItem
            icon={<UserX className="h-4 w-4" />}
            title="Customers Disappear"
            description="They buy once, they're happy, and then... nothing. No follow-up, no reminder, no reason to come back. They quietly become someone else's customer."
          />
          <PainItem
            icon={<MessageSquareX className="h-4 w-4" />}
            title="Reviews Never Get Asked For"
            description="Happy customers rarely leave reviews on their own. Without a system to ask at the right moment, your best marketing asset — social proof — goes to waste."
          />
          <PainItem
            icon={<Clock className="h-4 w-4" />}
            title="Messages Go Unanswered"
            description="A new lead messages you at 11pm. By the time you reply the next morning, they've already gone with a competitor who answered in 2 minutes."
          />
        </ul>

        <div className="mt-16 text-center">
          <p className="text-xl md:text-2xl font-light text-[#f5f5f5] max-w-3xl mx-auto">
            None of this is a people problem. It's a systems problem.{" "}
            <span className="font-semibold">That's what we fix.</span>
          </p>
        </div>
      </div>
    </section>
  );
}

interface PainItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const PainItem = ({ icon, title, description }: PainItemProps) => {
  return (
    <li className={cn("min-h-[14rem] list-none")}>
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
