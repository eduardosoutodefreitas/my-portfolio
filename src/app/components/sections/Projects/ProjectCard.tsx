import ProjectPicture from './ProjectPictures';
import { TypeProjectFields } from '../../../../../types/contentful';
import ProjectInfos from './ProjectInfos';
import ProjectStack from './ProjectStack';

interface ProjectCardProps {
  project: TypeProjectFields;
}
const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="flex flex-col md:flex-row md:justify-center gap-10 lg:gap-16 mb-16 md:mb-20 w-full">
      <ProjectPicture
        projectUrl={project.projectUrl}
        projectHighlight={project.projectHighlight}
      />
      <ProjectInfos
        techStack={project.techStack}
        repositoryUrl={project.repositoryUrl}
        title={project.name}
        description={project.description}
      />
    </div>
  );
};

export default ProjectCard;
