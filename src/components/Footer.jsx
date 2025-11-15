import React from 'react';
import { Github, Linkedin, MessageCircle, Mail, Heart, Code } from 'lucide-react';
import { interactiveAnimations } from '../utils/animations';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      url: 'https://github.com/alfrednyongesa',
      name: 'GitHub',
      color: 'hover:text-gray-400'
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      url: '#',
      name: 'LinkedIn',
      color: 'hover:text-blue-400'
    },
    {
      icon: <MessageCircle className="w-5 h-5" />,
      url: 'https://wa.me/254762667048',
      name: 'WhatsApp',
      color: 'hover:text-green-400'
    },
    {
      icon: <Mail className="w-5 h-5" />,
      url: 'mailto:alfred.dev8@gmail.com',
      name: 'Email',
      color: 'hover:text-accent'
    }
  ];

  const handleSocialClick = (e, url) => {
    interactiveAnimations.buttonRipple(e.currentTarget, e);
    setTimeout(() => {
      window.open(url, '_blank', 'noopener,noreferrer');
    }, 200);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gradient-to-t from-black via-primary to-primary py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <div 
              onClick={scrollToTop}
              className="text-3xl font-bold gradient-text mb-4 cursor-hover inline-block"
            >
              Alfred Nyongesa
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Full-Stack Developer passionate about creating innovative web solutions 
              that make a difference in the digital world.
            </p>
            <div className="flex items-center justify-center md:justify-start space-x-2 text-gray-400">
              <Code className="w-4 h-4" />
              <span className="text-sm">Built with</span>
              <Heart className="w-4 h-4 text-red-400 animate-pulse" />
              <span className="text-sm">and lots of coffee</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
            <div className="space-y-3">
              {[
                { name: 'About Me', id: 'about' },
                { name: 'Skills', id: 'skills' },
                { name: 'Projects', id: 'projects' },
                { name: 'Contact', id: 'contact' }
              ].map((link) => (
                <button
                  key={link.id}
                  onClick={() => {
                    const element = document.getElementById(link.id);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="block text-gray-400 hover:text-accent transition-colors duration-300 cursor-hover mx-auto"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-right">
            <h4 className="text-lg font-semibold text-white mb-6">Let's Connect</h4>
            <div className="space-y-3 mb-6">
              <p className="text-gray-400">
                <span className="text-accent">📍</span> Kenya
              </p>
              <p className="text-gray-400">
                <span className="text-accent">📧</span> alfred.dev8@gmail.com
              </p>
              <p className="text-gray-400">
                <span className="text-accent">📱</span> +254 762 667 048
              </p>
            </div>

            {/* Social Links */}
            <div className="flex justify-center md:justify-end space-x-4">
              {socialLinks.map((social, index) => (
                <button
                  key={index}
                  onClick={(e) => handleSocialClick(e, social.url)}
                  className={`p-3 glass rounded-full text-gray-400 ${social.color} transform hover:scale-110 transition-all duration-300 cursor-hover relative overflow-hidden`}
                  aria-label={social.name}
                >
                  {social.icon}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <div className="md:flex md:items-center md:justify-between">
            
            {/* Copyright */}
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-gray-400 text-sm">
                © {currentYear} Alfred Nyongesa. All rights reserved.
              </p>
            </div>

            {/* Tech Stack */}
            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm mb-2">
                Built with React + Anime.js | Hosted on Vercel
              </p>
              <div className="flex justify-center md:justify-end items-center space-x-2">
                <div className="flex space-x-1">
                  {['⚛️', '🎨', '⚡', '🚀'].map((emoji, index) => (
                    <span 
                      key={index}
                      className="animate-bounce cursor-hover" 
                      style={{ animationDelay: `${index * 200}ms` }}
                    >
                      {emoji}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Back to Top Button */}
        <div className="text-center mt-8">
          <button
            onClick={scrollToTop}
            className="glass border border-accent px-6 py-3 rounded-full text-accent hover:bg-accent hover:text-white transform hover:scale-105 transition-all duration-300 cursor-hover"
          >
            ↑ Back to Top
          </button>
        </div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent opacity-5 rounded-full animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary-end opacity-5 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
    </footer>
  );
};

export default Footer;