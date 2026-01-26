type AppLayoutProps = {
  children: React.ReactNode;
};
import Image from "next/image";

import { Header } from "./Header";
import { InfoCard } from "@/components";
import { HeaderSearch } from "@/components/header/HeaderSearch";
import { Sidebar } from "@/components/sidebar/Sidebar";

export function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      
      {/* HEADER */}
      <header className="w-full bg-gray-100 px-4 py-1">
        <div className="grid grid-cols-[1fr_auto_1fr] items-center">
          <div className="flex items-center gap-3">
            <Header />
          </div>

          <div className="flex justify-center">
            <HeaderSearch />
          </div>

          <div className="flex justify-end">
            <InfoCard>
              <Image src="/bell.svg" alt="Notifications" width={34} height={34} />
            </InfoCard>
          </div>
        </div>
      </header>

      {/* BODY: sidebar + main */}
      <div className="flex flex-1">
        
        <Sidebar />

        <main className="flex-1 px-4 py-2">
          {children}
        </main>
      </div>

    </div>
  );
}


