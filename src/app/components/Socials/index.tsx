import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import Social from './Social';
interface SocialsProps {
  extraStyles?: string;
}
const Socials = ({ extraStyles }: SocialsProps) => {
  const socials: Social[] = [
    {
      url: 'hub.com/eduardosoutodefreitas',
      icon: <FaGithub size={38} />,
      name: 'Github',
    },
    {
      url: 'https://www.linkedin.com/in/eduardo-souto',
      icon: <FaLinkedin size={38} />,
      name: 'Linkedin',
    },
    {
      url: 'https://www.instagram.com/freitas.dev/',
      icon: <FaInstagram size={38} />,
      name: 'Instagram',
    },
  ];
  return (
    <div className={`flex item-center gap-16 ${extraStyles}`}>
      {socials.map((social) => (
        <Social key={social.name} icon={social.icon} link={social.url} />
      ))}
    </div>
  );
};

export default Socials;
