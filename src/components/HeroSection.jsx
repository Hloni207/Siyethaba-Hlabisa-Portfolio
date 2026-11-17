import React, { useState, useEffect } from 'react';
import { ArrowDown, Copy, Check, ExternalLink } from 'lucide-react';
import { personalInfo, carouselSlides } from '../data/portfolioData';
import FirstImage from '../assets/First Image.jpg';
import TheSecond from '../assets/The Second.jpg';
import TheThird from '../assets/The third.jpg';

// Map local image keys to imported assets
const localImages = {
  FirstImage,
  TheSecond,
  TheThird,
};

export default function HeroSection({ isDark, lang }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [copied, setCopied] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-advance carousel every 5.5s unless hovered
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
    }, 5500);
    return () => clearInterval(interval);
  }, [isHovered]);

  const copyEmail = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const currentBio =
    lang === 'zh'
      ? '你好，我是 Siyethaba Hlabisa，东开普敦中部 TVET 学院的编程与机器人专业学生。我的专业方向涵盖物联网系统、嵌入式电子和软件开发。我热衷于构建智能机器人系统与互联硬件解决方案。'
      : lang === 'xh'
      ? personalInfo.heroBio.xh
      : personalInfo.heroBio.en;

  const exploreText =
    lang === 'zh' ? '探索我的作品' : lang === 'xh' ? 'Hlola umsebenzi wam' : 'Explore my work';

  return (
    <section
      id="about"
      className="relative w-full min-h-screen flex items-center pt-20 pb-6 overflow-hidden"
      style={{
        backgroundColor: isDark ? '#141210' : '#FAF8F5',
      }}
    >
      <div className="w-full h-full max-w-7xl mx-auto px-6 sm:px-10 flex flex-col md:flex-row items-center md:items-stretch justify-between gap-8 md:gap-10 lg:gap-14">
        {/* Left Column: Bio & Action Links */}
        <div className="w-full md:w-1/2 flex flex-col justify-between py-6 md:py-12 z-10 order-1">
          <div className="space-y-8 my-auto">
            {/* Bio Paragraph */}
            <p
              className={`text-xl sm:text-2xl lg:text-[1.85rem] font-medium leading-[1.45] tracking-[-0.015em] max-w-xl transition-colors ${
                isDark ? 'text-[#f5f3f0]' : 'text-[#181614]'
              }`}
            >
              {currentBio}
            </p>

            {/* CTA Button: Explore my work */}
            <div>
              <a
                href="#projects"
                className={`inline-flex items-center gap-2 px-7 py-3 rounded-full text-sm font-medium tracking-wide border transition-all duration-300 group cursor-pointer ${
                  isDark
                    ? 'border-white/30 text-white hover:bg-white hover:text-black hover:border-white shadow-sm'
                    : 'border-black/30 text-[#181614] hover:bg-black hover:text-white hover:border-black shadow-sm'
                }`}
              >
                <span>{exploreText}</span>
              </a>
            </div>
          </div>

          {/* Bottom Left: Email & LinkedIn links */}
          <div className="pt-8 flex flex-wrap items-center gap-8 text-sm sm:text-base font-medium">
            {/* Email link with copy notification */}
            <div className="relative flex items-center gap-2 group">
              <a
                href={`mailto:${personalInfo.email}`}
                className="transition-colors hover:underline underline-offset-4 decoration-[#E28D69]"
                style={{ color: '#E28D69' }}
              >
                {personalInfo.email}
              </a>
              <button
                onClick={copyEmail}
                title="Copy email to clipboard"
                className={`p-1 rounded opacity-70 group-hover:opacity-100 hover:scale-110 transition-all cursor-pointer ${
                  isDark ? 'text-white/60 hover:text-white' : 'text-black/60 hover:text-black'
                }`}
              >
                {copied ? (
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                ) : (
                  <Copy className="w-3.5 h-3.5" />
                )}
              </button>
              {copied && (
                <span className="absolute -top-7 left-0 text-xs px-2 py-0.5 rounded bg-[#E28D69] text-black font-semibold shadow">
                  Copied!
                </span>
              )}
            </div>

            {/* LinkedIn link */}
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 transition-colors hover:underline underline-offset-4 decoration-[#E28D69]"
              style={{ color: '#E28D69' }}
            >
              <span>LinkedIn</span>
            </a>
          </div>
        </div>

        {/* Right Column: Hero Photo / Interactive Carousel */}
        <div
          className="w-full md:w-1/2 h-[420px] sm:h-[480px] md:h-auto md:min-h-[560px] lg:min-h-[620px] relative rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl my-auto group order-2"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Carousel Slide Backgrounds */}
          {carouselSlides.map((slide, idx) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                idx === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              {/* Image with Dark Vignette Overlay matching reference */}
              <img
                src={slide.isLocal ? localImages[slide.localImage] : slide.image}
                alt={slide.subtitle}
                className="w-full h-full object-cover object-center transform scale-100 group-hover:scale-105 transition-transform duration-1000 ease-out"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement.style.background = slide.fallbackBg;
                }}
              />

              {/* Cinematic Vignette Overlay matching reference photo */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/10" />
            </div>
          ))}

          {/* Bottom Overlay: Large Typography "Siyethaba Hlabisa." & Carousel Dots exactly like Image 1 */}
          <div className="absolute bottom-6 sm:bottom-10 left-6 sm:left-10 right-6 sm:right-10 z-20 flex flex-col gap-3">
            {/* Big Name with Terracotta Accent Square */}
            <div className="flex items-baseline flex-wrap">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white drop-shadow-md">
                {personalInfo.name}
              </h1>
              <span
                className="inline-block w-3 sm:w-3.5 h-3 sm:h-3.5 ml-1.5 rounded-[2px] shadow-sm transform translate-y-[-2px]"
                style={{ backgroundColor: '#E28D69' }}
              />
            </div>

            {/* 5 Carousel Indicator Dots matching reference image 1 */}
            <div className="flex items-center gap-2 pt-1">
              {carouselSlides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`transition-all duration-300 rounded-full cursor-pointer ${
                    idx === currentSlide
                      ? 'w-6 h-2 bg-white shadow-sm'
                      : 'w-2 h-2 bg-white/45 hover:bg-white/70'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Subtle indicator for user to manually scroll */}
      <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 hidden lg:flex flex-col items-center opacity-40 hover:opacity-100 transition-opacity">
        <span className="text-[10px] tracking-widest uppercase font-mono mb-1 text-inherit">Scroll</span>
        <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
      </div>
    </section>
  );
}
