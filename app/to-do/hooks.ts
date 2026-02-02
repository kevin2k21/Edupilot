"use client";

import { useEffect, useState } from "react";
import { Task } from "../types/types";

export function useTodos() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editText, setEditText] = useState("");
  const [filter, setFilter] = useState<"all" | "completed" | "pending">("all");

  // 🔹 Fetch ONLY current user's tasks
  useEffect(() => {
    async function fetchTasks() {
      const res = await fetch("/api/tasks");
      if (!res.ok) return;
      const data = await res.json();
      setTasks(data);
    }
    fetchTasks();
  }, []);

  // 🔹 Create task (auto-linked to current user on server)
  async function addTask(title: string) {
    const res = await fetch("/api/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title }),
    });

    if (!res.ok) return;

    const newTask = await res.json();
    setTasks(prev => [newTask, ...prev]);
  }

  // 🔹 Toggle completion (ownership checked on server)
  async function toggleTask(id: number) {
    const res = await fetch(`/api/tasks/${id}`, {
      method: "PATCH",
    });

    if (!res.ok) return;

    const updated = await res.json();
    setTasks(prev => prev.map(t => (t.id === id ? updated : t)));
  }

  // 🔹 Delete task (ownership checked on server)
  async function deleteTask(id: number) {
    const res = await fetch(`/api/tasks/${id}`, {
      method: "DELETE",
    });

    if (!res.ok) return;

    setTasks(prev => prev.filter(t => t.id !== id));
  }

  // 🔹 Edit helpers
  function startEdit(task: Task) {
    setEditingId(task.id);
    setEditText(task.title);
  }

  async function saveEdit(id: number) {
    if (!editText.trim()) return;

    const res = await fetch(`/api/tasks/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: editText }),
    });

    if (!res.ok) return;

    const updated = await res.json();
    setTasks(prev => prev.map(t => (t.id === id ? updated : t)));

    setEditingId(null);
    setEditText("");
  }

  function cancelEdit() {
    setEditingId(null);
    setEditText("");
  }

  return {
    tasks,
    editingId,
    editText,
    filter,
    setFilter,
    setEditText,
    addTask,
    toggleTask,
    deleteTask,
    startEdit,
    saveEdit,
    cancelEdit,
  };
}
