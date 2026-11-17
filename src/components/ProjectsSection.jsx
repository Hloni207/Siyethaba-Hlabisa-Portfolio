import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

export default function ProjectsSection({ isDark, lang }) {
  const [selectedTag, setSelectedTag] = useState('All');
  const [activeModalProject, setActiveModalProject] = useState(null);

  // Requirement: Tags must include IoT, Electronics, Softwares
  const tags = [
    { id: 'All', label: lang === 'zh' ? '所有项目' : lang === 'xh' ? 'Iiprojekthi Zonke' : 'All projects' },
    { id: 'IoT', label: 'IoT' },
    { id: 'Electronics', label: 'Electronics' },
    { id: 'Softwares', label: 'Softwares' },
  ];

  const filteredProjects =
    selectedTag === 'All'
      ? projectsData
      : projectsData.filter((p) =>
          p.categoryTags.some((tag) => tag.toLowerCase() === selectedTag.toLowerCase())
        );

  const sectionTitle =
    lang === 'zh' ? '项目' : lang === 'xh' ? 'Iiprojekthi' : 'Projects';

  return (
    <section
      id="projects"
      className="w-full py-24 sm:py-32 px-6 sm:px-10 transition-colors"
      style={{
        backgroundColor: isDark ? '#141210' : '#FAF8F5',
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Heading matching Image 2 */}
        <h2
          className={`text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-8 sm:mb-12 transition-colors ${
            isDark ? 'text-[#f5f3f0]' : 'text-[#181614]'
          }`}
        >
          {sectionTitle}
        </h2>

        {/* Filter Tags Pills Bar matching Image 2 */}
        <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 mb-12 sm:mb-16">
          {tags.map((tag) => {
            const isActive = selectedTag === tag.id;
            return (
              <button
                key={tag.id}
                onClick={() => setSelectedTag(tag.id)}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-medium tracking-wide transition-all duration-200 cursor-pointer ${
                  isActive
                    ? isDark
                      ? 'bg-white text-black shadow-md font-semibold'
                      : 'bg-black text-white shadow-md font-semibold'
                    : isDark
                    ? 'bg-transparent text-[#9c9489] border border-white/15 hover:border-white/35 hover:text-[#f5f3f0]'
                    : 'bg-transparent text-[#6e665d] border border-black/15 hover:border-black/35 hover:text-[#181614]'
                }`}
              >
                {tag.label}
              </button>
            );
          })}
        </div>

        {/* Projects 2-Column Grid matching Image 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setActiveModalProject(project)}
              className="group cursor-pointer flex flex-col"
            >
              {/* Card Image Banner */}
              <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-2xl sm:rounded-3xl overflow-hidden mb-4 bg-stone-900 border border-white/5 transition-transform duration-500 group-hover:-translate-y-1 shadow-lg group-hover:shadow-2xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center transform scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                {/* Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                {/* Corner Open Icon */}
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <ArrowUpRight className="w-4 h-4 text-white" />
                </div>

                {/* Overlaid Tags inside image bottom-left like reference */}
                <div className="absolute bottom-4 left-4 right-4 z-10 flex flex-col">
                  <span className="text-xs font-medium text-[#E28D69] tracking-wider mb-1 drop-shadow">
                    {project.categoryTags.join(' · ')}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-white drop-shadow-md leading-tight group-hover:text-[#f7a683] transition-colors">
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Summary text below image */}
              <p
                className={`text-sm leading-relaxed line-clamp-2 px-1 transition-colors ${
                  isDark ? 'text-[#a39b8f]' : 'text-[#6e665d]'
                }`}
              >
                {project.summary}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Dialog */}
      <ProjectModal
        project={activeModalProject}
        isOpen={Boolean(activeModalProject)}
        onClose={() => setActiveModalProject(null)}
        isDark={isDark}
      />
    </section>
  );
}
