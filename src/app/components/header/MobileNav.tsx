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
      {isMenuOpen && (
        <div className="flex h-screen w-screen fixed top-[80px] right-0 left-0">
          <div
            className="bg-black/20 w-[40vw] cursor-pointer"
            onClick={handleMenuToggle}
          />

          <nav className="w-[60vw] z-10 bg-white text-black px-5">
            <NavbarLinks direction="col" extraStyles="justify-left" />
          </nav>
        </div>
      )}
    </div>
  );
};

export default MobileNav;
