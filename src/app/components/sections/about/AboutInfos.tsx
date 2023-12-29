'use client';
import { Accordion, AccordionItem } from '@nextui-org/react';
import { PiStudent } from 'react-icons/pi';
import { BsPersonVcard } from 'react-icons/bs';
import { FaTools, FaBasketballBall } from 'react-icons/fa';

import React from 'react';
import Balancer from 'react-wrap-balancer';

const AboutInfos = () => {
  const itemClasses = {
    title: 'font-medium text-sm xs:text-base',
    trigger:
      'px-2 py-0 data-[hover=true]:bg-default-100 rounded-lg h-14 flex items-center',
    indicator: 'text-medium',
    content: 'text-sm px-2',
  };
  return (
    <Accordion
      className="w-full md:max-w-lg md:w-1/2 text-sm md:text-base"
      itemClasses={itemClasses}
    >
      <AccordionItem
        startContent={
          <BsPersonVcard size={25} className="text-specialOrange" />
        }
        key="1"
        aria-label="Um pouquinho sobre mim"
        title="Um pouquinho sobre mim"
      >
        <p>
          <Balancer>
            Eu me chamo <b>Eduardo Souto de Freitas</b> e moro no Rio de
            Janeiro, em Maricá. Sou apaixonado por cachorros e tenho 3 pets
            maravilhosos (um deles até aprendeu a abrir portas).
          </Balancer>
        </p>
        <br />
        <p>
          <Balancer>
            Antes de começar minha jornada com programação, eu era um
            concurseiro focado no concurso da ESA. Em outubro de 2021, realizei
            a prova e <b>fui aprovado</b> e classificado. Objetivo atingido,
            vitória, mas não era o que eu de fato queria.
          </Balancer>
        </p>
        <br />
        <p>
          <Balancer>
            Desde então, comecei a estudar desenvolvimento web e a fazer o que
            eu queria, o que eu realmente tinha vontade de fazer: uma atividade
            que, de fato, me faz sentir realizado, solucionando problemas de
            forma inovadora e criativa, transformando ideias abstratas em
            realidade por meio de código.
          </Balancer>
        </p>
      </AccordionItem>
      <AccordionItem
        startContent={
          <FaBasketballBall size={25} className="text-specialOrange" />
        }
        key="2"
        aria-label="Meus hobbies e gostos"
        title="Meus hobbies e gostos"
      >
        <p>
          <Balancer>
            Eu sou apaixonado por esportes! Quando mais novo, mesmo tendo quase
            1 metro e meio, me encantei pelo <b>basquete</b>. O tempo passou e,
            por mais que eu não seja tão alto, o basquete continua sendo meu
            esporte favorito.
          </Balancer>
        </p>
        <br />
        <p>
          <Balancer>
            Além das quadras, meus gostos giram em torno de coisas simples e
            magníficas, sobretudo atividades que envolvam contato com a{' '}
            <b>natureza</b>, como trilhas e tardes na praia.
          </Balancer>
        </p>
        <br />
        <p>
          <Balancer>
            Por fim, vale mencionar que, durante a pandemia, comecei a me
            interessar por filosofia e a estudar a ciência por trás dos hábitos.
            Nesses campos, meu livro favorito é{' '}
            <b>
              <i>Hábitos Atômicos</i>
            </b>
            , de James Clear, e a filosofia pela qual mais me interesso é a{' '}
            <b>Estóica</b>, a qual deu origem ao tema do meu portfólio.
          </Balancer>
        </p>
      </AccordionItem>
      <AccordionItem
        startContent={<FaTools size={25} className="text-specialOrange" />}
        key="3"
        aria-label="Skills e Ferramentas"
        title="Skills e Ferramentas"
      >
        <div className="flex flex-col gap-3">
          <div>
            <p className="font-semibold mb-1">🚀 Linguagens:</p>
            HTML, CSS, JavaScript, TypeScript, SQL
          </div>
          <div>
            <p className="font-semibold mb-1">⚙️ Backend e Banco de Dados:</p>
            Node.js, Express, Prisma, PostgreSQL, Upstash, Supabase, Firebase
          </div>

          <div>
            <p className="font-semibold mb-1">🌐 Frameworks e Bibliotecas:</p>
            React.js, Next.js
          </div>

          <div>
            <p className="font-semibold mb-1">🛠️ Ferramentas de Design:</p>
            Figma
          </div>

          <div>
            <p className="font-semibold mb-1">🔧 Controle de Versionamento:</p>
            Git
          </div>

          <div>
            <p className="font-semibold mb-1">
              📚 Princípios de Desenvolvimento:
            </p>
            SOLID Principles
          </div>

          <div>
            <p className="font-semibold mb-1">🔄 Metodologia Ágil:</p>
            Scrum, Kanban
          </div>
        </div>
      </AccordionItem>
      <AccordionItem
        startContent={<PiStudent size={25} className="text-specialOrange" />}
        key="4"
        aria-label="Formação e idiomas"
        title="Formação e idiomas"
      >
        <div className="mb-4">
          <p className="font-semibold mb-1">🎓 Formação Acadêmica:</p>
          <ul>
            <li>
              Curso de Análise e Desenvolvimento de Sistemas na Universidade
              Veiga de Almeida.
            </li>
            <li>
              Início em maio de 2023 e previsão de conclusão em dezembro de
              2025.
            </li>
          </ul>
        </div>

        <div>
          <p className="font-semibold mb-1">🌍 Idiomas:</p>
          <ul>
            <li>Inglês: Avançado</li>
            <li>Espanhol: Básico</li>
          </ul>
        </div>
      </AccordionItem>
    </Accordion>
  );
};

export default AboutInfos;
