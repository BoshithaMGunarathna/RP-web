import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Beaker } from 'lucide-react';
import NavLinks from './NavLinks';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Check if we're on the home page
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    // Close mobile menu when route changes
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Determine text colors based on page and scroll state
  const getTextColors = () => {
    if (isHomePage && !scrolled) {
      // On home page before scrolling - use white text
      return {
        logo: 'text-white hover:text-gray-200',
        logoIcon: 'text-white',
        menuButton: 'text-white hover:text-gray-200'
      };
    } else {
      // On other pages or after scrolling - use dark text
      return {
        logo: 'text-primary-800 hover:text-primary-600',
        logoIcon: 'text-primary-700',
        menuButton: 'text-gray-700 hover:text-primary-700'
      };
    }
  };

  const textColors = getTextColors();

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-sm shadow-md py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <NavLink 
            to="/" 
            className={`flex items-center space-x-2 transition-colors ${textColors.logo}`}
          >
            <Beaker size={24} className={textColors.logoIcon} />
            <span className="font-serif font-bold text-xl">AIPT</span>
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLinks isDarkBackground={isHomePage && !scrolled} />
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden transition-colors focus:outline-none ${textColors.menuButton}`}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="md:hidden bg-white border-t mt-3 shadow-lg">
          <div className="container mx-auto px-4 py-3">
            <div className="flex flex-col space-y-3">
              <NavLinks mobile />
            </div>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;