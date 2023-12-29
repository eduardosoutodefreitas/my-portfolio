import React from 'react';
import ProjectsList from './ProjectsList';
import SectionHeading from '../../SectionHeading/SectionHeading';

const Projects = () => {
  return (
    <section
      id="projects"
      className="overflow-x-hidden container mx-auto px-5 py-20 md:py-36"
    >
      <SectionHeading title="Projetos" subtitle="meus melhores" />
      <ProjectsList />
    </section>
  );
};

export default Projects;
