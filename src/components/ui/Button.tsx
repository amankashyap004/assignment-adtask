import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, className }) => {
  return (
    <button
      type="submit"
      className={`relative flex justify-center items-center px-4 py-2 min-w-28 rounded-full bg-[#7687B5]/30 text-[#E2E8F8] border border-[#7687B5] overflow-hidden ${className}`}
    >
      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 transform h-3 w-2/5 blur-lg bg-[#E6EDFF] rounded-full" />
      {children}
    </button>
  );
};

export default Button;
