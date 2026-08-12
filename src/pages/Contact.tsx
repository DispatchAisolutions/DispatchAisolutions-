import { useState } from 'react';
import { Mail, MapPin, Search, PhoneCall, ClipboardCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Nav } from '@/components/Nav';

const steps = [
  {
    icon: <Search className="h-5 w-5" />,
    title: 'We review your business',
    description:
      'How you currently follow up, collect reviews, and reply to messages.',
  },
  {
    icon: <PhoneCall className="h-5 w-5" />,
    title: 'We hop on your consultation call',
    description: '15–20 minutes, a real look at your numbers.',
  },
  {
    icon: <ClipboardCheck className="h-5 w-5" />,
    title: "We show you what's fixable",
    description:
      "And if it's a fit, what building your system would actually look like.",
  },
];

function encode(data: Record<string, string>) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
}

function Contact() {
  const [form, setForm] = useState({
    name: '',
    business: '',
    phone: '',
    email: '',
    'what-you-do': '',
    challenge: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'contact', ...form }),
      });
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#f5f5f5] dark">
      <Nav />

      {/* HERO */}
      <section className="pt-40 pb-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Let's Find Out Where You're Losing Revenue
          </h1>
          <p className="text-xl text-[#a3a3a3] leading-relaxed font-light">
            Book your free consultation — no pitch, no pressure. Just a
            straight look at what a system like this would fix for your
            business.
          </p>
        </div>
      </section>

      {/* FORM */}
      <section className="py-16 px-6 border-t border-white/5">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Tell Us About Your Business
          </h2>

          {status === 'success' ? (
            <div className="rounded-2xl border-[0.75px] border-white/10 bg-white/[0.02] p-8 text-center">
              <p className="text-lg text-[#f5f5f5] font-medium">
                Thanks — we've got your details. We'll be in touch shortly to
                confirm your consultation.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              name="contact"
              data-netlify="true"
              netlify-honeypot="bot-field"
              className="space-y-4"
            >
              <input type="hidden" name="form-name" value="contact" />
              <div className="hidden">
                <label>
                  Don't fill this out: <input name="bot-field" />
                </label>
              </div>

              <input
                type="text"
                required
                placeholder="Name"
                value={form.name}
                onChange={(e) => handleChange('name', e.target.value)}
                className="w-full rounded-xl border-[0.75px] border-white/10 bg-white/[0.02] px-4 py-3 text-[#f5f5f5] placeholder:text-[#666] focus:outline-none focus:border-white/30 transition-colors"
              />
              <input
                type="text"
                required
                placeholder="Business name"
                value={form.business}
                onChange={(e) => handleChange('business', e.target.value)}
                className="w-full rounded-xl border-[0.75px] border-white/10 bg-white/[0.02] px-4 py-3 text-[#f5f5f5] placeholder:text-[#666] focus:outline-none focus:border-white/30 transition-colors"
              />
              <input
                type="tel"
                required
                placeholder="Phone / WhatsApp number"
                value={form.phone}
                onChange={(e) => handleChange('phone', e.target.value)}
                className="w-full rounded-xl border-[0.75px] border-white/10 bg-white/[0.02] px-4 py-3 text-[#f5f5f5] placeholder:text-[#666] focus:outline-none focus:border-white/30 transition-colors"
              />
              <input
                type="email"
                required
                placeholder="Email"
                value={form.email}
                onChange={(e) => handleChange('email', e.target.value)}
                className="w-full rounded-xl border-[0.75px] border-white/10 bg-white/[0.02] px-4 py-3 text-[#f5f5f5] placeholder:text-[#666] focus:outline-none focus:border-white/30 transition-colors"
              />
              <input
                type="text"
                required
                placeholder="What does your business do?"
                value={form['what-you-do']}
                onChange={(e) => handleChange('what-you-do', e.target.value)}
                className="w-full rounded-xl border-[0.75px] border-white/10 bg-white/[0.02] px-4 py-3 text-[#f5f5f5] placeholder:text-[#666] focus:outline-none focus:border-white/30 transition-colors"
              />
              <input
                type="text"
                required
                placeholder="What's your biggest challenge right now?"
                value={form.challenge}
                onChange={(e) => handleChange('challenge', e.target.value)}
                className="w-full rounded-xl border-[0.75px] border-white/10 bg-white/[0.02] px-4 py-3 text-[#f5f5f5] placeholder:text-[#666] focus:outline-none focus:border-white/30 transition-colors"
              />

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full mt-4 h-12 rounded-full bg-[#f5f5f5] text-[#0a0a0a] font-semibold hover:opacity-90 transition-opacity disabled:opacity-50 cursor-pointer"
              >
                {status === 'submitting' ? 'Sending...' : 'Book Your Free Consultation'}
              </button>

              {status === 'error' && (
                <p className="text-sm text-red-400 text-center">
                  Something went wrong — please try again or email us directly.
                </p>
              )}
            </form>
          )}
        </div>
      </section>

      {/* DIRECT CONTACT */}
      <section className="py-16 px-6 border-t border-white/5">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Prefer to Reach Out Directly?</h2>
          <div className="flex flex-col items-center gap-4">
            <a
              href="mailto:contact@elhajjai.com"
              className="flex items-center gap-3 text-[#a3a3a3] hover:text-white transition-colors"
            >
              <Mail className="h-5 w-5" />
              <span className="text-base md:text-lg">contact@elhajjai.com</span>
            </a>
            <div className="flex items-center gap-3 text-[#a3a3a3]">
              <MapPin className="h-5 w-5" />
              <span className="text-base md:text-lg">Based in: Beirut, Lebanon</span>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT HAPPENS NEXT */}
      <section className="py-24 px-6 border-t border-white/5">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
            What Happens After You Book Your Consultation
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-fit mx-auto rounded-lg border-[0.75px] border-white/10 bg-white/5 p-3 mb-4">
                  {step.icon}
                </div>
                <div className="text-xs tracking-widest text-[#a3a3a3] font-semibold mb-2">
                  STEP {index + 1}
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-sm md:text-base text-[#a3a3a3] leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING LINE */}
      <section className="py-16 px-6 border-t border-white/5">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-lg text-[#a3a3a3]">
            Still have questions first?{' '}
            <Link to="/faq" className="text-[#f5f5f5] font-medium underline underline-offset-4 hover:text-[#FBBF24] transition-colors">
              Check the FAQ
            </Link>{' '}
            before booking — most of what people ask is already answered
            there.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Contact;
