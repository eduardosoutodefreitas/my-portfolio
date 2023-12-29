'use client';
import { Button } from '@nextui-org/react';
import { IoChatboxEllipses } from 'react-icons/io5';

const ContactButton = () => {
  const handleContactButtonClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const contactSectionPosition = contactSection.offsetTop;
      window.scrollTo({
        top: contactSectionPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <Button
      onClick={handleContactButtonClick}
      className="bg-primaryBlack text-xs xs:text-sm sm:text-base hover:bg-specialOrange transition-all duration-250 text-white md:text-lg font-medium"
      startContent={<IoChatboxEllipses size={20} />}
      radius="sm"
    >
      Entre em contato!
    </Button>
  );
};

export default ContactButton;
