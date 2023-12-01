'use client';

import { useState } from 'react';
import HamburguerIcon from './HamburguerIcon';
import NavbarLinks from './NavbarLinks';

const MobileNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>();

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="md:hidden">
      <HamburguerIcon onClick={handleMenuToggle} isMenuOpen={isMenuOpen} />

      <div
        className={`flex h-[calc(100vw-80px)] w-full overflow-x-hidden fixed ${
          isMenuOpen ? 'z-[100]' : 'z-[-100]'
        }`}
      >
        <div
          className={`bg-black/50 z-10 w-[40vw] top-[80px] transition-all duration-300 cursor-pointer fixed inset-0 ${
            isMenuOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
          }
            }`}
          onClick={handleMenuToggle}
        />
        <nav
          className={`w-[60vw] z-20 bg-white h-full top-[80px] text-black px-5 fixed transition-all duration-300 right-0 ${
            isMenuOpen
              ? 'right-0 opacity-100 z-[101]'
              : '-right-full opacity-0 pointer-events-none'
          }`}
        >
          <NavbarLinks direction="col" extraStyles="justify-left" />
        </nav>
      </div>
    </div>
  );
};

export default MobileNav;
