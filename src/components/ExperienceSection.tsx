
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ExperienceSection = () => {
  const [activeTab, setActiveTab] = useState("praella");

  const experiences = [
    {
      id: "praella",
      company: "Praella Pvt Ltd",
      title: "Senior Full Stack Developer / Backend Lead",
      date: "Feb 2024 - Jan 2025",
      location: "Surat, Gujarat, INDIA",
      description: [
        "Mentored junior developers, fostering their growth in backend technologies and Shopify-specific development practices.",
        "Developed private Shopify apps to extend platform capabilities, enabling unique client-specific features like custom product configurations, advanced discount logic, and inventory management.",
        "Developed web applications using Shopify for clients.",
        "Expertise in backend development, system architecture, and implementing innovative solutions to meet client needs.",
        "Architected and implemented robust backend solutions using the NestJS framework, focusing on scalability and performance.",
        "Created migration tools to streamline data transfer between systems, ensuring seamless transitions for clients adopting Shopify.",
        "Designed secure APIs and middleware for integration with external systems."
      ],
      reasonToLeave: "1 Year contract is over"
    },
    {
      id: "mobilefirst",
      company: "MobileFirst Applications Pvt Ltd",
      title: "Senior Web Developer / Team Lead",
      date: "April 2021 - Jan 2024",
      location: "Ahmedabad, Gujarat, INDIA",
      description: [
        "Involved in designing and development of various applications, adhering to industry standards to deliver high-quality, cost-effective, and rapidly developed frameworks.",
        "Managed a team and multiple projects with various clients.",
        "Planned, tracked, and managed agile and software development projects using Jira.",
        "Customized workflows, fostered collaboration, and ensured the successful release of high-quality software."
      ],
      reasonToLeave: "Personal"
    },
    {
      id: "solace",
      company: "Solace Infotech / Technologies Pvt. Ltd",
      title: "Senior Web Developer",
      date: "Dec 2017 - Dec 2020",
      location: "Nashik, INDIA",
      description: [
        "Involved in designing and development of various applications, adhering to industry standards to provide a high quality, low cost, and quick development framework.",
        "Designed/reviewed use case specification documents for various modules.",
        "Developed functions/classes for various modules and documented the deployment process.",
        "Developed various web applications for US-based clients."
      ],
      reasonToLeave: "Personal"
    },
    {
      id: "mugenesys",
      company: "Mugenesys Software Pvt. Ltd",
      title: "Junior Software Engineer",
      date: "Aug 2016 - Nov 2017",
      location: "Mumbai, INDIA",
      description: [
        "Participated in the full life cycle of new website development projects.",
        "Implemented and maintained best practice procedures across all areas of work.",
        "Cooperated and communicated with team members for efficient project management.",
        "Wrote, developed, and managed website content.",
        "Managed the smooth implementation and testing of applications.",
        "Delivered and implemented projects according to scheduled milestones."
      ],
      reasonToLeave: "Personal"
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container">
        <h2 className="section-heading numbered-heading">Where I've Worked</h2>
        
        <div className="mt-10">
          <Tabs defaultValue="praella" onValueChange={setActiveTab} className="max-w-4xl">
            <div className="overflow-x-auto pb-2">
              <TabsList className="flex w-full border-b border-portfolio-lightestNavy/20 bg-transparent h-auto p-0">
                {experiences.map((exp) => (
                  <TabsTrigger 
                    key={exp.id}
                    value={exp.id}
                    className={cn(
                      "flex-1 md:flex-none px-5 py-3 border-b-2 border-transparent data-[state=active]:border-portfolio-green text-portfolio-slate data-[state=active]:text-portfolio-green bg-transparent hover:bg-portfolio-lightestNavy/10 rounded-none"
                    )}
                  >
                    {exp.company.split(' ')[0]}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
            
            {experiences.map((exp) => (
              <TabsContent key={exp.id} value={exp.id} className="pt-6 focus-visible:outline-none focus-visible:ring-0">
                <div className="space-y-4">
                  <h3 className="text-xl font-medium text-portfolio-lightestSlate">
                    {exp.title} <span className="text-portfolio-green">@ {exp.company}</span>
                  </h3>
                  <p className="text-portfolio-slate">{exp.date} | {exp.location}</p>
                  {exp.reasonToLeave && (
                    <p className="text-portfolio-slate italic">Reason to leave - {exp.reasonToLeave}</p>
                  )}
                  <ul className="space-y-2 mt-4">
                    {exp.description.map((item, index) => (
                      <li key={index} className="flex items-start text-portfolio-slate">
                        <span className="text-portfolio-green mr-2 mt-1.5">▹</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
