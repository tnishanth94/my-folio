import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard. Built with modern technologies for optimal performance.",
      tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
      image: "/api/placeholder/400/250",
      featured: true,
      links: {
        github: "#",
        live: "#"
      }
    },
    {
      title: "Task Management App",
      description: "Collaborative project management tool with real-time updates, team collaboration features, and intuitive drag-and-drop interface.",
      tech: ["Next.js", "TypeScript", "Supabase", "Tailwind"],
      image: "/api/placeholder/400/250",
      featured: true,
      links: {
        github: "#",
        live: "#"
      }
    },
    {
      title: "AI Content Generator",
      description: "Intelligent content creation platform powered by AI, helping users generate high-quality content for various purposes with customizable templates.",
      tech: ["React", "Python", "OpenAI", "FastAPI"],
      image: "/api/placeholder/400/250",
      featured: false,
      links: {
        github: "#",
        live: "#"
      }
    },
    {
      title: "Portfolio Analytics",
      description: "Comprehensive analytics dashboard for portfolio performance tracking with real-time data visualization and predictive insights.",
      tech: ["Vue.js", "D3.js", "Firebase", "Chart.js"],
      image: "/api/placeholder/400/250",
      featured: false,
      links: {
        github: "#",
        live: "#"
      }
    },
    {
      title: "Social Media Dashboard",
      description: "Unified social media management platform with scheduling, analytics, and multi-platform posting capabilities for content creators.",
      tech: ["React", "Node.js", "MongoDB", "Socket.io"],
      image: "/api/placeholder/400/250",
      featured: false,
      links: {
        github: "#",
        live: "#"
      }
    },
    {
      title: "Weather Forecast App",
      description: "Beautiful weather application with location-based forecasts, interactive maps, and personalized weather alerts and recommendations.",
      tech: ["React Native", "Express", "Redis", "Weather API"],
      image: "/api/placeholder/400/250",
      featured: false,
      links: {
        github: "#",
        live: "#"
      }
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className="py-20 bg-background-secondary relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-glow/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Featured</span>{' '}
            <span className="bg-gradient-text bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary-glow mx-auto mb-8"></div>
          <p className="text-foreground-secondary text-lg max-w-2xl mx-auto">
            Showcasing some of my best work that demonstrates technical expertise and creative problem-solving
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <div 
              key={project.title}
              className={`group bg-card rounded-xl border border-card-border overflow-hidden hover:border-primary transition-all duration-500 hover:shadow-hover hover:shadow-primary/10 ${
                isVisible 
                  ? 'animate-slide-up' 
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden bg-muted h-64">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary-glow/20"></div>
                <div className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-foreground-secondary">
                  Project Preview
                </div>
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-background/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <Button variant="default" size="sm" className="shadow-glow">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button variant="outline" size="sm">
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-foreground-secondary mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-muted text-foreground-secondary text-sm rounded-full border border-card-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Links */}
                <div className="flex items-center space-x-4">
                  <Button variant="link" className="p-0 h-auto">
                    <Github className="h-4 w-4 mr-2" />
                    Source Code
                  </Button>
                  <Button variant="link" className="p-0 h-auto">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects Grid */}
        <div className={`transition-all duration-1000 delay-500 ${
          isVisible ? 'animate-fade-in' : 'opacity-0'
        }`}>
          <h3 className="text-2xl font-bold text-center mb-8 text-foreground">
            Other Notable Projects
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {otherProjects.map((project, index) => (
              <div 
                key={project.title}
                className="group bg-card p-6 rounded-xl border border-card-border hover:border-primary transition-all duration-300 hover:shadow-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h4 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h4>
                <p className="text-foreground-secondary text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.tech.slice(0, 3).map((tech) => (
                    <span 
                      key={tech}
                      className="px-2 py-1 bg-muted text-foreground-secondary text-xs rounded"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-2 py-1 text-foreground-secondary text-xs">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>

                {/* Links */}
                <div className="flex items-center space-x-4 text-sm">
                  <Button variant="link" className="p-0 h-auto text-xs">
                    <Github className="h-3 w-3 mr-1" />
                    Code
                  </Button>
                  <Button variant="link" className="p-0 h-auto text-xs">
                    <ExternalLink className="h-3 w-3 mr-1" />
                    Demo
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className={`text-center transition-all duration-1000 delay-700 ${
          isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-10'
        }`}>
          <p className="text-foreground-secondary mb-6">
            Want to see more of my work or discuss a project?
          </p>
          <Button 
            variant="hero" 
            size="lg"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Let's Work Together
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
