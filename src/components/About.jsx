import React, { useEffect } from 'react';
import { GraduationCap, Award, Code, Lightbulb } from 'lucide-react';
import { sectionAnimations } from '../utils/animations';

const About = () => {
  useEffect(() => {
    // Initialize section animations when component mounts
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              sectionAnimations.fadeInUp('.about-content', 0);
              sectionAnimations.staggerCards('.education-card', 500);
              sectionAnimations.staggerCards('.tools-icon', 800);
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.2 }
      );
      observer.observe(aboutSection);
    }
  }, []);

  const educationItems = [
    {
      icon: <GraduationCap className="w-8 h-8 text-accent" />,
      title: "Diploma in Information Technology",
      institution: "Masinde Muliro University of Science and Technology",
      description: "Strong foundation in computer science and software development"
    },
    {
      icon: <Award className="w-8 h-8 text-secondary-end" />,
      title: "AI & ML Specialization",
      institution: "PLP July Cohort (Certified)",
      description: "Advanced training in artificial intelligence and machine learning"
    }
  ];

  const tools = [
    { name: "VS Code", icon: "💻" },
    { name: "GitHub", icon: "🐙" },
    { name: "Postman", icon: "📮" },
    { name: "AWS", icon: "☁️" },
    { name: "Figma", icon: "🎨" }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-primary to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 about-content opacity-0">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">About Me</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get to know me better
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Main About Content */}
          <div className="about-content opacity-0">
            <div className="glass-dark rounded-2xl p-8 card-3d">
              <div className="flex items-center mb-6">
                <Code className="w-8 h-8 text-accent mr-4" />
                <h3 className="text-2xl font-semibold">My Journey</h3>
              </div>
              
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  I'm a passionate full-stack developer experienced in JavaScript, Python, Django, React, Node.js, and MySQL. I love turning ideas into real-world applications that solve meaningful problems and create exceptional user experiences.
                </p>
                
                <p>
                  When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or mentoring aspiring developers. I believe in writing clean, maintainable code and following best practices.
                </p>
              </div>

              <div className="mt-8 flex items-center">
                <Lightbulb className="w-6 h-6 text-yellow-400 mr-3" />
                <span className="text-accent font-semibold">Always learning, always growing!</span>
              </div>
            </div>
          </div>

          {/* Education & Tools */}
          <div className="space-y-8">
            {/* Education Section */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 flex items-center">
                <GraduationCap className="w-6 h-6 text-accent mr-3" />
                Education & Certifications
              </h3>
              
              <div className="space-y-4">
                {educationItems.map((item, index) => (
                  <div 
                    key={index}
                    className="education-card opacity-0 glass-dark rounded-xl p-6 card-3d transform transition-all duration-300 hover:scale-105"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 p-2 bg-primary rounded-lg">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg text-white mb-1">
                          {item.title}
                        </h4>
                        <p className="text-accent mb-2">{item.institution}</p>
                        <p className="text-gray-400 text-sm">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools Section */}
            <div>
              <h3 className="text-2xl font-semibold mb-6">
                Tools I Use Daily
              </h3>
              
              <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
                {tools.map((tool, index) => (
                  <div 
                    key={index}
                    className="tools-icon opacity-0 glass text-center p-4 rounded-xl card-3d transform transition-all duration-300 hover:scale-110 cursor-hover"
                  >
                    <div className="text-3xl mb-2">{tool.icon}</div>
                    <p className="text-sm text-gray-300 font-medium">{tool.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;