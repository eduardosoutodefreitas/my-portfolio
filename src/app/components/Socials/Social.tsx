interface SocialProps {
  link: string;
  icon: React.ReactNode;
}
const Social = ({ icon, link }: SocialProps) => {
  return (
    <a
      className="hover:text-specialOrange transition-colors duration-300"
      href={link}
    >
      {icon}
    </a>
  );
};

export default Social;
