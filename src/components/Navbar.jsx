import React, { useState, useEffect } from 'react';
import { Sun, Moon, Globe, Menu, X } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import ProfileImage from '../assets/Profile Image.png';

export default function Navbar({ isDark, setIsDark, lang, setLang }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Determine active section
      const sections = ['about', 'projects', 'education', 'experience'];
      const scrollPos = window.scrollY + 200;
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: lang === 'zh' ? '关于' : lang === 'xh' ? 'Malunga' : 'About', href: '#about', id: 'about' },
    { name: lang === 'zh' ? '项目' : lang === 'xh' ? 'Iiprojekthi' : 'Projects', href: '#projects', id: 'projects' },
    { name: lang === 'zh' ? '教育' : lang === 'xh' ? 'Imfundo' : 'Education', href: '#education', id: 'education' },
    { name: lang === 'zh' ? '经历' : lang === 'xh' ? 'Amava' : 'Experience', href: '#experience', id: 'experience' },
  ];

  const toggleLanguage = () => {
    if (lang === 'en') setLang('zh');
    else if (lang === 'zh') setLang('xh');
    else setLang('en');
  };

  const getLangBadge = () => {
    if (lang === 'zh') return '中';
    if (lang === 'xh') return 'XH';
    return '中'; // Show 中 like in reference image
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#141210]/95 backdrop-blur-md py-4 shadow-lg shadow-black/20 border-b border-white/5'
          : 'bg-[#141210] py-5 border-b border-white/5'
      }`}
      style={{
        backgroundColor: isDark
          ? (scrolled ? 'rgba(20, 18, 16, 0.95)' : '#141210')
          : (scrolled ? 'rgba(250, 248, 245, 0.95)' : '#FAF8F5'),
        borderColor: isDark ? 'rgba(255, 255, 255, 0.06)' : 'rgba(0, 0, 0, 0.06)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 flex items-center justify-between">
        {/* Left: Avatar + Name + Orange Square Accent */}
        <a
          href="#about"
          className="flex items-center gap-3.5 group cursor-pointer text-decoration-none"
        >
          <div className="w-10 h-10 rounded-full overflow-hidden border border-white/10 group-hover:border-[#E28D69] transition-all shadow-sm">
            <img
              src={ProfileImage}
              alt="Siyethaba Hlabisa"
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div className="flex items-center">
            <span
              className={`font-semibold tracking-tight text-lg transition-colors ${
                isDark ? 'text-[#f5f3f0] group-hover:text-white' : 'text-[#181614] group-hover:text-black'
              }`}
            >
              {personalInfo.shortName}
            </span>
            <span
              className="inline-block w-2.5 h-2.5 ml-1 rounded-[2px] transition-transform duration-300 group-hover:scale-125"
              style={{ backgroundColor: '#E28D69' }}
              title="Siyethaba Hlabisa"
            />
          </div>
        </a>

        {/* Center: Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                className={`text-sm font-medium tracking-wide transition-all relative py-1 ${
                  isActive
                    ? isDark
                      ? 'text-[#f5f3f0]'
                      : 'text-[#181614]'
                    : isDark
                    ? 'text-[#9c9489] hover:text-[#f5f3f0]'
                    : 'text-[#7e766c] hover:text-[#181614]'
                }`}
              >
                {link.name}
                {isActive && (
                  <span
                    className="absolute bottom-0 left-0 right-0 h-[2px] rounded-full transition-all"
                    style={{ backgroundColor: '#E28D69' }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right: Language switch & Theme toggle */}
        <div className="flex items-center gap-3">
          {/* Language Switcher Button ("中" as seen in original screenshot) */}
          <button
            onClick={toggleLanguage}
            title={`Current language: ${lang.toUpperCase()}. Click to switch`}
            className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-semibold border transition-all duration-200 cursor-pointer ${
              isDark
                ? 'border-white/15 text-[#f5f3f0] hover:border-white/40 hover:bg-white/5'
                : 'border-black/15 text-[#181614] hover:border-black/30 hover:bg-black/5'
            }`}
          >
            {getLangBadge()}
          </button>

          {/* Theme Toggle (Sun/Moon inside circle icon button) */}
          <button
            onClick={() => setIsDark(!isDark)}
            title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            className={`w-9 h-9 rounded-full flex items-center justify-center border transition-all duration-200 cursor-pointer ${
              isDark
                ? 'border-white/15 text-[#f5f3f0] hover:border-white/40 hover:bg-white/5'
                : 'border-black/15 text-[#181614] hover:border-black/30 hover:bg-black/5'
            }`}
          >
            {isDark ? (
              <Sun className="w-4 h-4 text-[#f5f3f0]" strokeWidth={1.8} />
            ) : (
              <Moon className="w-4 h-4 text-[#181614]" strokeWidth={1.8} />
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden w-9 h-9 rounded-full flex items-center justify-center border transition-all ${
              isDark ? 'border-white/15 text-white' : 'border-black/15 text-black'
            }`}
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          className={`md:hidden px-6 py-6 border-b transition-all ${
            isDark ? 'bg-[#181614] border-white/10' : 'bg-[#FAF8F5] border-black/10'
          }`}
        >
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-base font-medium py-1.5 transition-colors ${
                  activeSection === link.id
                    ? 'text-[#E28D69] font-semibold'
                    : isDark
                    ? 'text-[#f5f3f0]'
                    : 'text-[#181614]'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
