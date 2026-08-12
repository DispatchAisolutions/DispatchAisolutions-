import { Link, useNavigate, useLocation } from 'react-router-dom';

export function Nav() {
  const navigate = useNavigate();
  const location = useLocation();

  const goHome = () => {
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
  };

  const goToSection = (id: string) => {
    if (location.pathname === '/') {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate(`/#${id}`);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-sm border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <button
          onClick={goHome}
          className="text-xl font-bold tracking-tight hover:opacity-80 transition-opacity cursor-pointer"
        >
          ElHajj Ai
        </button>
        <div className="hidden md:flex items-center gap-8">
          <Link to="/about" className="text-sm text-[#a3a3a3] hover:text-white transition-colors">
            About Us
          </Link>
          <button
            onClick={() => goToSection('services')}
            className="text-sm text-[#a3a3a3] hover:text-white transition-colors cursor-pointer"
          >
            Services
          </button>
          <Link to="/faq" className="text-sm text-[#a3a3a3] hover:text-white transition-colors">
            FAQ
          </Link>
          <button
            onClick={() => goToSection('contact')}
            className="text-sm text-[#a3a3a3] hover:text-white transition-colors cursor-pointer"
          >
            Contact Us
          </button>
        </div>
      </div>
    </nav>
  );
}
