interface NavbarLinksProps {
  direction: 'row' | 'col';
  extraStyles?: string;
}
const NavbarLinks = ({ direction, extraStyles }: NavbarLinksProps) => {
  return (
    <ul className={`flex gap-8 lg:text-lg flex-${direction} ${extraStyles}`}>
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="/">Sobre mim</a>
      </li>
      <li>
        <a href="/">Projetos</a>
      </li>
      <li>
        <a href="/">Contato</a>
      </li>
    </ul>
  );
};

export default NavbarLinks;
