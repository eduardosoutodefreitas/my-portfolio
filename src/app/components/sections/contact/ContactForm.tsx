'use client';
import { Button, Input, Textarea } from '@nextui-org/react';
import React from 'react';
import { IoChatboxEllipses, IoMail, IoPerson, IoSend } from 'react-icons/io5';
import { zodResolver } from '@hookform/resolvers/zod';
import { sendMessageValidator, FormData } from '@/lib/validations/schema';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { sendEmail } from '@/lib/email/sendEmail';

const ContactForm = () => {
  const {
    formState: { errors, isSubmitting },
    handleSubmit,
    control,
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(sendMessageValidator),
    mode: 'onBlur',
    reValidateMode: 'onBlur',
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  const processForm: SubmitHandler<FormData> = async (data) => {
    const result = await sendEmail(data);
    if (result === 'OK') {
      reset();
      toast.success(`Your email was sent successfully!`);
    } else {
      toast.error('Something went wrong!');
    }
  };
  return (
    <form
      onSubmit={handleSubmit(processForm)}
      className="w-1/2 max-w-2xl lg:text-lg min-w-[270px] mx-auto space-y-4"
    >
      <Controller
        name="name"
        control={control}
        render={({ field }) => (
          <Input
            errorMessage={errors.name?.message}
            label="Nome"
            variant="underlined"
            color="primary"
            placeholder="Seu nome"
            startContent={<IoPerson />}
            {...field}
          />
        )}
      />
      <Controller
        name="email"
        control={control}
        render={({ field }) => (
          <Input
            errorMessage={errors.email?.message}
            label="Email"
            color="primary"
            variant="underlined"
            placeholder="exemplo@exemplo.com"
            startContent={<IoMail />}
            {...field}
          />
        )}
      />
      <Controller
        name="message"
        control={control}
        render={({ field }) => (
          <Textarea
            errorMessage={errors.message?.message}
            startContent={<IoChatboxEllipses />}
            label="Mensagem"
            placeholder="Sua mensagem"
            color="primary"
            variant="underlined"
            {...field}
          />
        )}
      />
      <Button
        isLoading={isSubmitting}
        spinnerPlacement="end"
        type="submit"
        className="group w-full bg-primaryBlack hover:bg-specialOrange transition-all duration-250 text-white md:text-lg font-medium"
      >
        {!isSubmitting && <span>Enviar mensagem</span>}
      </Button>
    </form>
  );
};

export default ContactForm;
