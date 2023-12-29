import React from 'react';
import ContactForm from './ContactForm';
import SectionHeading from '../../SectionHeading/SectionHeading';
import socials from '@/constants/Socials';
import Balancer from 'react-wrap-balancer';
import ContactSocial from './ContactSocial';

const Contact = () => {
  return (
    <section
      id="contact"
      className="container mx-auto py-20 md:py-36 px-5 g:py-0 md:px-8 lg:px-14"
    >
      <SectionHeading subtitle="entre em" title="Contato" />

      <p className="text-center max-w-sm md:max-w-md min-w-[270px] mx-auto text-lightGray mt-5 md:text-xl">
        <Balancer>
          Tem uma proposta ou ideia para mim? Entre em contato! Buscarei
          responder rapidamente.
        </Balancer>
      </p>
      <div className="max-w-2xl w-1/2 min-w-[270px] mx-auto grid grid-cols-2 grid-rows-2 place-items-start place-content-between gap-x-2 xs:gap-x-5 lg:gap-x-14 gap-y-5 my-10">
        {socials.map((social, index) => (
          <ContactSocial
            key={social.name}
            social={social}
            align={index % 2 === 0 ? 'start' : 'end'}
          />
        ))}
      </div>
      <ContactForm />
    </section>
  );
};

export default Contact;
