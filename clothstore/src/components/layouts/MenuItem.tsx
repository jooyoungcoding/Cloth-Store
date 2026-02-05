import React from "react";

type MenuItemProps = {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  onClick: () => void;
};

const MenuItem = ({ icon, label, active, onClick }: MenuItemProps) => {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center gap-3 px-4 py-3 rounded-md text-sm transition
        ${active ? "bg-black text-white" : "text-gray-700 hover:bg-gray-100"}
      `}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
};

export default MenuItem;
