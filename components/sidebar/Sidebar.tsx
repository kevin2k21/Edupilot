"use client";

import { useState } from "react";
import { SidebarItem } from "./SidebarItem";

export function Sidebar({ collapsed }: { collapsed: boolean }) {
  const [activeItem, setActiveItem] = useState("Calendar");

  return (
    <aside
      className={`
        bg-gray-200 py-4 transition-all duration-300
        ${collapsed ? "w-20 px-2" : "w-60 px-3"}
      `}
    >
      <SidebarItem
        icon="/calender.svg"
        label="Calendar"
        href="/calender"
        collapsed={collapsed}
        active={activeItem === "Calendar"}
        onClick={() => setActiveItem("Calendar")}
      />

      <SidebarItem
        icon="/todo.svg"
        label="To-Do List"
        href="/to-do"
        collapsed={collapsed}
        active={activeItem === "to-Do List"}
        onClick={() => setActiveItem("to-Do List")}
      />

      <SidebarItem
        icon="/book.svg"
        label="Subjects"
        href="/subjects"
        collapsed={collapsed}
        active={activeItem === "Subjects"}
        onClick={() => setActiveItem("Subjects")}
      />

      <SidebarItem
        icon="/tests.svg"
        label="Tests"
        href="/tests"
        collapsed={collapsed}
        active={activeItem === "Tests"}
        onClick={() => setActiveItem("Tests")}
      />
    </aside>
  );
}
