"use client";

import { useState } from "react";
import { SidebarItem } from "./SidebarItem";

export function Sidebar() {
  const [activeItem, setActiveItem] = useState("Calendar");

  return (
    <aside className="w-60 bg-gray-200 px-3 py-4 flex flex-col gap-1">
      <SidebarItem
        icon="./calender.svg"
        label="Calendar"
        active={activeItem === "Calendar"}
        onClick={() => setActiveItem("Calendar")}
      />

      <SidebarItem
        icon="./to-do-list.svg"
        label="To-Do List"
        active={activeItem === "To-Do List"}
        onClick={() => setActiveItem("To-Do List")}
      />

      <SidebarItem
        icon="/book.svg"
        label="Subjects"
        active={activeItem === "Subjects"}
        onClick={() => setActiveItem("Subjects")}
      />

      <SidebarItem
        icon="/tests.svg"
        label="Tests"
        active={activeItem === "Tests"}
        onClick={() => setActiveItem("Tests")}
      />
    </aside>
  );
}
