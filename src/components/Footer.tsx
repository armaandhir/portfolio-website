import { Github, Linkedin, Mail } from "lucide-react";
import { personalInfo } from "@/data/personal_info";

const Footer = () => {
  return (
    <footer className="border-t border-border/40 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-2">{personalInfo.firstName} {personalInfo.lastName}</h3>
            <p className="text-muted-foreground">{personalInfo.title}</p>
          </div>
          
          <div className="flex items-center space-x-6">
            <a 
              href={personalInfo.githubUrl}
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href={personalInfo.linkedinUrl}
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href={`mailto:${personalInfo.primaryEmail}`}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border/40 text-center text-muted-foreground">
          <p>&copy; 2024 {personalInfo.firstName} {personalInfo.lastName}. Built with React, TypeScript, and Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;