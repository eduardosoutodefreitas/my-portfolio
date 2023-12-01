import React from 'react';
import { BiMessageRoundedDetail } from 'react-icons/bi';
import Button from '../Button/Button';
import NavbarLinks from './NavbarLinks';

const DesktopNav = () => {
  return (
    <>
      <nav className="hidden md:block">
        <NavbarLinks direction="row" extraStyles="items-center" />
      </nav>
      <div className="hidden md:block">
        <Button>
          <BiMessageRoundedDetail size={20} /> Entre em contato
        </Button>
      </div>
    </>
  );
};

export default DesktopNav;
