import Image from "next/image";

type SidebarItemProps = {
  icon: string;
  label: string;
  collapsed: boolean;
  active?: boolean;
  onClick?: () => void;
};

export function SidebarItem({ icon, label, collapsed, active = false, onClick }: SidebarItemProps) {
  return (
    <div
        onClick={onClick}
      className={`
        flex items-center gap-3 px-3 py-2 rounded-md cursor-pointer
        transition
        ${active
          ? "bg-white text-blue-600 font-semibold"
          : "text-gray-700 hover:bg-gray-300"}
      `}

    >
      <Image src={icon} alt={label} width={40} height={40} />
      

      {!collapsed && (
        <span className="text-m font-medium text-gray-700">
          {label}
        </span>
      )}
    </div>
  );
}
