import Image from "next/image";

type HeaderProps = {
  onMenuClick: () => void;
};

export function Header({ onMenuClick }: HeaderProps) {
  return (
    <div
      onClick={onMenuClick}
      className="flex items-center gap-2 text-blue-500 font-extrabold text-2xl cursor-pointer select-none"
    >
      <div className="px-3">
        <Image
          src="/dashboard-minimizer.svg"
          alt="Menu"
          width={40}
          height={40}
        />
      </div>
      <div>
        <span>EduPilot</span>
      </div>
      
    </div>
  );
}

