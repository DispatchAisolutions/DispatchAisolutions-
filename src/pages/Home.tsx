import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Nav } from '@/components/Nav';
import { Hero } from '@/components/ui/animated-hero';
import { Problem } from '@/components/Problem';
import { Services } from '@/components/Services';
import { AdditionalServices } from '@/components/AdditionalServices';
import { Crm } from '@/components/Crm';
import { Testimonial } from '@/components/ui/design-testimonial';
import { LetsWorkTogether } from '@/components/ui/lets-work-section';
import { LiveDemoModal } from '@/components/ui/live-demo-modal';

function Home() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#f5f5f5] dark">
      <Nav />

      <LiveDemoModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
      />

      <section className="pt-20">
        <Hero />
      </section>

      <Problem />

      <Services />

      <AdditionalServices />

      <Crm />

      <div id="how-it-works">
        <Testimonial />
      </div>

      <div id="contact">
        <LetsWorkTogether />
      </div>
    </div>
  );
}

export default Home;
