import React from 'react';
import { ArrowUp } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer({ isDark, lang }) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const backToTopText =
    lang === 'zh' ? '返回顶部' : lang === 'xh' ? 'Buyela Phezulu' : 'Back to top';

  return (
    <footer
      className="w-full py-12 px-6 sm:px-10 transition-colors"
      style={{
        backgroundColor: isDark ? '#141210' : '#FAF8F5',
        color: isDark ? '#857d72' : '#8b8377',
      }}
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-xs sm:text-sm">
        {/* Left: Copyright matching Image 5 */}
        <div className="flex items-center gap-2">
          <span>© 2026 {personalInfo.name}</span>
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#E28D69]" />
        </div>

        {/* Right: Back to top link matching Image 5 */}
        <button
          onClick={scrollToTop}
          className={`flex items-center gap-2 transition-colors cursor-pointer group ${
            isDark ? 'hover:text-[#f5f3f0]' : 'hover:text-[#181614]'
          }`}
        >
          <span>{backToTopText}</span>
          <ArrowUp className="w-3.5 h-3.5 transition-transform duration-300 group-hover:-translate-y-1" />
        </button>
      </div>
    </footer>
  );
}
