import { useState } from 'react';
import { Hero } from '@/components/ui/animated-hero';
import Testimonials from '@/components/Testimonials';
import { Services } from '@/components/Services';
import { Testimonial } from '@/components/ui/design-testimonial';
import { LetsWorkTogether } from '@/components/ui/lets-work-section';
import { LiveDemoModal } from '@/components/ui/live-demo-modal';

function App() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#f5f5f5] dark">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-sm border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <button
            onClick={scrollToTop}
            className="text-xl font-bold tracking-tight hover:opacity-80 transition-opacity cursor-pointer"
          >
            Dispatch AI
          </button>
        </div>
      </nav>

      <LiveDemoModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
      />

      <section className="pt-20">
        <Hero />
      </section>

      <Testimonials />

      <section className="py-24 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">AI isn’t a trend — it’s the new way of working.</h2>
          <p className="text-xl text-[#a3a3a3] leading-relaxed font-light">
             Companies that don’t automate repetitive interactions move slower and fall behind competitors. Start now and set your business up for long-term success.
          </p>
        </div>
      </section>

      <Services />

      <div id="how-it-works">
        <Testimonial />
      </div>

      <LetsWorkTogether />
    </div>
  );
}

export default App;
