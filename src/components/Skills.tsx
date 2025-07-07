import React from 'react';
import {
  Code2,
  Database,
  Settings,
  Palette,
  Globe,
  Server,
  GitBranch,
  Container,
  Cloud,
  Layers,
  Zap,
  FileCode,
  Braces,
  Layout,
  Smartphone
} from 'lucide-react';
import { skills } from '../data/portfolio';

const Skills: React.FC = () => {
  const categories = {
    frontend: 'Frontend Development',
    backend: 'Backend Development',
    tools: 'Tools & DevOps',
    other: 'Design & Other'
  };

  const categoryColors = {
    frontend: {
      gradient: 'from-blue-500 to-cyan-500',
      bg: 'from-blue-50 to-cyan-50',
      border: 'border-blue-200',
      icon: 'text-blue-600'
    },
    backend: {
      gradient: 'from-emerald-500 to-teal-500',
      bg: 'from-emerald-50 to-teal-50',
      border: 'border-emerald-200',
      icon: 'text-emerald-600'
    },
    tools: {
      gradient: 'from-orange-500 to-red-500',
      bg: 'from-orange-50 to-red-50',
      border: 'border-orange-200',
      icon: 'text-orange-600'
    },
    other: {
      gradient: 'from-purple-500 to-pink-500',
      bg: 'from-purple-50 to-pink-50',
      border: 'border-purple-200',
      icon: 'text-purple-600'
    }
  };

  const categoryIcons = {
    frontend: <Code2 className="w-6 h-6" />,
    backend: <Server className="w-6 h-6" />,
    tools: <Settings className="w-6 h-6" />,
    other: <Palette className="w-6 h-6" />
  };

  const getSkillIcon = (iconName: string) => {
    const iconMap: { [key: string]: JSX.Element } = {
      react: <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-sm">
        <img src='https://cdn.iconscout.com/icon/free/png-256/free-react-logo-icon-download-in-svg-png-gif-file-formats--company-brand-world-logos-vol-4-pack-icons-282599.png?f=webp&w=256' />
      </div>,
      // typescript: <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-sm">TS</div>,
      javascript: <div className="w-8 h-8 rounded-lg bg-yellow-100 flex items-center justify-center text-yellow-600 font-bold text-sm">
        <img src='https://www.vhv.rs/dpng/d/456-4562295_library-of-javascript-icon-graphic-freeuse-png-files.png' />
      </div>,
      html: <div className="w-8 h-8 rounded-lg bg-yellow-100 flex items-center justify-center text-yellow-600 font-bold text-sm">
        <img src='https://cdn.iconscout.com/icon/free/png-256/free-html-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-vol-3-pack-logos-icons-3030115.png?f=webp&w=256' />
      </div>,
      css: <div className="w-8 h-8 rounded-lg bg-yellow-100 flex items-center justify-center text-yellow-600 font-bold text-sm">
        <img src='https://cdn-icons-png.flaticon.com/512/732/732190.png' />
      </div>,
      tailwind: <div className="w-8 h-8 rounded-lg bg-cyan-100 flex items-center justify-center text-cyan-600 font-bold text-sm">
        <img src='https://shadowblood.gallerycdn.vsassets.io/extensions/shadowblood/tailwind-moon/3.0.2/1673948732518/Microsoft.VisualStudio.Services.Icons.Default' />
      </div>,
      // nextjs: <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center text-gray-800 font-bold text-sm">N</div>,
      // vue: <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center text-green-600 font-bold text-sm">V</div>,
      nodejs: <div className="w-8 h-8 rounded-lg bg-cyan-100 flex items-center justify-center text-cyan-600 font-bold text-sm">
        <img src='https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_f0b606abb6d19089febc9faeeba5bc05/nodejs-development-services.png' />
      </div>,
      // express: <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center text-gray-700 font-bold text-sm">E</div>,
      postgresql: <div className="w-8 h-8 rounded-lg bg-cyan-100 flex items-center justify-center text-cyan-600 font-bold text-sm">
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png' />
      </div>,
      // mongodb: <Database className="w-8 h-8 text-green-600" />,
      // python: <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-sm">Py</div>,
      // graphql: <div className="w-8 h-8 rounded-lg bg-pink-100 flex items-center justify-center text-pink-600 font-bold text-sm">GQ</div>,
      git: <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-sm">
        <img src='https://miro.medium.com/v2/resize:fit:383/0*5g3mp6zgIoqprOgV.png' />
      </div>,
      // docker: <Container className="w-8 h-8 text-blue-600" />,
      aws: <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-sm">
        <img src='https://shecancode.io/wp-content/uploads/2022/04/aws.png' />
      </div>,
      webpack: <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-sm">
        <img src='https://www.drupal.org/files/project-images/webpack.png' />
      </div>,
      // vite: <Zap className="w-8 h-8 text-purple-600" />,
      figma: <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-sm">
        <img src='https://blog.greggant.com/images/posts/2019-04-25-figma/Figma.png' />
      </div>,
      photoshop: <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-sm">
        <img src='https://pngdownload.io/wp-content/uploads/2024/01/Photoshop-logo-Adobe-symbol-digital-creativity-transparent-png-image-jpg.webp' />
      </div>
    };

    return iconMap[iconName] || <FileCode className="w-8 h-8 text-gray-600" />;
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Skills & Technologies
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive overview of the technologies and tools I use to create exceptional digital experiences.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {Object.entries(categories).map(([categoryKey, categoryName]) => {
            const categorySkills = skills.filter(skill => skill.category === categoryKey);
            const colors = categoryColors[categoryKey as keyof typeof categoryColors];

            return (
              <div
                key={categoryKey}
                className={`relative bg-gradient-to-br ${colors.bg} rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border ${colors.border} group`}
              >
                {/* Category Header */}
                <div className="flex items-center mb-8">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${colors.gradient} text-white mr-4 group-hover:scale-110 transition-transform duration-300`}>
                    {categoryIcons[categoryKey as keyof typeof categoryIcons]}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">
                      {categoryName}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {categorySkills.length} technologies
                    </p>
                  </div>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {categorySkills.map((skill, index) => (
                    <div
                      key={index}
                      className="group/skill bg-white/70 backdrop-blur-sm rounded-xl p-4 hover:bg-white hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 border border-white/50"
                      style={{
                        animationDelay: `${index * 0.1}s`
                      }}
                    >
                      <div className="flex flex-col items-center text-center space-y-3">
                        <div className="group-hover/skill:scale-110 transition-transform duration-300">
                          {getSkillIcon(skill.icon)}
                        </div>
                        <div>
                          <h4 className="font-semibold text-slate-800 text-sm group-hover/skill:text-slate-900 transition-colors">
                            {skill.name}
                          </h4>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Decorative Elements */}
                <div className={`absolute top-4 right-4 w-20 h-20 bg-gradient-to-r ${colors.gradient} rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>
                <div className={`absolute bottom-4 left-4 w-12 h-12 bg-gradient-to-r ${colors.gradient} rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>
              </div>
            );
          })}
        </div>

        {/* Additional Info Section */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Always Learning
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Technology evolves rapidly, and I'm committed to staying current with the latest trends,
              frameworks, and best practices. I regularly explore new tools and technologies to enhance
              my development capabilities and deliver cutting-edge solutions.
            </p>
            <div className="flex justify-center mt-6 space-x-4">
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                <span>Currently exploring AI/ML integration</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                <span>Learning Web3 technologies</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .group/skill {
          animation: fadeInUp 0.6s ease-out both;
        }
      `}</style>
    </section>
  );
};

export default Skills;