import React from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from '@nextui-org/react';
import { IoChatboxEllipses } from 'react-icons/io5';

import Logo from './Logo';
import Button from '../Button/Button';
import DesktopNav from './DesktopNav';

export default function Header() {
  return (
    <Navbar
      className="backdrop-blur-sm bg-transparent py-2"
      shouldHideOnScroll
      maxWidth="2xl"
    >
      <NavbarBrand>
        <Logo />
      </NavbarBrand>
      <DesktopNav />
      <NavbarContent justify="end">
        <NavbarItem>
          <Button extraStyles="flex items-center gap-2">
            <IoChatboxEllipses size={20} /> Entre em contato!
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
