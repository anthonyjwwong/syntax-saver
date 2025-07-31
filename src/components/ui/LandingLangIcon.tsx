import React from "react";
import { LucideIcon } from "lucide-react";

interface LandingLangIconProps {
  language: string;
  icon: string | LucideIcon;
}

const LandingLangIcon = ({ language, icon }: LandingLangIconProps) => {
  const renderIcon = () => {
    if (typeof icon === "string") {
      return icon;
    }
    const Icon = icon;
    return <Icon size={12} />;
  };

  return (
    <div className="border py-5 px-3 bg-gray-100 border-gray-100 flex rounded-md">
      <div className="rounded-md py-1.5 px-1.5  bg-indigo-300 mr-2 flex items-center justify-center">
        <div className="h-4 w-4 text-[10px] font-bold text-white flex items-center justify-center">
          {renderIcon()}
        </div>
      </div>
      <p className="font-semibold mt-0.5">{language}</p>
    </div>
  );
};

export default LandingLangIcon;
