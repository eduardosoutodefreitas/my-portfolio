import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  extraStyles?: string;
}

const Button = ({ children, extraStyles, ...props }: ButtonProps) => {
  return (
    <button
      className={`px-5 py-1 text-sm md:text-base lg:text-lg flex items-center gap-3 rounded-md bg-primaryBlack text-white font-semibold 
      hover:-translate-y-1 transition-all duration-250 ${extraStyles}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
