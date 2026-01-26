"use client";

import { useState } from "react";
import Image from "next/image";

import { Header } from "../header/Header";
import { Sidebar } from "@/components/sidebar/Sidebar";
import { HeaderSearch } from "@/components/header/HeaderSearch";
import { InfoCard } from "@/components";

type AppLayoutProps = {
  children: React.ReactNode;
};

export function AppLayout({ children }: AppLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen bg-white flex flex-col">

      {/* HEADER */}
      <header className="w-full bg-gray-100 px-2 py-1">
        <div className="grid grid-cols-[auto_1fr_auto] items-center gap-4">

          <Header
            onMenuClick={() => setSidebarOpen(prev => !prev)}
          />

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

      {/* BODY */}
      <div className="flex flex-1">
        <Sidebar collapsed={!sidebarOpen} />
        <main className="flex-1 px-4 py-2">
          {children}
          <div className="text-gray-400 text-center mt-20">
            Select an item from the sidebar
          </div>
        </main>
      </div>
      
    </div>
  );
}
