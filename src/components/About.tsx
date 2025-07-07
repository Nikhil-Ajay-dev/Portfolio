import React from 'react';
import { Code, Palette, Zap, Users } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code following best practices."
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Design Focus",
      description: "Creating beautiful, intuitive interfaces that enhance user experience."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Performance",
      description: "Optimizing applications for speed, accessibility, and search engines."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Collaboration",
      description: "Working effectively with cross-functional teams to deliver exceptional products."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              About Me
            </h2>
            
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                I'm a passionate full-stack developer with over 2 years of experience creating 
                digital solutions that make a difference. I specialize in modern web technologies 
                and have a keen eye for design, ensuring that every project I work on is both 
                functional and beautiful.
              </p>
              
              <p>
                My journey in tech started with a curiosity about how websites work, which quickly 
                evolved into a deep passion for crafting user experiences. I believe that great 
                software should be invisible to the user – intuitive, fast, and delightful to use.
              </p>
              
              <p>
                When I'm not coding, you can find me exploring new technologies, contributing to 
                open-source projects, or sharing knowledge with the developer community. I'm always 
                excited to take on new challenges and collaborate with like-minded professionals.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                2+ Years Experience
              </span>
              <span className="px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium">
                6+ Projects Completed
              </span>
              <span className="px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">
                Remote Friendly
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="text-blue-600 mb-4">
                  {highlight.icon}
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {highlight.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;