interface SidebarItemProps {
  children: React.ReactNode;
  active?: boolean;
  icon?: React.ReactNode;
}

const SidebarItem = ({ children, active = false, icon }: SidebarItemProps) => {
  return (
    <li
      className={`
      py-2 px-7 -mx-6 cursor-pointer transition-colors flex text-[15px]
      ${
        active
          ? "bg-blue-100 text-blue-600 border-r-3 border-blue-400 font-semibold"
          : "hover:bg-gray-50 hover:text-blue-600"
      }
    `}
    >
      {icon && <span className="text-indigo-400 mr-3">{icon}</span>}
      {children}
    </li>
  );
};

export default SidebarItem;
