import React from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from '@nextui-org/react';

import Logo from './Logo';
import ContactButton from './ContactButton';

export default function Header() {
  return (
    <Navbar
      className="bg-transparent py-2 absolute top-0 left-0 right-0"
      shouldHideOnScroll
      isBlurred={false}
      maxWidth="2xl"
    >
      <NavbarBrand>
        <Logo />
      </NavbarBrand>
      <NavbarContent justify="end">
        <NavbarItem>
          <ContactButton />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
