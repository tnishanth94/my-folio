import { useEffect, useRef, useState } from 'react';
import { Code, Coffee, Lightbulb, Rocket } from 'lucide-react';

const About = () => {
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

  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code is my passion."
    },
    {
      icon: Lightbulb,
      title: "Problem Solving",
      description: "I love tackling complex challenges and finding innovative solutions."
    },
    {
      icon: Rocket,
      title: "Performance",
      description: "Optimizing applications for speed and seamless user experience."
    },
    {
      icon: Coffee,
      title: "Collaboration",
      description: "Working effectively with teams to deliver exceptional results."
    }
  ];

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-20 bg-background-secondary relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary-glow to-primary opacity-50"></div>
      
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">About</span>{' '}
            <span className="bg-gradient-text bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary-glow mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Story */}
          <div className={`transition-all duration-1000 delay-300 ${
            isVisible ? 'animate-slide-in-left' : 'opacity-0 translate-x-10'
          }`}>
            <h3 className="text-2xl font-bold mb-6 text-foreground">
              Crafting Digital Experiences
            </h3>
            <div className="space-y-4 text-foreground-secondary leading-relaxed">
              <p>
                With over 5 years of experience in full-stack development, I specialize in creating 
                robust, scalable applications that deliver exceptional user experiences. My journey 
                began with a curiosity for how things work, which evolved into a passion for building 
                digital solutions.
              </p>
              <p>
                I thrive on the entire development lifecycle - from conceptualizing ideas to deploying 
                production-ready applications. My expertise spans modern frontend frameworks, backend 
                architectures, and cloud technologies.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
                projects, or sharing knowledge with the developer community.
              </p>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className={`grid grid-cols-1 sm:grid-cols-2 gap-6 transition-all duration-1000 delay-500 ${
            isVisible ? 'animate-slide-in-right' : 'opacity-0 translate-x-10'
          }`}>
            {highlights.map((item, index) => (
              <div 
                key={item.title}
                className="bg-card p-6 rounded-lg border border-card-border hover:border-primary transition-all duration-300 hover:shadow-card hover:bg-card-hover group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary-glow rounded-lg flex items-center justify-center mb-4 group-hover:shadow-glow transition-all duration-300">
                  <item.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h4 className="text-lg font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                  {item.title}
                </h4>
                <p className="text-foreground-secondary text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-card-border transition-all duration-1000 delay-700 ${
          isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-10'
        }`}>
          {[
            { number: "50+", label: "Projects Completed" },
            { number: "5+", label: "Years Experience" },
            { number: "20+", label: "Happy Clients" },
            { number: "99%", label: "Code Quality" }
          ].map((stat, index) => (
            <div key={stat.label} className="text-center group">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-text bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.number}
              </div>
              <div className="text-foreground-secondary font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;