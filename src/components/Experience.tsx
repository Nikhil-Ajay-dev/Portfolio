import React from 'react';
import { Calendar, MapPin, Building2 } from 'lucide-react';
import { experience } from '../data/portfolio';

const Experience: React.FC = () => {
  const currentExperience = experience[0]; // Since there's only one experience

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Professional Experience
          </h2>
          <p className="text-xl text-gray-600">
            My journey in software development and contribution to public service
          </p>
        </div>

        <div className="relative">
          {/* Main Experience Card */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-300">
            {/* Header with gradient background */}
            <div className="bg-gradient-to-r from-blue-600 to-emerald-600 p-8 text-white">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <Building2 className="w-6 h-6" />
                    <span className="text-blue-100 font-medium">
                      {currentExperience.company}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3">
                    {currentExperience.position}
                  </h3>
                  
                  <div className="flex items-center gap-2 text-blue-100">
                    <Calendar className="w-4 h-4" />
                    <span className="font-medium">{currentExperience.duration}</span>
                  </div>
                </div>

                {/* Duration Badge */}
                <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                  <span className="text-sm font-semibold">2+ Years</span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-8">
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-slate-900 mb-4">Role Overview</h4>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {currentExperience.description}
                </p>
              </div>

              {/* Key Achievements */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-slate-900 mb-4">Key Achievements</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
                    <div className="font-semibold text-blue-900 mb-1">System Modernization</div>
                    <div className="text-blue-700 text-sm">Upgraded legacy systems to modern web technologies</div>
                  </div>
                  <div className="bg-emerald-50 rounded-lg p-4 border-l-4 border-emerald-500">
                    <div className="font-semibold text-emerald-900 mb-1">Performance Optimization</div>
                    <div className="text-emerald-700 text-sm">Improved application performance and user experience</div>
                  </div>
                  <div className="bg-orange-50 rounded-lg p-4 border-l-4 border-orange-500">
                    <div className="font-semibold text-orange-900 mb-1">Cross-functional Collaboration</div>
                    <div className="text-orange-700 text-sm">Worked with diverse teams across government departments</div>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-4 border-l-4 border-purple-500">
                    <div className="font-semibold text-purple-900 mb-1">Public Service Impact</div>
                    <div className="text-purple-700 text-sm">Serving thousands of cooperative members statewide</div>
                  </div>
                </div>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="text-lg font-semibold text-slate-900 mb-4">Technologies & Tools</h4>
                <div className="flex flex-wrap gap-3">
                  {currentExperience.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-gradient-to-r from-blue-100 to-emerald-100 text-slate-700 rounded-full font-medium border border-blue-200 hover:shadow-md transition-all duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Timeline Indicator */}
          <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full border-4 border-white shadow-lg">
            <div className="w-full h-full rounded-full bg-white scale-50"></div>
          </div>

          {/* Vertical line */}
          <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-emerald-500 -z-10"></div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-emerald-50 rounded-xl p-6 border border-blue-100">
            <h4 className="text-lg font-semibold text-slate-900 mb-2">
              Continuous Growth & Learning
            </h4>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Throughout my tenure at APCFSS, I've continuously expanded my technical skills while 
              contributing to meaningful projects that serve the public. I'm passionate about leveraging 
              technology to create positive social impact and improve government services.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;