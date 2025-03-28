
import { Link } from 'react-router-dom';

const AboutSection = () => {
  const skills = [
    'JavaScript (ES6+)',
    'TypeScript',
    'React.js',
    'Node.js',
    'PHP',
    'Laravel',
    'AWS Services',
    'MongoDB',
    'MySQL',
    'RESTful APIs',
    'Express.js',
    'Firebase',
  ];

  return (
    <section id="about" className="py-20">
      <div className="container">
        <h2 className="section-heading numbered-heading">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="md:col-span-2 space-y-4 text-portfolio-slate">
            <p>
              Hello! I'm Pravin, a full-stack developer and team lead with over 8 years of 
              experience building web applications. My journey in web development started back in 2016
              when I joined Mugenesys Software as a Junior Software Engineer.
            </p>
            <p>
              Fast-forward to today, and I've had the privilege of working at a 
              <Link to="#" className="text-portfolio-green"> startup</Link>,
              <Link to="#" className="text-portfolio-green"> established company</Link>, and
              <Link to="#" className="text-portfolio-green"> corporation</Link>. 
              My main focus these days is building accessible, responsive, and user-centered web applications
              that solve real-world problems.
            </p>
            <p>
              I've led teams and projects, mentored junior developers, and developed various 
              applications for clients across diverse industries. I specialize in backend development, 
              system architecture, and implementing innovative solutions to meet client needs.
            </p>
            <p>
              I also have experience with AWS server management, including EC2 instances, 
              RDS management, and implementing security best practices.
            </p>
            
            <p className="pt-2">Here are a few technologies I've been working with recently:</p>
            
            <ul className="grid grid-cols-2 gap-2 mt-4">
              {skills.map((skill, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-portfolio-green mr-2">▹</span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="order-first md:order-last mx-auto">
            <div className="relative group">
              <div className="absolute -inset-1 bg-portfolio-green/30 rounded-md blur opacity-50 group-hover:opacity-75 transition duration-300"></div>
              <div className="relative max-w-[250px] h-[250px] md:h-auto rounded-md overflow-hidden border-2 border-portfolio-green">
                <img 
                  src="/lovable-uploads/867279b0-eec4-4808-bcc0-991cd406c8bb.png" 
                  alt="Pravin Madhukar Pagare" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
