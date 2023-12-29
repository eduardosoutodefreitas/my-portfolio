import { IoMailOutline } from 'react-icons/io5';
import { PiDiscordLogo, PiLinkedinLogo } from 'react-icons/pi';
import { VscGithubAlt } from 'react-icons/vsc';
const socials: Social[] = [
  {
    name: 'dev.edufreitas',
    url: 'mailto:dev.edufreitas@gmail.com',
    icon: <IoMailOutline className="text-2xl xs:text-3xl" />,
  },
  {
    name: '@dev_freitas',
    url: '#',
    icon: <PiDiscordLogo className="text-2xl xs:text-3xl" />,
  },
  {
    name: 'eduardo-souto',
    url: 'https://linkedin.com/in/eduardo-souto',
    icon: <PiLinkedinLogo className="text-2xl xs:text-3xl" />,
  },
  {
    name: 'eduardosouto',
    url: 'https://github.com/eduardosoutodefreitas',
    icon: <VscGithubAlt className="text-2xl xs:text-3xl p-0" />,
  },
];
export default socials;
