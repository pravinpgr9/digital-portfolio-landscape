
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="min-h-screen pt-20 flex flex-col justify-center">
      <div className="container">
        <div className="max-w-3xl">
          <div className="space-y-5 animate-fade-in">
            <h1 className="text-portfolio-green font-mono mb-4">Hi, my name is</h1>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-portfolio-navy">
              Pravin Madhukar Pagare.
            </h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-portfolio-slate">
              I build things for the web.
            </h3>
            <p className="text-portfolio-slate text-lg max-w-xl py-4">
              I'm a Full Stack Developer and Team Lead with expertise in Node.js and PHP.
              Currently, I'm focused on building accessible, responsive, and
              user-centered web applications that solve real-world problems.
            </p>
            <div className="pt-6">
              <Button asChild className="group text-portfolio-navy hover:text-portfolio-navy bg-portfolio-green hover:bg-portfolio-green/90 rounded px-7 py-6 text-lg">
                <a href="#projects" className="flex items-center gap-2">
                  Check out my work
                  <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
