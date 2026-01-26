import Image from "next/image";

type SidebarItemProps = {
  icon: string;
  label: string;
};

export function SidebarItem({ icon, label }: SidebarItemProps) {
  return (
    <div className="flex items-center gap-3 px-3 py-2 rounded-md cursor-pointer
                    text-gray-700 hover:bg-gray-300 transition">
      <Image src={icon} alt={label} width={40} height={40} />
      <span className="text-m font-medium">{label}</span>
    </div>
  );
}
