'use client';
import React from 'react';
import {
  Modal,
  ModalContent,
  ModalBody,
  ModalHeader,
  Divider,
  ModalFooter,
} from '@nextui-org/react';
import { TypeProjectFields } from '../../../../../types/contentful';
import ProjectStack from './ProjectStack';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { VscGithub } from 'react-icons/vsc';
import Link from 'next/link';
import ModalSlider from './ModalSlider';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: TypeProjectFields;
}

const ProjectModal = ({ isOpen, onClose, project }: ProjectModalProps) => {
  return (
    <>
      <Modal
        scrollBehavior="inside"
        backdrop="blur"
        size={'3xl'}
        isOpen={isOpen}
        onClose={onClose}
        hideCloseButton
      >
        <ModalContent>
          <ModalHeader className="p-0 shadow-md">
            <ModalSlider projectImages={project.projectImages} />
          </ModalHeader>
          <ModalBody className="px-10 py-5">
            <h3 className="font-bold mt-1 text-2xl">{project.name}</h3>
            <ProjectStack techStack={project.techStack} />
            <p className="text-xs xs:text-sm mt-1">{project.description}</p>
            <Divider />
            <ModalFooter className="flex justify-between items-center w-full px-0">
              <Link
                href={project.projectUrl}
                className="flex items-center font-semibold gap-3 group text-specialOrange"
              >
                Projeto
                <FaExternalLinkAlt className="group-hover:translate-x-1 transition duration-250" />
              </Link>
              {project.repositoryUrl && (
                <Link
                  href={project.repositoryUrl}
                  className="flex items-center font-semibold gap-3 group"
                >
                  Github
                  <VscGithub
                    size={22}
                    className="group-hover:translate-x-1 transition duration-250"
                  />
                </Link>
              )}
            </ModalFooter>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ProjectModal;
