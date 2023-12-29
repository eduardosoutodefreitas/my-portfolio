interface ProjectStackProps {
  techStack: string[];
}

const ProjectStack = ({ techStack }: ProjectStackProps) => {
  return (
    <div className="flex items-center gap-2 flex-wrap">
      {techStack.map((tech) => (
        <div
          key={tech}
          className="text-primaryBlack bg-default-200 font-medium py-1 px-3 rounded-lg text-xs"
        >
          {tech}
        </div>
      ))}
    </div>
  );
};

export default ProjectStack;
