import React, { useState, useEffect, useRef } from 'react';
import { Send, MessageCircle, Mail, Linkedin, Github, MapPin } from 'lucide-react';
import { sectionAnimations, interactiveAnimations } from '../utils/animations';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const contactRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            sectionAnimations.fadeInUp('.contact-form', 0);
            sectionAnimations.staggerCards('.contact-card', 300);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all fields');
      setIsSubmitting(false);
      return;
    }

    // Create WhatsApp message
    const message = `Hi Alfred! I'm ${formData.name}. ${formData.message}`;
    const whatsappURL = `https://wa.me/254762667048?text=${encodeURIComponent(message)}`;
    
    // Open WhatsApp
    window.open(whatsappURL, '_blank', 'noopener,noreferrer');
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  const contactOptions = [
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "WhatsApp",
      subtitle: "+254 762 667 048",
      description: "Quick chat and instant responses",
      action: () => window.open('https://wa.me/254762667048', '_blank'),
      gradient: "from-green-400 to-green-600"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      subtitle: "alfred.dev8@gmail.com",
      description: "For detailed project discussions",
      action: () => window.open('mailto:alfred.dev8@gmail.com', '_blank'),
      gradient: "from-blue-400 to-blue-600"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      title: "LinkedIn",
      subtitle: "Professional Network",
      description: "Let's connect professionally",
      action: () => window.open('#', '_blank'),
      gradient: "from-cyan-400 to-blue-500"
    },
    {
      icon: <Github className="w-6 h-6" />,
      title: "GitHub",
      subtitle: "Code Repository",
      description: "Check out my latest work",
      action: () => window.open('https://github.com/alfrednyongesa', '_blank'),
      gradient: "from-gray-400 to-gray-600"
    }
  ];

  const handleCardClick = (e, action) => {
    interactiveAnimations.buttonRipple(e.currentTarget, e);
    setTimeout(action, 200);
  };

  return (
    <section id="contact" ref={contactRef} className="py-20 bg-gradient-to-b from-slate-900 to-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Let's work together on your next project
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="contact-form opacity-0">
            <div className="glass-dark rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <Send className="w-6 h-6 text-accent mr-3" />
                <h3 className="text-2xl font-semibold">Send Message</h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Input */}
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-transparent border-2 border-gray-600 rounded-lg focus:border-accent focus:outline-none transition-all duration-300 text-white placeholder-gray-400"
                    placeholder="Your Full Name"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-accent to-secondary-start opacity-0 hover:opacity-10 rounded-lg transition-opacity duration-300 pointer-events-none"></div>
                </div>

                {/* Email Input */}
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-transparent border-2 border-gray-600 rounded-lg focus:border-accent focus:outline-none transition-all duration-300 text-white placeholder-gray-400"
                    placeholder="your.email@example.com"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-accent to-secondary-start opacity-0 hover:opacity-10 rounded-lg transition-opacity duration-300 pointer-events-none"></div>
                </div>

                {/* Message Textarea */}
                <div className="relative">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 bg-transparent border-2 border-gray-600 rounded-lg focus:border-accent focus:outline-none transition-all duration-300 text-white placeholder-gray-400 resize-none"
                    placeholder="Tell me about your project or just say hello!"
                  ></textarea>
                  <div className="absolute inset-0 bg-gradient-to-r from-accent to-secondary-start opacity-0 hover:opacity-10 rounded-lg transition-opacity duration-300 pointer-events-none"></div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  onClick={(e) => !isSubmitting && interactiveAnimations.buttonRipple(e.target, e)}
                  className="w-full btn-primary py-4 rounded-lg font-semibold text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed cursor-hover relative overflow-hidden"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center">
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </span>
                  )}
                </button>
              </form>

              {/* Form Note */}
              <div className="mt-6 p-4 glass rounded-lg">
                <p className="text-sm text-gray-400 text-center">
                  📱 This form will open WhatsApp with your message pre-filled for instant communication
                </p>
              </div>
            </div>
          </div>

          {/* Contact Cards */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-6">
              Direct Contact Options
            </h3>
            
            {contactOptions.map((option, index) => (
              <div
                key={index}
                onClick={(e) => handleCardClick(e, option.action)}
                className="contact-card opacity-0 glass-dark rounded-xl p-6 cursor-hover transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <div className="flex items-start space-x-4">
                  <div className={`flex-shrink-0 p-3 bg-gradient-to-br ${option.gradient} rounded-lg text-white`}>
                    {option.icon}
                  </div>
                  <div className="flex-grow">
                    <h4 className="font-semibold text-lg text-white mb-1">
                      {option.title}
                    </h4>
                    <p className="text-accent mb-2 font-medium">
                      {option.subtitle}
                    </p>
                    <p className="text-gray-400 text-sm">
                      {option.description}
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                  </div>
                </div>
              </div>
            ))}

            {/* Location Card */}
            <div className="contact-card opacity-0 glass-dark rounded-xl p-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 p-3 bg-gradient-to-br from-purple-400 to-pink-600 rounded-lg text-white">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-white mb-1">
                    Location
                  </h4>
                  <p className="text-accent mb-2 font-medium">
                    Kenya
                  </p>
                  <p className="text-gray-400 text-sm">
                    Available for remote work worldwide
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="glass-dark rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 gradient-text">
              Ready to Start Your Project?
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Whether you have a fully fleshed out idea or just a spark of inspiration, 
              I'd love to hear about it and help bring your vision to life.
            </p>
            <button
              onClick={(e) => {
                interactiveAnimations.buttonRipple(e.target, e);
                setTimeout(() => {
                  window.open('https://wa.me/254762667048?text=Hi%20Alfred!%20I%20have%20a%20project%20idea%20I%27d%20like%20to%20discuss.', '_blank');
                }, 200);
              }}
              className="btn-secondary px-8 py-4 rounded-full font-semibold text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 cursor-hover relative overflow-hidden"
            >
              Let's Discuss Your Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;