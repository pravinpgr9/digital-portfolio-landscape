
import { Briefcase, GraduationCap, Award } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

const EducationSection = () => {
  const education = [
    {
      degree: "MCA - Computer Science",
      institution: "MES Abasaheb Garware College",
      location: "PUNE",
      icon: GraduationCap
    },
    {
      degree: "BSc - Computer Science",
      institution: "Arts, Science & Commerce College",
      location: "NASHIK",
      icon: GraduationCap
    },
    {
      degree: "HSC",
      institution: "Janata Vidyalaya & Jr College",
      location: "NASHIK",
      icon: GraduationCap
    },
    {
      degree: "SSC",
      institution: "MPHS School",
      location: "NASHIK",
      icon: GraduationCap
    }
  ];
  
  const certifications = [
    {
      name: "React JS Tutorial Course - Great Learning",
      link: "https://olympus1.mygreatlearning.com/course_certiﬁcate/PEERDYDE"
    },
    {
      name: "Front End Development - HTML Course - Great Learning",
      link: "https://olympus1.mygreatlearning.com/course_certiﬁcate/NTYMSECQ"
    },
    {
      name: "HackerRank Skills Veriﬁcation Test",
      link: "https://www.hackerrank.com/certiﬁcates/67a8c7cd2f90"
    }
  ];
  
  const strengths = [
    "Good oral, written & presentation skills",
    "Quick learner with good grasping capability",
    "Action-oriented and result-focused",
    "Lead & work as a team in an organized way",
    "Admire time management skills"
  ];

  const responsibilities = [
    "Developing the code as per the requirements",
    "Client coordination and requirements of projects",
    "Interface with clients and gather business requirements and objectives",
    "Design, develop and implement new integration",
    "Project deployment and configuration using Apache and Nginx servers on AWS",
    "Proficient in setting up RDS (Relational Database Service) on AWS",
    "Whole product testing prior to deployment of product",
    "Provide innovative solutions to complex business problems"
  ];

  return (
    <section id="education" className="py-20 bg-portfolio-lightestNavy/5">
      <div className="container">
        <h2 className="section-heading numbered-heading">Education & Skills</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-10">
          {/* Education Column */}
          <div>
            <h3 className="text-xl font-semibold text-portfolio-lightestSlate flex items-center mb-6">
              <GraduationCap className="mr-2 h-5 w-5 text-portfolio-green" />
              Education
            </h3>
            <div className="space-y-4">
              {education.map((edu, index) => (
                <Card key={index} className="bg-white border border-portfolio-lightestNavy/20">
                  <CardContent className="p-4">
                    <h4 className="font-medium text-portfolio-navy">{edu.degree}</h4>
                    <p className="text-portfolio-slate">{edu.institution}, {edu.location}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          {/* Certifications Column */}
          <div>
            <h3 className="text-xl font-semibold text-portfolio-lightestSlate flex items-center mb-6">
              <Award className="mr-2 h-5 w-5 text-portfolio-green" />
              Certifications
            </h3>
            <Card className="h-full bg-white border border-portfolio-lightestNavy/20">
              <CardContent className="p-4 space-y-4">
                <ul className="space-y-3">
                  {certifications.map((cert, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-portfolio-green mr-2">▹</span>
                      <a 
                        href={cert.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-portfolio-slate hover:text-portfolio-green"
                      >
                        {cert.name}
                      </a>
                    </li>
                  ))}
                </ul>
                
                <h4 className="font-medium text-portfolio-navy pt-4">Strengths</h4>
                <ul className="space-y-2">
                  {strengths.map((strength, index) => (
                    <li key={index} className="flex items-start text-portfolio-slate">
                      <span className="text-portfolio-green mr-2">▹</span>
                      {strength}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
          
          {/* Responsibilities Column */}
          <div>
            <h3 className="text-xl font-semibold text-portfolio-lightestSlate flex items-center mb-6">
              <Briefcase className="mr-2 h-5 w-5 text-portfolio-green" />
              Key Responsibilities
            </h3>
            <Card className="h-full bg-white border border-portfolio-lightestNavy/20">
              <CardContent className="p-4">
                <ul className="space-y-2">
                  {responsibilities.map((resp, index) => (
                    <li key={index} className="flex items-start text-portfolio-slate">
                      <span className="text-portfolio-green mr-2">▹</span>
                      {resp}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
