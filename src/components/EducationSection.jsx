import React from 'react';
import { educationData } from '../data/portfolioData';
import { GraduationCap, MapPin, Calendar, BookOpen } from 'lucide-react';

export default function EducationSection({ isDark, lang }) {
  const sectionTitle =
    lang === 'zh' ? '教育背景' : lang === 'xh' ? 'Imfundo' : 'Education';

  return (
    <section
      id="education"
      className="w-full py-24 sm:py-32 px-6 sm:px-10 transition-colors border-t"
      style={{
        backgroundColor: isDark ? '#141210' : '#FAF8F5',
        borderColor: isDark ? 'rgba(255, 255, 255, 0.06)' : 'rgba(0, 0, 0, 0.06)',
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Heading matching Image 3 */}
        <h2
          className={`text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-16 sm:mb-20 transition-colors ${
            isDark ? 'text-[#f5f3f0]' : 'text-[#181614]'
          }`}
        >
          {sectionTitle}
        </h2>

        {/* Multi-Column Layout directly replicating Image 3 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 pb-12">
          {/* Column 1: Institution */}
          <div className="flex flex-col">
            <span
              className={`text-lg sm:text-xl font-bold tracking-tight mb-1 transition-colors ${
                isDark ? 'text-[#f5f3f0]' : 'text-[#181614]'
              }`}
            >
              {educationData.institution}
            </span>
            <span
              className={`text-xs uppercase tracking-wider font-medium ${
                isDark ? 'text-[#857d72]' : 'text-[#8b8377]'
              }`}
            >
              Institution
            </span>
          </div>

          {/* Column 2: Program / Course (Warm terracotta color matching Image 3!) */}
          <div className="flex flex-col">
            <span
              className="text-lg sm:text-xl font-semibold tracking-tight mb-1 transition-colors hover:opacity-90"
              style={{ color: '#E28D69' }}
            >
              {educationData.course}
            </span>
            <span
              className={`text-xs uppercase tracking-wider font-medium ${
                isDark ? 'text-[#857d72]' : 'text-[#8b8377]'
              }`}
            >
              Major Course
            </span>
          </div>

          {/* Column 3: Qualification / Level */}
          <div className="flex flex-col">
            <span
              className={`text-base sm:text-lg font-medium tracking-tight mb-1 transition-colors ${
                isDark ? 'text-[#ddd8d0]' : 'text-[#3d3731]'
              }`}
            >
              {educationData.qualification}
            </span>
            <span
              className={`text-xs uppercase tracking-wider font-medium ${
                isDark ? 'text-[#857d72]' : 'text-[#8b8377]'
              }`}
            >
              Certification Level
            </span>
          </div>

          {/* Column 4: Period & Location */}
          <div className="flex flex-col">
            <span
              className={`text-base sm:text-lg font-medium tracking-tight mb-0.5 transition-colors ${
                isDark ? 'text-[#ddd8d0]' : 'text-[#3d3731]'
              }`}
            >
              {educationData.period}
            </span>
            <span
              className={`text-sm transition-colors ${
                isDark ? 'text-[#9c9489]' : 'text-[#7e766c]'
              }`}
            >
              {educationData.location}
            </span>
          </div>
        </div>

        {/* Technical Core Curriculum Badges */}
        <div
          className={`mt-10 pt-8 border-t rounded-2xl p-6 sm:p-8 transition-colors ${
            isDark ? 'bg-[#181614] border-white/5' : 'bg-[#F2EEE9] border-black/5'
          }`}
        >
          <div className="flex items-center gap-2 mb-4">
            <BookOpen className="w-4 h-4 text-[#E28D69]" />
            <h3
              className={`text-xs sm:text-sm font-semibold uppercase tracking-wider ${
                isDark ? 'text-[#f5f3f0]' : 'text-[#181614]'
              }`}
            >
              Core Academic & Practical Competencies
            </h3>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {educationData.disciplines.map((item, idx) => (
              <span
                key={idx}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium border transition-colors ${
                  isDark
                    ? 'bg-black/30 text-[#e0dad1] border-white/10 hover:border-white/30'
                    : 'bg-white text-[#2a2622] border-black/10 hover:border-black/30'
                }`}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
