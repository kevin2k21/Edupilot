import { SidebarItem } from "./SidebarItem";

export function Sidebar() {
  return (
    <aside className="w-60 bg-gray-200 px-3 py-4 flex flex-col gap-1 ">

      <SidebarItem
        icon="./calender.svg"
        label="Calendar"
      />

      <SidebarItem
        icon="./to-do-list.svg"
        label="To-Do List"
      />

      <SidebarItem
        icon="/book.svg"
        label="Subjects"
      />

      <SidebarItem
        icon="./tests.svg"
        label="Tests"
      />

    </aside>
  );
}

    
