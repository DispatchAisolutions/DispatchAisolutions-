import { CheckCircle2 } from "lucide-react";

const points = [
  "Clear before/after comparison — engagement, reviews, revenue",
  "Full visibility into what's working and what isn't",
  "A small amount of manual input still happens — this isn't a black box, you stay in control of your own data",
  "We use the same data to monitor and fine-tune your system on an ongoing basis",
];

export function Crm() {
  return (
    <section className="py-24 px-6 border-t border-white/5">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Proof, Not Just Promises</h2>
          <p className="text-xl text-[#a3a3a3] leading-relaxed font-light">
            Every customer detail your agents need lives in one CRM — that's
            what powers them. But the real value is what it does for you: it
            tracks your numbers before and after the agents go live, so you
            see the actual impact in black and white, not just a feeling that
            "things are better."
          </p>
        </div>

        <ul className="space-y-4 max-w-2xl mx-auto">
          {points.map((point, index) => (
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
  );
}
