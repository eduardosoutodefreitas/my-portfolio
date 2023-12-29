'use client';
import sections from '@/constants/Sections';
import React, { useState, useEffect } from 'react';
import BottomNavButton from './BottomNavButton';
import SideNavDot from './SideNavDot';

const DynamicNav = () => {
  const [activeSection, setActiveSection] = useState('#home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      const active = sections.find(({ id }) => {
        const element = document.querySelector(id);
        if (element) {
          const offset =
            element.getBoundingClientRect().top + window.scrollY - 100;
          return (
            scrollPosition >= offset &&
            scrollPosition < offset + element.clientHeight
          );
        }
        return false;
      });

      setActiveSection(active ? active.id : '');
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 bg-primaryBlack w-screen rounded-t-3xl px-5 py-1 flex justify-around items-center md:hidden">
        {sections.map(({ id, label, icon }) => (
          <BottomNavButton
            label={label}
            activeSection={activeSection}
            icon={icon}
            id={id}
            key={id}
          />
        ))}
      </div>
      <div className="fixed right-4 top-1/2 -translate-y-1/2 hidden md:flex flex-col items-center gap-5">
        {sections.map(({ id, label, icon }) => (
          <SideNavDot
            label={label}
            icon={icon}
            activeSection={activeSection}
            id={id}
            key={id}
          />
        ))}
      </div>
    </>
  );
};

export default DynamicNav;
