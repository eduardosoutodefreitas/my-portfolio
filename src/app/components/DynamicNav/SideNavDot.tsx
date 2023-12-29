import { Tooltip } from '@nextui-org/react';

interface SideNavDotProps {
  id: string;
  label: string;
  activeSection: string;
  icon: React.ReactNode;
}

const SideNavDot = ({ activeSection, icon, label, id }: SideNavDotProps) => {
  return (
    <Tooltip
      showArrow={true}
      placement="left"
      content={label}
      className="text-white bg-gradient-to-r from-primaryBlack/95 to-slate-700"
      classNames={{
        base: [
          // arrow color
          'before:bg-slate-700',
        ],
      }}
    >
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
        className={`rounded-full p-3 h-10 w-10 transition-all border border-primaryBlack text-primaryBlack duration-250 grid place-items-center  ${
          id === activeSection
            ? 'bg-orange-600 border-specialOrange text-white #962B0C'
            : 'bg-white'
        }`}
      >
        {icon}
      </button>
    </Tooltip>
  );
};

export default SideNavDot;
