import { Asset } from 'contentful';
import Image from 'next/image';
import Link from 'next/link';
interface ProjectPictureProps {
  projectHighlight: Asset;
  projectUrl: string;
}

const ProjectPicture = ({
  projectHighlight,
  projectUrl,
}: ProjectPictureProps) => {
  return (
    <Link href={projectUrl} className="group w-full md:w-1/2 md:min-w-[400px]">
      <Image
        src={`https:${projectHighlight.fields.file?.url}`}
        height={948}
        width={1920}
        className="w-full h-auto rounded-md shadow-md transition-transform duration-250 scale-100 group-hover:scale-[1.01]"
        alt={projectHighlight.fields.title as string}
      />
    </Link>
  );
};

export default ProjectPicture;
