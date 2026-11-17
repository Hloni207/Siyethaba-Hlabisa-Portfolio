import React, { useState } from 'react';
import { Plus, CheckCircle2, Award, Calendar, MapPin, Briefcase } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export default function ExperienceSection({ isDark, lang }) {
  // Store expanded item ids
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  const sectionTitle =
    lang === 'zh' ? '工作与项目经历' : lang === 'xh' ? 'Amava Omsebenzi' : 'Experience';

  return (
    <section
      id="experience"
      className="w-full py-24 sm:py-32 px-6 sm:px-10 transition-colors border-t"
      style={{
        backgroundColor: isDark ? '#141210' : '#FAF8F5',
        borderColor: isDark ? 'rgba(255, 255, 255, 0.06)' : 'rgba(0, 0, 0, 0.06)',
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Heading matching Image 4 & 5 */}
        <h2
          className={`text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-16 sm:mb-20 transition-colors ${
            isDark ? 'text-[#f5f3f0]' : 'text-[#181614]'
          }`}
        >
          {sectionTitle}
        </h2>

        {/* Experience List matching Image 4 & 5 */}
        <div className="border-t border-b divide-y transition-colors"
          style={{
            borderColor: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
          }}
        >
          {experienceData.map((item) => {
            const isOpen = expandedId === item.id;
            return (
              <div
                key={item.id}
                className="py-8 sm:py-10 transition-colors group"
                style={{
                  borderColor: isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)',
                }}
              >
                {/* Header Row: Date | Title & Subtitle | Plus Button */}
                <div
                  onClick={() => toggleExpand(item.id)}
                  className="flex flex-col md:flex-row md:items-start justify-between gap-4 cursor-pointer select-none"
                >
                  {/* Left: Date / Period */}
                  <div className="w-full md:w-1/4">
                    <span
                      className={`text-sm sm:text-base font-medium tracking-wide transition-colors ${
                        isDark ? 'text-[#9c9489]' : 'text-[#7e766c]'
                      }`}
                    >
                      {item.period}
                    </span>
                  </div>

                  {/* Center: Title & Small details (Displayed by default) */}
                  <div className="w-full md:w-2/4">
                    <h3
                      className={`text-xl sm:text-2xl font-bold tracking-tight inline-block transition-colors underline decoration-transparent group-hover:decoration-current underline-offset-4 ${
                        isDark ? 'text-[#f5f3f0]' : 'text-[#181614]'
                      }`}
                    >
                      {item.company}
                    </h3>

                    {/* Small details displayed by default */}
                    <p
                      className="text-sm sm:text-base mt-1.5 transition-colors font-medium"
                      style={{ color: '#E28D69' }}
                    >
                      {item.shortDetail}
                    </p>
                  </div>

                  {/* Right: + Button with smooth rotation animation */}
                  <div className="w-full md:w-1/4 flex md:justify-end items-center pt-2 md:pt-0">
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-label={`Toggle details for ${item.company}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleExpand(item.id);
                      }}
                      className={`w-9 h-9 rounded-full flex items-center justify-center border transition-all duration-300 transform cursor-pointer ${
                        isOpen
                          ? 'rotate-45 bg-[#E28D69] text-black border-[#E28D69] shadow-md'
                          : isDark
                          ? 'border-white/15 text-[#f5f3f0] hover:border-white/40 hover:bg-white/5'
                          : 'border-black/15 text-[#181614] hover:border-black/40 hover:bg-black/5'
                      }`}
                    >
                      <Plus className="w-4 h-4 stroke-[2.5]" />
                    </button>
                  </div>
                </div>

                {/* Expandable Details Container with smooth animation */}
                <div
                  className={`grid transition-all duration-500 ease-in-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100 mt-6 pt-6' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div
                      className={`rounded-2xl p-6 sm:p-8 border transition-all ${
                        isDark
                          ? 'bg-[#181614]/90 border-white/10 text-[#f5f3f0]'
                          : 'bg-[#F2EEE9] border-black/10 text-[#181614]'
                      }`}
                    >
                      {/* User's exact core reflection & story */}
                      <div className="mb-6">
                        <span className="text-xs font-semibold uppercase tracking-wider text-[#E28D69] block mb-2">
                          Experience & Learning Outcome
                        </span>
                        <blockquote
                          className={`text-base sm:text-lg leading-relaxed italic border-l-2 pl-4 ${
                            isDark ? 'border-[#E28D69] text-[#f5f3f0]' : 'border-[#E28D69] text-[#221f1c]'
                          }`}
                        >
                          "{item.description}"
                        </blockquote>
                      </div>

                      {/* Extended Key Learnings */}
                      <div className="space-y-3 mb-6">
                        <span
                          className={`text-xs font-semibold uppercase tracking-wider block ${
                            isDark ? 'text-[#a89f91]' : 'text-[#6e665d]'
                          }`}
                        >
                          Key Responsibilities & Industry Milestones
                        </span>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {item.extendedDetails.map((detail, idx) => (
                            <li key={idx} className="flex items-start gap-2.5 text-sm">
                              <CheckCircle2 className="w-4 h-4 text-[#E28D69] shrink-0 mt-0.5" />
                              <span className={isDark ? 'text-[#d6d0c7]' : 'text-[#423d37]'}>
                                {detail}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5">
                        {item.tags.map((t, i) => (
                          <span
                            key={i}
                            className={`px-3 py-1 rounded-full text-xs font-medium border ${
                              isDark
                                ? 'bg-white/5 border-white/10 text-white/80'
                                : 'bg-black/5 border-black/10 text-black/80'
                            }`}
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
