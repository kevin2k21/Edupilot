import { Task } from "./types";

const KEY = "tasks";

export function loadTasks(): Task[] {
  if (typeof window === "undefined") return [];
  const raw = localStorage.getItem(KEY);
  return raw ? JSON.parse(raw) : [];
}

export function saveTasks(tasks: Task[]) {
  localStorage.setItem(KEY, JSON.stringify(tasks));
}
