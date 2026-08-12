import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export function Nav() {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const goHome = () => {
    setMenuOpen(false);
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
  };

  const links = [
    { to: '/about', label: 'About Us' },
    { to: '/services', label: 'Services' },
    { to: '/faq', label: 'FAQ' },
    { to: '/contact', label: 'Contact Us' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-sm border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <button
          onClick={goHome}
          className="text-2xl md:text-3xl font-bold tracking-tight hover:opacity-80 transition-opacity cursor-pointer"
        >
          ElHajj Ai
        </button>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-sm text-[#a3a3a3] hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-[#f5f5f5] p-1 cursor-pointer"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[#0a0a0a] border-t border-white/5 px-6 py-4 flex flex-col gap-4">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMenuOpen(false)}
              className="text-base text-[#a3a3a3] hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
