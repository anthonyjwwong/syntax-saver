import React from "react";
import { LogOut } from "lucide-react";
import { signOut } from "next-auth/react";
import { Session } from "next-auth";
import { Code } from "lucide-react";

interface DashboardMobileMenuProps {
  isOpen: boolean;
  closeMenu: () => void;
  session: Session | null;
}

const DashboardMobileMenu = ({
  isOpen,
  closeMenu,
  session,
}: DashboardMobileMenuProps) => {
  const handleSignOut = () => {
    closeMenu();
    signOut({ callbackUrl: "/", redirect: true });
  };

  const getInitials = (fullName: string | null | undefined) => {
    if (!fullName) return "U";

    const names = fullName.trim().split(" ");
    if (names.length === 1) {
      // Just first name
      return names[0][0].toUpperCase();
    } else {
      // First + Last initial
      return (names[0][0] + names[names.length - 1][0]).toUpperCase();
    }
  };

  const initials = getInitials(session?.user?.name);

  return (
    <nav
      style={{
        fontFamily:
          'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      }}
      className={`
        md:hidden transition-all duration-300 ease-in-out 
        fixed top-16 right-3 bg-white border border-gray-200 rounded-lg shadow-lg
        w-96 max-w-[calc(100vw-2rem)] 
        ${
          isOpen
            ? "translate-x-0 opacity-100 z-50"
            : "translate-x-full opacity-0"
        }
        `}
      role="navigation"
      aria-label="Dashboard mobile menu"
    >
      {/* User profile  */}
      {session && (
        <div className="px-4 py-3 border-b border-gray-200">
          <div className="flex items-center gap-3 ">
            {/* Avatar with Initials */}
            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold text-sm">
              {initials}
            </div>
            <div>
              <p className="font-medium text-sm">{session.user?.name}</p>
              <p className="text-xs text-gray-500">{session.user?.email}</p>
            </div>
          </div>
        </div>
      )}
      <button className="text-sm px-4 border w-[90%] mx-auto block mt-3 bg-indigo-500 text-white py-2 rounded-lg">
        + New Snippet
      </button>
      <div className="px-4 mt-4 text-gray-600">
        {" "}
        {/* Overview */}
        <p className="text-sm text-gray-400 ">Overview</p>
        <ul className="py-1 px-1">
          <li className=" py-2 px-2 rounded-md bg-gray-50">All Snippet</li>
          <li className=" py-2 px-2  rounded-md">Favorites</li>
          <li className=" py-2 px-2  rounded-md">Recents</li>
        </ul>
        {/* Languages */}
        <p className="text-sm text-gray-400">Languages</p>
        <ul>
          <li className=" py-2 px-2  rounded-md">
            <span className="text-indigo-400 mr-3">JS</span>JavaScript
          </li>
          <li className="py-2 px-2 rounded-md">
            <span className="text-indigo-400 mr-3">PY</span>Python
          </li>
          <li className=" py-2 px-2  rounded-md">
            <span className="text-indigo-400 mr-3">TS</span>typescript
          </li>
          <li className=" py-2 px-2  rounded-md flex">
            <span className="text-indigo-400 mr-3 mt-0.5">
              <Code size={18} />
            </span>
            React
          </li>
        </ul>
        {/* Teams */}
        <p className="text-sm text-gray-400">Teams</p>
        <ul>
          <li className=" py-2 px-2  rounded-md">Me</li>
          <li className=" py-2 px-2  rounded-md">Team - Coming soon ...</li>
        </ul>
      </div>

      <button
        className="flex  text-sm px-4 border w-[90%] mx-auto mt-3 bg-red-400 text-white py-2 rounded-lg mb-8"
        onClick={handleSignOut}
      >
        <LogOut size={18} className="mr-2" />
        Logout
      </button>
    </nav>
  );
};

export default DashboardMobileMenu;
