import React from 'react';
import { ArrowDown, Download, Github, Linkedin, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-blue-500/10 to-emerald-500/10 rounded-full animate-pulse"></div>
        <div className="absolute top-1/4 -right-1/4 w-96 h-96 bg-gradient-to-br from-orange-500/10 to-blue-500/10 rounded-full animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8 animate-fade-in">
          <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-blue-500 to-emerald-500 p-1">
            <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center">
              <span className="text-3xl font-bold">NA</span>
            </div>
          </div>
          
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold pb-6 bg-gradient-to-r from-blue-400 via-emerald-400 to-orange-400 bg-clip-text text-transparent">
            Nikhil Ajay
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-300 mb-4">
            Full-Stack Developer & UI/UX Enthusiast
          </p>
          
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
            Crafting beautiful, user-centric digital experiences with modern technologies. 
            Passionate about clean code, innovative solutions, and creating interfaces that users love.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <button
            onClick={scrollToAbout}
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-full font-semibold hover:from-blue-700 hover:to-emerald-700 transform hover:scale-105 transition-all duration-200 flex items-center gap-2"
          >
            View My Work
            <ArrowDown size={18} />
          </button>
          
          <a
            href="/resume.pdf"
            download
            className="px-8 py-3 border-2 border-gray-400 rounded-full font-semibold hover:border-white hover:bg-white hover:text-slate-900 transition-all duration-200 flex items-center gap-2"
          >
            <Download size={18} />
            Download Resume
          </a>
        </div>

        <div className="flex justify-center space-x-6">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 border border-gray-600 rounded-full hover:border-blue-400 hover:bg-blue-400/10 transition-all duration-200 group transform hover:scale-110"
          >
            <Github className="w-6 h-6 group-hover:text-blue-400 transition-colors" />
          </a>
          
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 border border-gray-600 rounded-full hover:border-blue-400 hover:bg-blue-400/10 transition-all duration-200 group transform hover:scale-110"
          >
            <Linkedin className="w-6 h-6 group-hover:text-blue-400 transition-colors" />
          </a>
          
          <a
            href="mailto:john@example.com"
            className="p-3 border border-gray-600 rounded-full hover:border-emerald-400 hover:bg-emerald-400/10 transition-all duration-200 group transform hover:scale-110"
          >
            <Mail className="w-6 h-6 group-hover:text-emerald-400 transition-colors" />
          </a>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </section>
  );
};

export default Hero;