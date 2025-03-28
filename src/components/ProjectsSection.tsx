
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { ExternalLink, Github } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Healthplus Flipkart",
      description: "An online pharmacy and digital healthcare platform with web, Android, and iOS apps. Flipkart offers online medicine delivery and other services across PAN India.",
      technologies: ["NodeJS", "PHP-Laravel", "REST API", "MongoDB", "HTML-5", "Bootstrap", "JavaScript"],
      role: "Software Engineer",
      teamSize: 20,
      responsibilities: "Design, Development, Database Design, Testing",
      link: "https://healthplus.flipkart.com"
    },
    {
      title: "FitMania App iOS",
      description: "An innovative fitness platform transforming how individuals connect, create, and thrive. Leveraging cutting-edge technology and fostering a vibrant community.",
      technologies: ["NodeJS", "Firebase Functions", "Firestore", "PHP-Laravel", "REST API", "ExpressJS"],
      role: "Software Engineer",
      teamSize: 4,
      responsibilities: "Design, Development, Database Design, Testing",
      link: "https://www.fitmania.io"
    },
    {
      title: "Art to Frame",
      description: "A dynamic e-commerce web portal and mobile app dedicated to providing affordable, beautiful, and durable frame products. Specializing in custom framing.",
      technologies: ["PHP-Laravel", "REST API", "MySQL", "HTML-5", "Bootstrap", "JavaScript", "CSS-3", "Ajax"],
      role: "Software Engineer",
      teamSize: 10,
      responsibilities: "Database Design, Development, Integration of Third-Party Libraries, Web Services Development",
      link: "https://www.arttoframe.com"
    },
    {
      title: "Gumbo App",
      description: "EventBlend, a unique event-sharing platform crafted to blend a delightful stew of shared memories. Users contribute joyful photos and videos, creating heartwarming shared experiences.",
      technologies: ["PHP-Laravel", "REST API", "MySQL", "HTML-5", "Bootstrap", "JavaScript", "CSS-3", "Ajax"],
      role: "Software Engineer",
      teamSize: 4,
      responsibilities: "Design and Development of Backend and Frontend Systems, Database Design, Testing, Web Services",
      link: "https://itsagumbo.com"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container">
        <h2 className="section-heading numbered-heading">Some Things I've Built</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          {projects.map((project, index) => (
            <Card key={index} className="bg-portfolio-lightestNavy/5 border border-portfolio-lightestNavy/20 hover:border-portfolio-green/30 transition-all duration-300">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-semibold text-portfolio-lightestSlate">{project.title}</h3>
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-portfolio-slate hover:text-portfolio-green"
                    aria-label={`Visit ${project.title} website`}
                  >
                    <ExternalLink className="h-5 w-5" />
                  </a>
                </div>
              </CardHeader>
              <CardContent className="text-portfolio-slate">
                <p className="mb-4">{project.description}</p>
                <div className="mb-3">
                  <span className="font-medium text-portfolio-lightestSlate">Role:</span> {project.role}
                </div>
                <div className="mb-3">
                  <span className="font-medium text-portfolio-lightestSlate">Team Size:</span> {project.teamSize}
                </div>
                <div>
                  <span className="font-medium text-portfolio-lightestSlate">Responsibilities:</span> {project.responsibilities}
                </div>
              </CardContent>
              <CardFooter className="flex flex-wrap gap-2 pt-0">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="text-sm text-portfolio-green font-mono">
                    {tech}
                  </span>
                ))}
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button asChild className="bg-transparent hover:bg-portfolio-green/10 text-portfolio-green font-medium border border-portfolio-green rounded px-6 py-3">
            <a href="https://github.com/pravinpgr9" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <Github className="h-5 w-5" />
              View More Projects
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
