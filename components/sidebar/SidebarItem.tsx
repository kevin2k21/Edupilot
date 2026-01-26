import Image from "next/image";
import Link from "next/link";

type SidebarItemProps = {
  icon: string;
  label: string;  
  collapsed: boolean;
  href: string;
  active?: boolean;
  onClick?: () => void;
};

export function SidebarItem({ icon, label, collapsed, href, active = false, onClick }: SidebarItemProps) {
  return (
    <Link
    href={href}
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
    </Link>
  );
}
