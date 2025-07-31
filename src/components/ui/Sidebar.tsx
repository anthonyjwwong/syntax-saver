import React from "react";
import { Code } from "lucide-react";
import SidebarItem from "./SidebarItem";
const Sidebar = () => {
  return (
    <aside
      className="hidden md:block md:w-64 dark:bg-slate-600 p-0 md:min-h-screen border-r border-gray-200 flex-shrink-0"
      aria-label="Sidebar"
    >
      <button className="text-sm border w-[60%] max-w-[350px] ml-5 mt-10 bg-indigo-500 text-white py-2 rounded-lg">
        + New Snippet
      </button>
      <div className="py-5 px-5 text-gray-600">
        <div className="mt-2">
          <p className="text-[12px] text-gray-400 font-[550] mb-3">OVERVIEW</p>
          <ul className="py-1 px-1">
            <SidebarItem active>All Snippet</SidebarItem>
            <SidebarItem>Favorites</SidebarItem>
            <SidebarItem>Recents</SidebarItem>
          </ul>
        </div>
        <div className="mt-5">
          <p className="text-[12px] text-gray-400 font-[550] mb-3 ">LANGUAGE</p>
          <ul>
            <div className="pl-1">
              <SidebarItem icon="JS">
                <span className="ml-1">JavaScript</span>
              </SidebarItem>
            </div>

            <SidebarItem icon="PY">Python</SidebarItem>
            <SidebarItem icon="TS">TypeScript</SidebarItem>
            <SidebarItem icon={<Code size={16} className="mt-1" />}>
              React
            </SidebarItem>
          </ul>
        </div>
        <div className="mt-5">
          <p className="text-[12px] text-gray-400 font-[550] mb-3">TEAM</p>
          <ul>
            <SidebarItem>Me</SidebarItem>
            <SidebarItem>Team - Coming Soon...</SidebarItem>
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
