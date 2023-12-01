import AvailabilityCard from './AvailabilityCard';
import Button from '../../Button/Button';
import Socials from '../../Socials';

const HeroCta = () => {
  return (
    <div className="max-w-4xl flex flex-col items-center md:items-start text-center md:text-start gap-5">
      <AvailabilityCard />
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-black">
        Eduardo Souto <br />
        <span className="font-extrabold bg-gradient-to-r from-primaryBlack/95 to-slate-700 bg-clip-text text-transparent text-3xl md:text-5xl lg:text-6xl ">
          Especialista Front End
        </span>
      </h1>
      <p className="text-lightGray max-w-2xl lg:text-lg">
        Sou um desenvolvedor front-end apaixonado por traduzir ideias em
        experiências digitais envolventes. Especializado em criar aplicações
        intuitivas e úteis, meu foco está em resolver problemas do mundo real e
        desenvolver sites que fazem empresas brilharem online.
      </p>
      <div className="flex items-center md:justify-start gap-5 mb-8">
        <Button>Contratar</Button>
        <a
          href="#projects"
          className="hover:-translate-y-1 duration-300 transition-all flex items-center gap-2 font-semibold lg:text-lg"
        >
          Ver projetos
        </a>
      </div>
      <Socials />
    </div>
  );
};

export default HeroCta;
