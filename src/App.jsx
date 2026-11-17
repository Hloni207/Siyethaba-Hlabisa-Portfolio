import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProjectsSection from './components/ProjectsSection';
import EducationSection from './components/EducationSection';
import ExperienceSection from './components/ExperienceSection';
import Footer from './components/Footer';

export default function App() {
  const [isDark, setIsDark] = useState(true);
  const [lang, setLang] = useState('en');

  // Sync theme class to document body / root
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div
      className={`min-h-screen w-full transition-colors duration-300 font-sans selection:bg-[#E28D69] selection:text-black ${
        isDark ? 'bg-[#141210] text-[#f5f3f0]' : 'bg-[#FAF8F5] text-[#181614]'
      }`}
    >
      {/* 3. Constant, fixed header all the time */}
      <Navbar
        isDark={isDark}
        setIsDark={setIsDark}
        lang={lang}
        setLang={setLang}
      />

      <main className="w-full flex flex-col">
        {/* 1. Hero Section: Exactly where the user lands when opening the site (Image 1 replica, takes 100vh) */}
        <HeroSection isDark={isDark} lang={lang} />

        {/* 2. Projects Section: User scrolls down manually to reach this (Image 2 replica) */}
        {/* 5. Filter tags: IoT, Electronics, Softwares */}
        <ProjectsSection isDark={isDark} lang={lang} />

        {/* 6. Education: East Cape Midlands TVET College, Programming and Robotics, 2025-2027, L2-L4, Uitenhage (Image 3 replica) */}
        <EducationSection isDark={isDark} lang={lang} />

        {/* 7. Experience: Small details displayed, plus button expands with good animation (Image 4 & 5 replica) */}
        <ExperienceSection isDark={isDark} lang={lang} />
      </main>

      {/* Footer matching Image 5 */}
      <Footer isDark={isDark} lang={lang} />
    </div>
  );
}
