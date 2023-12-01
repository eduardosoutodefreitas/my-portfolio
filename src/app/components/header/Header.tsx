import DesktopNav from './DesktopNav';
import Logo from './Logo';
import MobileNav from './MobileNav';

const Header = () => {
  return (
    <header className="flex justify-between items-center px-5 h-[80px] relative">
      <Logo />
      <DesktopNav />
      <MobileNav />
    </header>
  );
};

export default Header;
