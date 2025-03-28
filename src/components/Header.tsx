
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { AlignJustify, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isMobile = useIsMobile();

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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  const navLinks = [
    { name: 'About', path: '#about' },
    { name: 'Experience', path: '#experience' },
    { name: 'Projects', path: '#projects' },
    { name: 'Contact', path: '#contact' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300',
        scrolled ? 'bg-white/90 backdrop-blur-sm shadow-sm py-3' : 'bg-transparent py-5'
      )}
    >
      <div className="container flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="text-portfolio-navy font-bold text-2xl">
            Pravin<span className="text-portfolio-green">.</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        {!isMobile && (
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.path}
                className="text-portfolio-navy hover:text-portfolio-green font-medium nav-link-hover transition-colors"
              >
                <span className="text-portfolio-green font-mono">0{index + 1}.</span> {link.name}
              </a>
            ))}
            <Button asChild className="bg-transparent hover:bg-portfolio-green/10 text-portfolio-green font-medium border border-portfolio-green rounded px-4 py-2">
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                Resume
              </a>
            </Button>
          </nav>
        )}

        {/* Mobile menu button */}
        {isMobile && (
          <button 
            onClick={toggleMenu}
            className="md:hidden text-portfolio-navy p-2"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <AlignJustify size={24} />}
          </button>
        )}

        {/* Mobile menu */}
        {isMobile && (
          <div 
            className={cn(
              'fixed top-0 right-0 h-screen bg-portfolio-lightNavy w-3/4 transition-transform duration-300 z-50 flex flex-col justify-center items-center',
              isMenuOpen ? 'translate-x-0' : 'translate-x-full'
            )}
          >
            <button 
              onClick={toggleMenu}
              className="absolute top-5 right-5 text-portfolio-lightestSlate"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
            <nav className="flex flex-col gap-6 items-center">
              {navLinks.map((link, index) => (
                <a
                  key={link.name}
                  href={link.path}
                  className="text-portfolio-lightestSlate hover:text-portfolio-green text-lg font-medium transition-colors"
                  onClick={toggleMenu}
                >
                  <span className="text-portfolio-green font-mono block text-center mb-1">0{index + 1}.</span>
                  {link.name}
                </a>
              ))}
              <Button asChild className="mt-4 bg-transparent hover:bg-portfolio-green/10 text-portfolio-green font-medium border border-portfolio-green rounded px-5 py-2.5">
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                  Resume
                </a>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
