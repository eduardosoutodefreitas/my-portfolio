import { client } from '@/lib/contentful/client';
import { TypeProjectFields } from '../../../../../types/contentful';
import Image from 'next/image';
import ProjectCard from './ProjectCard';

const ProjectsList = async () => {
  const response = await client.getEntries({ content_type: 'project' });
  const projects: TypeProjectFields[] = response.items.map(
    (item: any) => item.fields,
  );

  return (
    <div className="w-full mt-10">
      {projects.map((project) => (
        <ProjectCard project={project} key={project.name} />
      ))}
    </div>
  );
};

export default ProjectsList;
