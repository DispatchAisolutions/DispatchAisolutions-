import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1";
import { motion } from "framer-motion";

const testimonials = [
  {
    title: "Missed calls",
    text: "During peak hours, businesses miss calls and lose leads. We deploy an AI voice agent to answer, qualify, and route calls instantly—resulting in faster lead capture.",
    role: "Front Desk — Salon & Spa",
  },
  {
    title: "Slow lead follow-up",
    text: "When follow-ups take days, leads go cold. AI follows up by SMS/email, answers questions, and books appointments—driving more replies and bookings.",
    role: "Sales Team — Home Services",
  },
  {
    title: "Support overload",
    text: "When support tickets pile up, customers wait too long. AI resolves common requests and escalates complex cases—creating a cleaner inbox and happier customers.",
    role: "Customer Support — E-commerce",
  },
  {
    title: "No-shows / scheduling chaos",
    text: "Back-and-forth scheduling and no-shows waste time. AI books appointments and sends confirmations and reminders—leading to fewer no-shows and a smoother calendar.",
    role: "Scheduling Desk — Healthcare",
  },
  {
    title: "After-hours inquiries",
    text: "After-hours messages often go unanswered and business is lost. AI responds 24/7 and captures details for next-day follow-up—so leads are captured even at night.",
    role: "Service Desk — HVAC",
  },
  {
    title: "FAQ overload",
    text: "Many calls are basic questions (hours, pricing range, availability) that block urgent issues. AI voice handles FAQs, qualifies callers, and routes only the right calls to staff—so the team focuses on what truly needs a human.",
    role: "Front Desk — Dental Clinic",
  },
  {
    title: "Rescheduling interruptions",
    text: "Rescheduling and cancellations interrupt the front desk all day. AI voice handles changes, checks availability, updates the calendar, and sends confirmation—reducing interruptions and keeping schedules smooth.",
    role: "Reception — Barber / Salon",
  },
  {
    title: "Order status calls",
    text: "Routine status calls pull staff from important work. AI answers status questions, confirms delivery windows, and escalates exceptions—reducing interruptions and smoothing operations.",
    role: "Operations — Local Delivery",
  },
  {
    title: "Renewal follow-up",
    text: "Renewals slip when follow-up isn't consistent. AI runs renewal reminders, handles objections, and routes save-worthy cases to a human—improving renewals without manual chasing.",
    role: "Membership Team — Fitness Studio",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const Testimonials = () => {
  return (
    <section className="bg-background my-20 relative">
      <div className="container z-10 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto"
        >
          <div className="flex justify-center">
            <div className="border py-1 px-4 rounded-lg"></div>
          </div>

          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tighter mt-5">
            Proven use cases
          </h2>
          <p className="text-center mt-5 opacity-75">
            Workflows automated with AI voice & chat across multiple industries.
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={21} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={26} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={24} />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
