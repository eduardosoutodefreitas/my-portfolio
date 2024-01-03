'use client';
import React from 'react';

import { useDisclosure } from '@nextui-org/react';
import ProjectModal from './ProjectModal';
import { TypeProjectFields } from '../../../../../types/contentful';

interface ModalTriggerProps {
  children: React.ReactNode;
  extraStyles?: string;
  project: TypeProjectFields;
}
const ModalTrigger = ({
  children,
  extraStyles = '',
  project,
}: ModalTriggerProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <div className={`cursor-pointer ${extraStyles}`} onClick={onOpen}>
        {children}
      </div>
      <ProjectModal project={project} isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default ModalTrigger;
