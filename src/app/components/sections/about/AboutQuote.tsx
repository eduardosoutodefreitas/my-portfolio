import React from 'react';
import Image from 'next/image';
import Balancer from 'react-wrap-balancer';
import { Avatar } from '@nextui-org/react';

const AboutQuote = () => {
  return (
    <figure className="max-w-xl mx-auto text-center mt-5 mb-10">
      <svg
        className="w-10 h-10 mx-auto mb-3 text-specialOrange"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 18 14"
      >
        <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
      </svg>
      <blockquote>
        <p className="italic text-lightGray">
          <Balancer>
            Não se entregue aos sonhos de ter o que você não tem, mas calcule a
            principal das bênçãos que você possui, e então, felizmente,
            lembre-se de como você ansiaria por elas se não fossem suas.
          </Balancer>
        </p>
      </blockquote>
      <figcaption className="flex items-center justify-center mt-6 space-x-3">
        <Avatar
          isBordered
          size="lg"
          color="primary"
          src="/assets/images/marcusStatue.jpeg"
        />
        <div className="flex items-center divide-x-2 divide-lightGray">
          <cite className="pr-3 text-sm xs:text-base font-semibold dark:text-white">
            Marco Aurélio
          </cite>
          <cite className="pl-3 text-xs xs:text-sm text-lightGray">
            Ex-imperador romano
          </cite>
        </div>
      </figcaption>
    </figure>
  );
};

export default AboutQuote;
