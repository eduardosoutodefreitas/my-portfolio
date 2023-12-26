import sections from '@/constants/Sections';
import { NavbarContent, NavbarItem } from '@nextui-org/react';
import Link from 'next/link';

const DesktopNav = () => {
  return (
    <NavbarContent className="hidden md:flex gap-5" justify="center">
      {sections.map((section) => (
        <NavbarItem key={section.id}>
          <Link color="foreground" href={section.id}>
            {section.label}
          </Link>
        </NavbarItem>
      ))}
    </NavbarContent>
  );
};

export default DesktopNav;
