import React, { useEffect, useRef } from 'react';
import { ExternalLink, Github, Brain, Shield, Smartphone } from 'lucide-react';
import { sectionAnimations, interactiveAnimations } from '../utils/animations';

const Projects = () => {
  const projectsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            sectionAnimations.staggerCards('.project-card', 0);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
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

  const handleButtonClick = (e, url) => {
    interactiveAnimations.buttonRipple(e.target, e);
    setTimeout(() => {
      window.open(url, '_blank', 'noopener,noreferrer');
    }, 200);
  };

  const projects = [
    {
      id: 1,
      title: "CropGuard AI",
      description: "A full-stack AI/ML-powered application for crop disease detection and agricultural insights. Built with modern web technologies and machine learning models.",
      image: "/api/placeholder/600/400",
      techStack: ["React", "Node.js", "Python", "TensorFlow", "MongoDB"],
      features: [
        "AI-powered crop disease detection",
        "Real-time analysis dashboard", 
        "Responsive design",
        "RESTful API integration"
      ],
      liveDemo: "https://cropguard-ai-web.vercel.app",
      github: "#",
      icon: <Brain className="w-6 h-6" />,
      gradient: "from-green-400 to-blue-500",
      featured: true
    },
    {
      id: 2,
      title: "SecureAuth Dashboard",
      description: "Modern authentication system with advanced security features, user management, and real-time monitoring capabilities.",
      image: "/api/placeholder/600/400",
      techStack: ["React", "Express.js", "JWT", "MongoDB", "Tailwind CSS"],
      features: [
        "Multi-factor authentication",
        "User role management",
        "Activity monitoring",
        "Secure API endpoints"
      ],
      liveDemo: "#",
      github: "#",
      icon: <Shield className="w-6 h-6" />,
      gradient: "from-purple-400 to-pink-400",
      featured: false
    },
    {
      id: 3,
      title: "MobileFirst E-Commerce",
      description: "Responsive e-commerce platform optimized for mobile devices with seamless shopping experience and payment integration.",
      image: "/api/placeholder/600/400",
      techStack: ["React", "Redux", "Stripe API", "Firebase", "PWA"],
      features: [
        "Mobile-first design",
        "Payment integration",
        "Offline capabilities",
        "Push notifications"
      ],
      liveDemo: "#",
      github: "#",
      icon: <Smartphone className="w-6 h-6" />,
      gradient: "from-cyan-400 to-indigo-400",
      featured: false
    }
  ];

  return (
    <section id="projects" ref={projectsRef} className="py-20 bg-gradient-to-b from-primary to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">My Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Building solutions that matter
          </p>
        </div>

        {/* Featured Project */}
        <div className="mb-16">
          {projects.filter(project => project.featured).map((project) => (
            <div 
              key={project.id}
              className="project-card opacity-0 glass-dark rounded-3xl overflow-hidden card-3d shadow-2xl"
              onMouseMove={handleCardMouseMove}
              onMouseLeave={handleCardMouseLeave}
            >
              <div className="lg:flex">
                {/* Project Image */}
                <div className="lg:w-1/2 relative overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20`}></div>
                  <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                    <div className="text-center">
                      <div className={`inline-flex p-6 rounded-full bg-gradient-to-br ${project.gradient} text-white mb-4`}>
                        {project.icon}
                      </div>
                      <p className="text-gray-400">Project Screenshot</p>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="lg:w-1/2 p-8 lg:p-12">
                  <div className="flex items-center mb-4">
                    <div className={`p-2 rounded-lg bg-gradient-to-br ${project.gradient} text-white mr-4`}>
                      {project.icon}
                    </div>
                    <span className="px-3 py-1 bg-accent bg-opacity-20 text-accent text-sm rounded-full font-medium">
                      Featured Project
                    </span>
                  </div>

                  <h3 className="text-3xl font-bold text-white mb-4">
                    {project.title}
                  </h3>

                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-gray-300">
                          <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Tech Stack:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, index) => (
                        <span 
                          key={index}
                          className="px-3 py-1 glass text-sm rounded-full text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button
                      onClick={(e) => handleButtonClick(e, project.liveDemo)}
                      className="flex items-center justify-center gap-2 btn-primary px-6 py-3 rounded-full font-semibold text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 cursor-hover relative overflow-hidden"
                    >
                      <ExternalLink size={18} />
                      Live Demo
                    </button>
                    
                    <button
                      onClick={(e) => handleButtonClick(e, project.github)}
                      className="flex items-center justify-center gap-2 glass border border-accent px-6 py-3 rounded-full font-semibold text-white hover:bg-accent hover:bg-opacity-20 transform hover:scale-105 transition-all duration-300 cursor-hover"
                    >
                      <Github size={18} />
                      View Code
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.filter(project => !project.featured).map((project) => (
            <div 
              key={project.id}
              className="project-card opacity-0 glass-dark rounded-2xl overflow-hidden card-3d shadow-xl"
              onMouseMove={handleCardMouseMove}
              onMouseLeave={handleCardMouseLeave}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 z-10`}></div>
                <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                  <div className="text-center z-20 relative">
                    <div className={`inline-flex p-4 rounded-full bg-gradient-to-br ${project.gradient} text-white mb-2`}>
                      {project.icon}
                    </div>
                    <p className="text-gray-400 text-sm">Project Screenshot</p>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.slice(0, 3).map((tech, index) => (
                      <span 
                        key={index}
                        className="px-2 py-1 glass text-xs rounded-full text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 3 && (
                      <span className="px-2 py-1 glass text-xs rounded-full text-gray-400">
                        +{project.techStack.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button
                    onClick={(e) => handleButtonClick(e, project.liveDemo)}
                    className="flex-1 btn-primary px-4 py-2 rounded-full font-medium text-sm text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 cursor-hover relative overflow-hidden"
                  >
                    Live Demo
                  </button>
                  
                  <button
                    onClick={(e) => handleButtonClick(e, project.github)}
                    className="px-4 py-2 glass border border-accent rounded-full font-medium text-sm text-white hover:bg-accent hover:bg-opacity-20 transform hover:scale-105 transition-all duration-300 cursor-hover"
                  >
                    <Github size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More Projects CTA */}
        <div className="text-center mt-12">
          <button
            onClick={(e) => handleButtonClick(e, 'https://github.com/alfrednyongesa')}
            className="glass border border-accent px-8 py-4 rounded-full font-semibold text-white hover:bg-accent hover:bg-opacity-20 transform hover:scale-105 transition-all duration-300 cursor-hover"
          >
            View More Projects on GitHub
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;