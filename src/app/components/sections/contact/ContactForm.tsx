import { Input, Textarea } from '@nextui-org/react';
import React from 'react';
import { IoChatboxEllipses, IoMail, IoPerson, IoSend } from 'react-icons/io5';
import Button from '../../Button/Button';

const ContactForm = () => {
  return (
    <form className="w-1/2 max-w-2xl lg:text-lg min-w-[270px] mx-auto space-y-2">
      <Input
        label="Nome"
        variant="underlined"
        color="primary"
        className="outline-black "
        placeholder="Seu nome"
        startContent={<IoPerson />}
      />

      <Input
        label="Email"
        color="primary"
        variant="underlined"
        placeholder="exemplo@exemplo.com"
        startContent={<IoMail />}
      />
      <Textarea
        startContent={<IoChatboxEllipses />}
        label="Mensagem"
        placeholder="Sua mensagem"
        color="primary"
        variant="underlined"
      />
      {/* <Button className="w-full" color="primary" endContent={<IoSend />}>
        Enviar mensagem
      </Button> */}
      <Button extraStyles="w-full justify-center hover:translate-y-0">
        <span>Enviar mensagem</span>
        <IoSend />
      </Button>
    </form>
  );
};

export default ContactForm;
