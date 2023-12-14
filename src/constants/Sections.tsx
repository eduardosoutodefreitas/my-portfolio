import {
  IoHome,
  IoPerson,
  IoCodeSlash,
  IoChatboxEllipses,
} from 'react-icons/io5';

const sections = [
  { id: '#home', label: 'Início', icon: <IoHome /> },
  { id: '#about', label: 'Sobre mim', icon: <IoPerson /> },
  { id: '#projects', label: 'Projetos', icon: <IoCodeSlash /> },
  { id: '#contact', label: 'Contato', icon: <IoChatboxEllipses /> },
];

export default sections;
