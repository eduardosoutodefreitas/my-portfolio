'use client';
import sections from '@/constants/Sections';
import React, { useState, useEffect } from 'react';
import BottomNavButton from './BottomNavButton';

const BottomNav = () => {
  const [activeSection, setActiveSection] = useState('#home'); // Defina a Home como ativa por padrão

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

    // Adiciona o event listener para o evento de scroll
    window.addEventListener('scroll', handleScroll);

    // Remove o event listener ao desmontar o componente
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // O array vazio como segundo argumento faz com que o efeito só seja executado uma vez, semelhante a componentDidMount

  return (
    <div className="fixed bottom-0 left-1/2 -translate-x-1/2 bg-primaryBlack w-screen rounded-t-3xl py-1 flex justify-around items-center md:hidden">
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
  );
};

export default BottomNav;
