import React from "react";

interface HamburgerButtonProps {
  isOpen: boolean;
  onToggle: () => void;
  className?: string;
}
const HamburgerButton = ({
  isOpen,
  onToggle,
  className = "",
}: HamburgerButtonProps) => {
  return (
    <button
      onClick={onToggle}
      className={`
        relative p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
        transition-colors duration-200 ease-in-out bg-transparent hover:bg-gray-100
        ${className}
      `}
      type="button"
    >
      <div className="w-5 h-4 flex flex-col justify-between">
        <div
          className={`
            h-0.5 bg-gray-800 rounded-full
            transition-all duration-300 ease-in-out origin-center
            ${isOpen ? "rotate-45 translate-y-1.5" : "rotate-0 translate-y-0"}
          `}
        />
        <div
          className={`
            h-0.5 bg-gray-800 rounded-full
            transition-all duration-300 ease-in-out
            ${isOpen ? "opacity-0 scale-0" : "opacity-100 scale-100"}
          `}
        />
        <div
          className={`
            h-0.5 bg-gray-800 rounded-full
            transition-all duration-300 ease-in-out origin-center
            ${isOpen ? "-rotate-45 -translate-y-1.5" : "rotate-0 translate-y-0"}
          `}
        />
      </div>
    </button>
  );
};

export default HamburgerButton;
