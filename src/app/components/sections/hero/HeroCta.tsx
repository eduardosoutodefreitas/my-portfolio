import AvailabilityCard from './AvailabilityCard';
import Button from '../../Button/Button';
import Balancer from 'react-wrap-balancer';

const HeroCta = () => {
  return (
    <div className="max-w-4xl flex flex-col items-center md:items-start text-center md:text-start gap-5">
      <AvailabilityCard />
      <h1 className="text-4xl lg:text-6xl xl:text-7xl font-black leading-3 mt-3">
        Eduardo Souto
      </h1>
      <h2 className="font-extrabold bg-gradient-to-r from-primaryBlack/95 to-slate-700 bg-clip-text text-transparent text-2xl lg:text-5xl xl:text-6xl">
        Desenvolvedor Front End
      </h2>
      <p className="text-lightGray max-w-md md:max-w-xl text-sm md:text-base lg:text-lg">
        <Balancer>
          Sou um desenvolvedor front-end apaixonado por traduzir ideias em
          experiências digitais envolventes. Especializado em criar aplicações
          intuitivas e úteis, meu foco está em resolver problemas do mundo real
          e desenvolver sites que fazem empresas brilharem online.
        </Balancer>
      </p>
      <div className="flex items-center md:justify-start gap-5 mb-8">
        <a
          href="#contact"
          className="bg-primaryBlack py-2 px-5 rounded-md text-xs flex items-center gap-3 xs:text-sm sm:text-base hover:bg-specialOrange hover:-translate-y-1 transition-all duration-250 text-white md:text-lg font-medium"
        >
          Contactar
        </a>
        <a
          href="#projects"
          className="hover:-translate-y-1 duration-300 transition-all flex items-center gap-2 font-semibold lg:text-lg"
        >
          Ver projetos
        </a>
      </div>
    </div>
  );
};

export default HeroCta;
