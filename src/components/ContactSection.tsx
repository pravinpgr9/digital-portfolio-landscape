
import { Button } from '@/components/ui/button';
import { Mail, Phone, Linkedin, Github, MapPin } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container">
        <h2 className="section-heading numbered-heading">Get In Touch</h2>
        
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-portfolio-slate text-lg mb-8">
            I'm currently open to new opportunities and would love to hear from you. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div className="flex items-center justify-center md:justify-end gap-3 text-portfolio-slate">
              <Mail className="h-5 w-5 text-portfolio-green" />
              <a 
                href="mailto:pravinpgr9@gmail.com" 
                className="hover:text-portfolio-green transition-colors"
              >
                pravinpgr9@gmail.com
              </a>
            </div>
            
            <div className="flex items-center justify-center md:justify-start gap-3 text-portfolio-slate">
              <Phone className="h-5 w-5 text-portfolio-green" />
              <a 
                href="tel:+919503671828" 
                className="hover:text-portfolio-green transition-colors"
              >
                +91 9503671828
              </a>
            </div>
            
            <div className="flex items-center justify-center md:justify-end gap-3 text-portfolio-slate">
              <Linkedin className="h-5 w-5 text-portfolio-green" />
              <a 
                href="https://www.linkedin.com/in/pravin-pagare/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-portfolio-green transition-colors"
              >
                LinkedIn
              </a>
            </div>
            
            <div className="flex items-center justify-center md:justify-start gap-3 text-portfolio-slate">
              <Github className="h-5 w-5 text-portfolio-green" />
              <a 
                href="https://github.com/pravinpgr9" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-portfolio-green transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>
          
          <div className="flex items-center justify-center gap-3 text-portfolio-slate mb-10">
            <MapPin className="h-5 w-5 text-portfolio-green" />
            <span>Padmaja Heights, Shivneri Colony, Kamathvada, Nashik – 422008, INDIA</span>
          </div>
          
          <Button asChild className="bg-portfolio-green hover:bg-portfolio-green/90 text-portfolio-navy font-medium rounded-md px-8 py-6 text-lg">
            <a 
              href="mailto:pravinpgr9@gmail.com"
              className="inline-block"
            >
              Say Hello
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
