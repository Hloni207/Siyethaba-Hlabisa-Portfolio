import React from 'react';
import { X, ExternalLink, Cpu, Code2, Wrench, CheckCircle } from 'lucide-react';

export default function ProjectModal({ project, isOpen, onClose, isDark }) {
  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div
        className={`relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl p-6 sm:p-8 shadow-2xl border transition-all ${
          isDark
            ? 'bg-[#181614] border-white/10 text-[#f5f3f0]'
            : 'bg-[#FAF8F5] border-black/10 text-[#181614]'
        }`}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className={`absolute top-6 right-6 w-9 h-9 rounded-full flex items-center justify-center border transition-all cursor-pointer ${
            isDark
              ? 'border-white/15 text-white/70 hover:text-white hover:border-white/40 hover:bg-white/5'
              : 'border-black/15 text-black/70 hover:text-black hover:border-black/40 hover:bg-black/5'
          }`}
        >
          <X className="w-4 h-4" />
        </button>

        {/* Project Image Banner */}
        <div className="relative w-full h-56 sm:h-72 rounded-2xl overflow-hidden mb-6">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
            {project.categoryTags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full text-xs font-semibold bg-[#E28D69] text-black shadow"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Title */}
        <h3 className="text-2xl sm:text-3xl font-bold tracking-tight mb-3">
          {project.title}
        </h3>

        {/* Full Details */}
        <p
          className={`text-base leading-relaxed mb-6 ${
            isDark ? 'text-[#c2bab0]' : 'text-[#5a5248]'
          }`}
        >
          {project.details}
        </p>

        {/* Key Engineering Specifications */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold uppercase tracking-wider text-[#E28D69] mb-3 flex items-center gap-2">
            <Cpu className="w-4 h-4" />
            <span>Technical Specifications</span>
          </h4>
          <ul className="space-y-2.5">
            {project.specs.map((spec, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm">
                <CheckCircle className="w-4 h-4 text-[#E28D69] mt-0.5 shrink-0" />
                <span className={isDark ? 'text-[#e5e1db]' : 'text-[#36322d]'}>
                  {spec}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack Pills */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold uppercase tracking-wider text-[#E28D69] mb-3 flex items-center gap-2">
            <Code2 className="w-4 h-4" />
            <span>Technologies & Hardware</span>
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className={`px-3 py-1 rounded-lg text-xs font-medium border ${
                  isDark
                    ? 'bg-white/5 border-white/10 text-white/90'
                    : 'bg-black/5 border-black/10 text-black/90'
                }`}
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Modal Action Footer */}
        <div className="flex justify-end pt-4 border-t border-white/10">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-full text-xs font-semibold bg-[#E28D69] text-black hover:bg-[#eb9d7c] transition-all cursor-pointer"
          >
            Close Details
          </button>
        </div>
      </div>
    </div>
  );
}
