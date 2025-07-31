import React from "react";
import Link from "next/link";
import { LogIn } from "lucide-react";
interface LandingMobileMenuProps {
  isOpen: boolean;
  closeMenu: () => void;
}

const LandingMobileMenu = ({ isOpen, closeMenu }: LandingMobileMenuProps) => {
  return (
    <nav
      className={`
          md:hidden overflow-hidden transition-all duration-300 ease-in-out 
          absolute top-full left-0 right-0 bg-white border-b border-gray-200
          ${isOpen ? "max-h-96 opacity-100 z-50" : "max-h-0 opacity-0"}
        `}
      role="navigation"
      aria-label="Landing mobile menu"
    >
      <ul className="py-2 space-y-1 px-2">
        <li>
          <Link
            href="/#features"
            className="focus:bg-gray-300 focus:text-blue-400 flex items-center gap-2 px-3 py-2 text-sm text-slate-600 hover:text-blue-600 hover:bg-white rounded-md transition-colors"
            onClick={closeMenu}
          >
            Features
          </Link>
        </li>
        <li>
          <Link
            href="/#language"
            className="flex items-center gap-2 px-3 py-2 text-sm text-slate-600 hover:text-blue-600 hover:bg-white rounded-md transition-colors"
            onClick={closeMenu}
          >
            Language
          </Link>
        </li>
        <li>
          <Link
            href="/#pricing"
            className="flex items-center gap-2 px-3 py-2 text-sm text-slate-600 hover:text-blue-600 hover:bg-white rounded-md transition-colors"
            onClick={closeMenu}
          >
            Pricing
          </Link>
        </li>

        <li>
          <Link
            href="/login"
            className="flex items-center gap-2 px-3 py-2 text-sm text-slate-600 hover:text-blue-600 hover:bg-white rounded-md transition-colors"
            onClick={closeMenu}
          >
            <LogIn size={18} className="md:hidden" />
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default LandingMobileMenu;
