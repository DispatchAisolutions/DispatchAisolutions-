import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { StarButton } from "@/components/ui/star-button";
import { LiveDemoModal } from "@/components/ui/live-demo-modal";

function Hero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const titles = useMemo(
    () => ["24/7", "Faster", "Cost-efficient", "Reliable"],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <div className="w-full">
      <div className="container mx-auto">
        <div className="flex gap-8 py-20 lg:py-40 items-center justify-center flex-col">
          <div className="flex gap-4 flex-col">
            <h1 className="text-5xl md:text-7xl max-w-2xl tracking-tighter text-center font-regular">
              <span className="text-spektr-cyan-50">AI employees that are</span>
              <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1">
                &nbsp;
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-semibold"
                    initial={{ opacity: 0, y: "-100" }}
                    transition={{ type: "spring", stiffness: 50 }}
                    animate={
                      titleNumber === index
                        ? {
                            y: 0,
                            opacity: 1,
                          }
                        : {
                            y: titleNumber > index ? -150 : 150,
                            opacity: 0,
                          }
                    }
                  >
                    {title}
                  </motion.span>
                ))}
              </span>
            </h1>

            <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center">
              We build and deploy AI systems that answer calls, follow up with
              leads, support customers, and book appointments — automatically.
              Tailored for companies that don’t want to fall behind as AI becomes 
              the standard for speed and service.

            </p>
          </div>
          <div className="flex flex-row gap-3">
            <Button
              size="lg"
              className="gap-4 rounded-full"
              variant="outline"
              onClick={() => window.open("https://cal.com/elhajj-ai-sundhf/15min", "_blank")}
            >
              Book a call <PhoneCall className="w-4 h-4" />
            </Button>
            <StarButton
              lightColor="#FBBF24"
              duration={6}
              className="w-48 h-11 text-base font-semibold"
              onClick={() => setIsModalOpen(true)}
            >
              Try live demo
            </StarButton>
          </div>
        </div>
      </div>
      <LiveDemoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

export { Hero };
