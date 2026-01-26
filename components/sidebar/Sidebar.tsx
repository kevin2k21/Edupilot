"use client";

import { usePathname } from "next/navigation";
import { SidebarItem } from "./SidebarItem";

export function Sidebar({ collapsed }: { collapsed: boolean }) {
  const pathname = usePathname();

  return (
     <aside
      className={`
-        bg-gray-200 py-4 transition-all duration-300
-        ${collapsed ? "w-20 px-2" : "w-60 px-3"}
+        ${collapsed ? "w-16" : "w-60"}
+        bg-gray-200 px-3 py-4
+        transition-all duration-300
       `}
    >
      <SidebarItem
        icon="/calender.svg"
        label="calender"
        href="/calender"
        collapsed={collapsed}
        active={pathname === "/calender"}
      />

      <SidebarItem
        icon="/todo.svg"
        label="To-Do List"
        href="/to-do"
        collapsed={collapsed}
        active={pathname === "/to-do"}
      />

      <SidebarItem
        icon="/book.svg"
        label="Subjects"
        href="/subjects"
        collapsed={collapsed}
        active={pathname === "/subjects"}
      />

      <SidebarItem
        icon="/tests.svg"
        label="Tests"
        href="/tests"
        collapsed={collapsed}
        active={pathname === "/tests"}
      />
    </aside>
  );
}
