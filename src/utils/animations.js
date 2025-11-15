import anime from 'animejs';

// Hero section animations
export const heroAnimations = {
  // Typing effect animation
  typeWriter: (element, text, speed = 100) => {
    let i = 0;
    element.innerHTML = '';
    
    const timer = setInterval(() => {
      if (i < text.length) {
        element.innerHTML += text.charAt(i);
        i++;
      } else {
        clearInterval(timer);
        // Add blinking cursor
        element.classList.add('typing');
      }
    }, speed);
  },

  // Hero text entrance
  heroEntrance: () => {
    anime({
      targets: '.hero-text',
      translateY: [50, 0],
      opacity: [0, 1],
      duration: 1000,
      delay: anime.stagger(200),
      easing: 'easeOutExpo'
    });
  },

  // Floating geometric shapes
  floatingShapes: () => {
    anime({
      targets: '.floating-shape',
      rotateX: '1turn',
      rotateY: '1turn',
      duration: 20000,
      loop: true,
      easing: 'linear'
    });

    anime({
      targets: '.floating-shape',
      translateY: [-20, 20],
      duration: 4000,
      direction: 'alternate',
      loop: true,
      easing: 'easeInOutSine',
      delay: anime.stagger(500)
    });
  },

  // CTA button animations
  ctaButtons: () => {
    anime({
      targets: '.cta-button',
      scale: [0, 1],
      opacity: [0, 1],
      duration: 800,
      delay: anime.stagger(200),
      easing: 'easeOutBack'
    });
  }
};

// Section reveal animations
export const sectionAnimations = {
  // Fade in from bottom
  fadeInUp: (target, delay = 0) => {
    anime({
      targets: target,
      translateY: [50, 0],
      opacity: [0, 1],
      duration: 1000,
      delay: delay,
      easing: 'easeOutExpo'
    });
  },

  // Stagger animation for cards
  staggerCards: (target, delay = 0) => {
    anime({
      targets: target,
      translateY: [100, 0],
      opacity: [0, 1],
      scale: [0.8, 1],
      duration: 800,
      delay: anime.stagger(200, { start: delay }),
      easing: 'easeOutBack'
    });
  },

  // Skills icons rotation
  skillsIcons: () => {
    anime({
      targets: '.skill-icon',
      rotate: '1turn',
      duration: 2000,
      loop: true,
      direction: 'alternate',
      easing: 'easeInOutSine',
      delay: anime.stagger(100)
    });
  }
};

// Interactive animations
export const interactiveAnimations = {
  // Card 3D tilt effect
  cardTilt: (element, event) => {
    const rect = element.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;
    
    anime({
      targets: element,
      rotateX: rotateX,
      rotateY: rotateY,
      scale: 1.05,
      duration: 200,
      easing: 'easeOutQuad'
    });
  },

  // Reset card position
  cardReset: (element) => {
    anime({
      targets: element,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      duration: 200,
      easing: 'easeOutQuad'
    });
  },

  // Button ripple effect
  buttonRipple: (element, event) => {
    const rect = element.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    const ripple = document.createElement('div');
    ripple.style.cssText = `
      position: absolute;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.3);
      transform: scale(0);
      left: ${x}px;
      top: ${y}px;
      width: ${size}px;
      height: ${size}px;
      pointer-events: none;
    `;
    
    element.appendChild(ripple);
    
    anime({
      targets: ripple,
      scale: 1,
      opacity: [1, 0],
      duration: 600,
      easing: 'easeOutExpo',
      complete: () => ripple.remove()
    });
  }
};

// Scroll-triggered animations
export const scrollAnimations = {
  // Initialize scroll observer
  initScrollObserver: () => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target;
            
            // Trigger different animations based on class
            if (target.classList.contains('animate-on-scroll')) {
              sectionAnimations.fadeInUp(target);
            } else if (target.classList.contains('stagger-on-scroll')) {
              sectionAnimations.staggerCards(target.children);
            }
            
            observer.unobserve(target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );

    // Observe all animation targets
    document.querySelectorAll('.animate-on-scroll, .stagger-on-scroll').forEach((el) => {
      observer.observe(el);
    });
  }
};

// Particles system
export const particlesSystem = {
  create: (container) => {
    const particlesCount = 50;
    
    for (let i = 0; i < particlesCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'absolute w-1 h-1 bg-accent rounded-full opacity-30';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.top = Math.random() * 100 + '%';
      container.appendChild(particle);
      
      // Animate particles
      anime({
        targets: particle,
        translateY: [0, -100],
        opacity: [0.3, 0],
        duration: anime.random(3000, 6000),
        loop: true,
        delay: anime.random(0, 3000),
        easing: 'linear'
      });
    }
  }
};

// Custom cursor animations
export const cursorAnimations = {
  init: () => {
    const cursor = document.createElement('div');
    cursor.className = 'cursor';
    document.body.appendChild(cursor);
    
    const trails = [];
    for (let i = 0; i < 5; i++) {
      const trail = document.createElement('div');
      trail.className = 'cursor-trail';
      document.body.appendChild(trail);
      trails.push(trail);
    }
    
    let mouseX = 0, mouseY = 0;
    
    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      cursor.style.left = mouseX - 10 + 'px';
      cursor.style.top = mouseY - 10 + 'px';
      
      // Animate trails with delay
      trails.forEach((trail, index) => {
        setTimeout(() => {
          trail.style.left = mouseX - 4 + 'px';
          trail.style.top = mouseY - 4 + 'px';
        }, index * 50);
      });
    });
    
    // Scale cursor on hover
    document.addEventListener('mouseenter', (e) => {
      if (e.target.matches('button, a, .cursor-hover')) {
        anime({
          targets: cursor,
          scale: 1.5,
          duration: 200
        });
      }
    });
    
    document.addEventListener('mouseleave', (e) => {
      if (e.target.matches('button, a, .cursor-hover')) {
        anime({
          targets: cursor,
          scale: 1,
          duration: 200
        });
      }
    });
  }
};