import React from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from '@nextui-org/react';

import Logo from './Logo';
import { IoChatboxEllipses } from 'react-icons/io5';

export default function Header() {
  return (
    <Navbar
      className="bg-transparent py-2 absolute top-0 left-0 right-0"
      isBlurred={false}
      maxWidth="2xl"
    >
      <NavbarBrand>
        <Logo />
      </NavbarBrand>
      <NavbarContent justify="end">
        <NavbarItem>
          <a
            href="#contact"
            className="bg-primaryBlack py-2 px-5 rounded-md  text-xs xs:text-sm sm:text-base flex items-center gap-3  hover:bg-specialOrange transition-all duration-250 text-white md:text-lg font-semibold"
          >
            <IoChatboxEllipses className="text-base md:text-lg" />
            Entre em contato!
          </a>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
