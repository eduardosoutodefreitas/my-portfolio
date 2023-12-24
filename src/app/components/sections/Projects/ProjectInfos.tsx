import Link from 'next/link';
import { MdArrowRightAlt } from 'react-icons/md';
import { VscGithub } from 'react-icons/vsc';
import ProjectStack from './ProjectStack';

interface ProjectInfosProps {
  title: string;
  description: string;
  repositoryUrl?: string;
  techStack: string[];
}
const ProjectInfos = ({
  title,
  description,
  repositoryUrl,
  techStack,
}: ProjectInfosProps) => {
  return (
    <div className="max-w-xl self-center">
      <div className="mb-5 lg:mb-10">
        <h3 className="font-bold mb-1 text-2xl">{title}</h3>
        <ProjectStack techStack={techStack} />
        <p className="line-clamp-5 mt-3">{description}</p>
      </div>
      <div className="flex justify-between items-center w-full">
        <Link href="" className="flex items-center gap-3 group font-semibold">
          Ler mais
          <MdArrowRightAlt
            size={22}
            className="group-hover:translate-x-1 transition-all duration-250"
          />
        </Link>
        {repositoryUrl && (
          <Link
            href={repositoryUrl}
            className="flex items-center font-semibold gap-3 group"
          >
            Github
            <VscGithub
              size={22}
              className="group-hover:-translate-y-1 transition duration-250"
            />
          </Link>
        )}
      </div>
    </div>
  );
};

export default ProjectInfos;
