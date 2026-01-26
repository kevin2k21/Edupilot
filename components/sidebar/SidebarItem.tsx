import Image from "next/image";
import Link from "next/link";

type SidebarItemProps = {
  icon: string;
  label: string;
  href: string;
  active?: boolean;
  collapsed: boolean;
};

export function SidebarItem({
  icon,
  label,
  href,
  active = false,
  collapsed,
}: SidebarItemProps) {
  return (
    <Link
      href={href}
      className={`
        flex items-center gap-3 px-3 py-2 rounded-md
        transition
        ${active
          ? "bg-white text-blue-600 font-semibold"
          : "text-gray-700 hover:bg-gray-300"}
      `}
    >
      {/* icon */}
      <img src={icon} alt={label} width={40} height={40} />

      {!collapsed && <span className="text-m font-medium text-gray-700">{label}</span>}
    </Link>
  );
}
