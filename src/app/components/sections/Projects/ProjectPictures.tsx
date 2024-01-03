import { Asset } from 'contentful';
import Image from 'next/image';
import ModalTrigger from './ModalTrigger';
import { TypeProjectFields } from '../../../../../types/contentful';
interface ProjectPictureProps {
  project: TypeProjectFields;
}

const ProjectPicture = ({ project }: ProjectPictureProps) => {
  return (
    <ModalTrigger
      project={project}
      extraStyles="w-full md:w-1/2 md:min-w-[400px]"
    >
      <Image
        src={`https:${project.projectHighlight.fields.file?.url}`}
        height={948}
        width={1920}
        className="w-full h-auto rounded-md shadow-md"
        alt={project.projectHighlight.fields.title as string}
      />
    </ModalTrigger>
  );
};

export default ProjectPicture;
