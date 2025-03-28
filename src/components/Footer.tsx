
import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-6 border-t border-portfolio-lightestNavy/20">
      <div className="container">
        <div className="flex flex-col items-center justify-center">
          <p className="text-portfolio-slate text-sm flex items-center">
            <span>Built with</span>
            <Heart className="h-4 w-4 mx-1 text-portfolio-green" />
            <span>by Pravin Pagare © {currentYear}</span>
          </p>
          <p className="text-portfolio-slate text-xs mt-2">
            Full Stack Developer / Team Lead
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
