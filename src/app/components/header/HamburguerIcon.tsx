import React from 'react';

interface HamburguerIconProps {
  isMenuOpen?: boolean;
  onClick: () => void;
}

const HamburguerIcon = ({ isMenuOpen, onClick }: HamburguerIconProps) => {
  return (
    <button className="scale-125 flex flex-col items-center" onClick={onClick}>
      <div
        className={`w-7 h-[2.5px] bg-primaryBlack transform transition-all ease-in-out duration-150 my-[3px] rounded-sm ${
          isMenuOpen && 'rotate-45 translate-y-[8.5px]'
        }`}
      />
      <div
        className={`w-3 h-[2.5px] bg-primaryBlack self-end transform transition-all ease-in-out duration-150 my-[3px] rounded-sm ${
          isMenuOpen && 'opacity-0'
        }`}
      />
      <div
        className={`w-7 h-[2.5px] bg-primaryBlack transform transition-all ease-in-out duration-150 my-[3px] rounded-sm ${
          isMenuOpen && '-rotate-45 -translate-y-[8.5px]'
        }`}
      />
    </button>
  );
};

export default HamburguerIcon;
