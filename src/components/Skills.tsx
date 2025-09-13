import { useEffect, useRef, useState } from 'react';

const Skills = () => {
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

  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Next.js", level: 88 },
        { name: "Tailwind CSS", level: 92 },
        { name: "Vue.js", level: 75 }
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Python", level: 85 },
        { name: "PostgreSQL", level: 88 },
        { name: "MongoDB", level: 82 },
        { name: "GraphQL", level: 78 }
      ]
    },
    {
      title: "DevOps & Tools",
      skills: [
        { name: "Docker", level: 85 },
        { name: "AWS", level: 80 },
        { name: "Git", level: 95 },
        { name: "CI/CD", level: 82 },
        { name: "Linux", level: 85 }
      ]
    }
  ];

  return (
    <section 
      id="skills" 
      ref={sectionRef}
      className="py-20 bg-background relative overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-glow opacity-20"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Technical</span>{' '}
            <span className="bg-gradient-text bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary-glow mx-auto mb-8"></div>
          <p className="text-foreground-secondary text-lg max-w-2xl mx-auto">
            Continuously expanding my toolkit with modern technologies and best practices
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={category.title}
              className={`bg-card p-8 rounded-xl border border-card-border hover:border-primary transition-all duration-500 hover:shadow-card group ${
                isVisible 
                  ? 'animate-slide-up' 
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
            >
              <h3 className="text-2xl font-bold mb-8 text-center group-hover:text-primary transition-colors">
                {category.title}
              </h3>

              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-foreground">{skill.name}</span>
                      <span className="text-sm text-foreground-secondary">{skill.level}%</span>
                    </div>
                    
                    <div className="relative h-2 bg-muted rounded-full overflow-hidden">
                      <div 
                        className={`absolute left-0 top-0 h-full bg-gradient-to-r from-primary to-secondary-glow rounded-full transition-all duration-1000 ease-out ${
                          isVisible ? '' : 'w-0'
                        }`}
                        style={{ 
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${(categoryIndex * 0.2) + (skillIndex * 0.1)}s`
                        }}
                      ></div>
                      
                      {/* Glow effect */}
                      <div 
                        className={`absolute left-0 top-0 h-full bg-gradient-to-r from-primary-glow to-secondary-glow rounded-full opacity-50 blur-sm transition-all duration-1000 ease-out ${
                          isVisible ? '' : 'w-0'
                        }`}
                        style={{ 
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${(categoryIndex * 0.2) + (skillIndex * 0.1)}s`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Technologies */}
        <div className={`mt-16 pt-16 border-t border-card-border transition-all duration-1000 delay-700 ${
          isVisible ? 'animate-fade-in' : 'opacity-0'
        }`}>
          <h3 className="text-2xl font-bold text-center mb-8 text-foreground">
            Technologies I Work With
          </h3>
          
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'React', 'TypeScript', 'Node.js', 'Python', 'PostgreSQL', 'MongoDB', 
              'Docker', 'AWS', 'Tailwind CSS', 'Next.js', 'GraphQL', 'Redis',
              'Jest', 'Cypress', 'Webpack', 'Vite'
            ].map((tech, index) => (
              <span 
                key={tech}
                className="px-4 py-2 bg-card border border-card-border rounded-full text-sm font-medium text-foreground-secondary hover:text-primary hover:border-primary transition-all duration-300 hover:shadow-glow cursor-default"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;