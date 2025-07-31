"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import HamburgerButton from "../ui/HamburgerButton";
import { LogIn, UserRoundPlus, LogOut } from "lucide-react";
import { useSession, signIn, signOut } from "next-auth/react";
import LandingMobileMenu from "./LandingMobileMenu";
import DashboardMobileMenu from "./DashboardMobileMenu";
const Header = () => {
  const { data: session, status } = useSession();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };
  const closeMenu = () => {
    setIsOpen(false);
  };

  const isDashboardPage = pathname === "/dashboard";
  const isLandingPage = pathname === "/";

  return (
    <nav style={{ fontFamily: "var(--font-montserrat)" }} className="relative">
      <div className="  py-3 shadow-sm ">
        <div className="max-w-[1150px] mx-auto flex justify-between">
          {" "}
          <div className="flex items-center font-bold text-md text-slate-600 ml-3 mt-1">
            <Link href="/">
              <span className="text-blue-500">!</span>
              <span className="text-blue-500">C</span>ode
              <span className="text-green-500">S</span>aver
            </Link>
          </div>
          {/*Middle */}
          <div className="hidden md:flex flex-1 justify-center max-w-md mx-4 mt-2">
            {/* Add search bar here if needed */}
            {!isDashboardPage && (
              <ul className="flex gap-8 text-sm">
                <li className="cursor-pointer hover:text-blue-600 ">
                  <Link href="/#features">Features</Link>
                </li>
                <li className="cursor-pointer hover:text-blue-600">
                  <Link href="/#language">Language</Link>
                </li>
                <li className="cursor-pointer hover:text-blue-600">
                  <Link href="/#pricing">Pricing</Link>
                </li>
              </ul>
            )}
          </div>
          {/*Right Side */}
          <div className="flex items-center">
            {/* Desktop menu */}
            {session ? (
              <div className="hidden md:flex items-center space-x-4">
                <Link
                  href="/"
                  className="flex items-center gap-2 px-3 py-2 text-sm text-slate-600 hover:text-blue-600 hover:bg-white rounded-md transition-colors"
                  onClick={() => signOut({ callbackUrl: "/", redirect: true })}
                >
                  <LogOut size={18} /> ({session.user?.name})
                </Link>
              </div>
            ) : (
              <div className="hidden md:flex items-center">
                <Link
                  href="/login"
                  className="flex items-center gap-1 px-2 py-2 text-sm text-slate-600 hover:text-blue-600 hover:bg-white rounded-md transition-colors"
                >
                  <UserRoundPlus size={18} />
                  Get Started
                </Link>
                <Link
                  href="/login"
                  className="flex items-center gap-2 px-2 py-2 text-sm text-slate-600 hover:text-blue-600 hover:bg-white rounded-md transition-colors"
                >
                  <LogIn size={18} />
                  Login
                </Link>
              </div>
            )}
            {/* Mobile Menu */}
            {/* Mobile hamburger */}
            <div className="md:hidden cursor-pointer mr-2 relative">
              <HamburgerButton isOpen={isOpen} onToggle={toggleOpen} />
            </div>
          </div>
        </div>
      </div>

      {isOpen && isDashboardPage && (
        <div
          className="fixed inset-0 z-30"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
          onClick={closeMenu}
        />
      )}

      {/* Mobile Dropdown with slidedown animation */}

      {isLandingPage && (
        <LandingMobileMenu isOpen={isOpen} closeMenu={closeMenu} />
      )}

      {isDashboardPage && (
        <DashboardMobileMenu
          isOpen={isOpen}
          closeMenu={closeMenu}
          session={session}
        />
      )}
    </nav>
  );
};

export default Header;
