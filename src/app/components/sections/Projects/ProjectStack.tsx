import { Chip } from '@nextui-org/react';

interface ProjectStackProps {
  techStack: string[];
}

const ProjectStack = ({ techStack }: ProjectStackProps) => {
  return (
    <div className="flex items-center gap-2 flex-wrap">
      {techStack.map((tech) => (
        <Chip
          key={tech}
          className="text-white bg-default-400"
          radius="sm"
          variant="light"
        >
          {tech}
        </Chip>
      ))}
    </div>
  );
};

export default ProjectStack;
