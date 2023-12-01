import DesktopNav from './DesktopNav';
import Logo from './Logo';
import MobileNav from './MobileNav';

const Header = () => {
  return (
    <header className="flex justify-between items-center px-5 h-[80px] md:px-10 lg:px-16 z-30 relative">
      <Logo />
      <DesktopNav />
      <MobileNav />
    </header>
  );
};

export default Header;
