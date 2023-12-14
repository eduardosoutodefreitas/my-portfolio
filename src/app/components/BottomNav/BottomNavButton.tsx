interface BottomNavButtonProps {
  id: string;
  label: string;
  activeSection: string;
  icon: React.ReactNode;
}

const BottomNavButton = ({
  activeSection,
  id,
  icon,
  label,
}: BottomNavButtonProps) => {
  return (
    <button
      key={id}
      onClick={() => {
        const section = document.querySelector(id);
        if (section) {
          section.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      }}
      className={`rounded-full flex flex-col items-center gap-1 text-white p-2 transition-all duration-250 ${
        id === activeSection ? 'text-orange-600 text-base' : 'text-sm'
      }`}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
};

export default BottomNavButton;
