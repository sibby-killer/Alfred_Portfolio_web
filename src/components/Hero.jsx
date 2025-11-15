import React, { useEffect, useRef } from 'react';
import { Github, ArrowDown } from 'lucide-react';
import { heroAnimations, interactiveAnimations, particlesSystem } from '../utils/animations';

const Hero = () => {
  const nameRef = useRef(null);
  const titleRef = useRef(null);
  const particlesRef = useRef(null);

  useEffect(() => {
    // Initialize particles
    if (particlesRef.current) {
      particlesSystem.create(particlesRef.current);
    }

    // Start animations with delays
    setTimeout(() => {
      heroAnimations.heroEntrance();
    }, 500);

    setTimeout(() => {
      if (nameRef.current) {
        heroAnimations.typeWriter(nameRef.current, 'Alfred Nyongesa', 100);
      }
    }, 1000);

    setTimeout(() => {
      if (titleRef.current) {
        heroAnimations.typeWriter(titleRef.current, 'Full-Stack Developer', 80);
      }
    }, 2500);

    setTimeout(() => {
      heroAnimations.ctaButtons();
    }, 4000);

    setTimeout(() => {
      heroAnimations.floatingShapes();
    }, 1500);
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openGithub = () => {
    window.open('https://github.com/alfrednyongesa', '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Particles Background */}
      <div ref={particlesRef} className="particles absolute inset-0"></div>
      
      {/* 3D Floating Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Cube */}
        <div className="floating-shape absolute top-20 left-10 w-16 h-16 bg-gradient-to-br from-accent to-secondary-start opacity-20 transform rotate-12 animate-float"></div>
        
        {/* Sphere */}
        <div className="floating-shape absolute top-40 right-20 w-12 h-12 bg-gradient-to-br from-secondary-end to-accent rounded-full opacity-30 animate-float" style={{ animationDelay: '1s' }}></div>
        
        {/* Triangle */}
        <div className="floating-shape absolute bottom-40 left-20 w-0 h-0 border-l-8 border-r-8 border-b-16 border-l-transparent border-r-transparent border-b-accent opacity-25 animate-float" style={{ animationDelay: '2s' }}></div>
        
        {/* Torus */}
        <div className="floating-shape absolute top-60 right-40 w-20 h-20 border-4 border-secondary-start rounded-full opacity-20 animate-float" style={{ animationDelay: '3s' }}></div>
        
        {/* Dodecahedron simulation */}
        <div className="floating-shape absolute bottom-20 right-10 w-14 h-14 bg-gradient-to-br from-secondary-end to-secondary-start transform rotate-45 opacity-25 animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        {/* Greeting */}
        <div className="hero-text opacity-0 mb-4">
          <p className="text-lg md:text-xl text-gray-300 font-poppins">
            Hi, I'm Alfred! 👋
          </p>
        </div>
        
        <div className="hero-text opacity-0 mb-2">
          <p className="text-lg md:text-xl text-gray-300 font-poppins">
            Welcome to my digital space 🚀
          </p>
        </div>

        {/* Main Heading with Typing Effect */}
        <div className="mb-6">
          <h1 
            ref={nameRef}
            className="text-4xl md:text-6xl lg:text-7xl font-bold font-poppins gradient-text mb-4 min-h-[1.2em]"
          ></h1>
          <h2 
            ref={titleRef}
            className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white min-h-[1.2em]"
          ></h2>
        </div>

        {/* Subheading */}
        <div className="hero-text opacity-0 mb-8">
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            I build fast, functional, and user-focused web apps
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={scrollToContact}
            onMouseEnter={(e) => interactiveAnimations.buttonRipple(e.target, e)}
            className="cta-button btn-primary px-8 py-4 rounded-full text-white font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 cursor-hover relative overflow-hidden"
            style={{ opacity: 0, transform: 'scale(0)' }}
          >
            Hire Me
          </button>
          
          <button
            onClick={openGithub}
            onMouseEnter={(e) => interactiveAnimations.buttonRipple(e.target, e)}
            className="cta-button flex items-center gap-3 glass border border-accent px-8 py-4 rounded-full text-white font-semibold text-lg hover:bg-accent hover:bg-opacity-20 transform hover:scale-105 transition-all duration-300 cursor-hover"
            style={{ opacity: 0, transform: 'scale(0)' }}
          >
            <Github size={20} />
            View GitHub
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-accent w-6 h-6" />
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/50 via-transparent to-primary/50 pointer-events-none"></div>
    </section>
  );
};

export default Hero;