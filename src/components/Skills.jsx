import React, { useEffect, useRef } from 'react';
import { Code, Server, Database, Tool } from 'lucide-react';
import { sectionAnimations, interactiveAnimations } from '../utils/animations';

const Skills = () => {
  const skillsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            sectionAnimations.staggerCards('.skill-card', 0);
            sectionAnimations.skillsIcons();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleCardMouseMove = (e) => {
    const card = e.currentTarget;
    interactiveAnimations.cardTilt(card, e);
  };

  const handleCardMouseLeave = (e) => {
    const card = e.currentTarget;
    interactiveAnimations.cardReset(card);
  };

  const skillCategories = [
    {
      title: "Frontend",
      icon: <Code className="w-8 h-8" />,
      color: "from-accent to-cyan-400",
      skills: [
        "HTML5",
        "CSS3", 
        "JavaScript (ES6+)",
        "React.js",
        "Responsive Design",
        "Animations (Anime.js)"
      ]
    },
    {
      title: "Backend",
      icon: <Server className="w-8 h-8" />,
      color: "from-secondary-start to-purple-400",
      skills: [
        "Node.js",
        "Python",
        "Django",
        "REST APIs",
        "Express.js"
      ]
    },
    {
      title: "Databases",
      icon: <Database className="w-8 h-8" />,
      color: "from-secondary-end to-pink-400",
      skills: [
        "MySQL",
        "MongoDB",
        "PostgreSQL",
        "Firebase"
      ]
    },
    {
      title: "Tools & Others",
      icon: <Tool className="w-8 h-8" />,
      color: "from-green-400 to-blue-400",
      skills: [
        "Git & GitHub",
        "VS Code",
        "Figma",
        "Postman",
        "AWS",
        "Vercel Deployment",
        "AI/ML Integration"
      ]
    }
  ];

  return (
    <section id="skills" ref={skillsRef} className="py-20 bg-gradient-to-b from-slate-900 to-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Skills & Technologies</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Technologies I work with
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="skill-card opacity-0 glass-dark rounded-2xl p-6 card-3d transform transition-all duration-300 cursor-hover"
              onMouseMove={handleCardMouseMove}
              onMouseLeave={handleCardMouseLeave}
              style={{ 
                transformStyle: 'preserve-3d',
                willChange: 'transform'
              }}
            >
              {/* Card Header */}
              <div className="text-center mb-6">
                <div className={`skill-icon inline-flex p-4 rounded-xl bg-gradient-to-br ${category.color} text-white mb-4 shadow-lg`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-white">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex}
                    className="flex items-center space-x-3 group"
                  >
                    <div className="w-2 h-2 bg-accent rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                    <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>

              {/* Animated Border */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-accent via-secondary-start to-secondary-end opacity-0 hover:opacity-100 transition-opacity duration-300" 
                   style={{ 
                     background: `linear-gradient(45deg, transparent, transparent), linear-gradient(45deg, #06B6D4, #8B5CF6, #EC4899)`,
                     backgroundClip: 'padding-box, border-box',
                     backgroundOrigin: 'padding-box, border-box'
                   }}>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Section */}
        <div className="mt-16 text-center">
          <div className="glass-dark rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 gradient-text">
              Currently Learning & Exploring
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                "TypeScript", "Next.js", "GraphQL", "Docker", 
                "Kubernetes", "Microservices", "AI/ML", "Cloud Computing"
              ].map((skill, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 glass rounded-full text-sm font-medium text-gray-300 hover:text-white hover:scale-110 transform transition-all duration-300 cursor-hover"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;