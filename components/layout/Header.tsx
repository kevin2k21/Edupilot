import Image from "next/image";
// components/layout/Header.tsx
export function Header() {
  return (
    <div className="flex items-center gap-2 text-blue-500 font-extrabold text-2xl">
      <Image
        src="/dashboard-minimizer.svg"
        alt="EduPilot logo"
        width={40}
        height={40}
      />
      <span>EduPilot</span>
    </div>
  );
}
