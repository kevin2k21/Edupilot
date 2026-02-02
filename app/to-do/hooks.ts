"use client";
import { useEffect, useState } from "react";
import { Task } from "./types";
import { loadTasks, saveTasks } from "./storage";

export function useTodos() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editText, setEditText] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [filter, setFilter] = useState<"all" | "completed" | "pending">("all");

  useEffect(() => {
    async function loadTasks() {
      const res = await fetch('/api/tasks')
      const data = await res.json()
      setTasks(data)
    }
    loadTasks()
  }, [])


  async function addTask(title: string) {
  const res = await fetch('/api/tasks', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title }), // ✅ FIX
  })

  const newTask = await res.json()
  setTasks(prev => [newTask, ...prev])
}


  async function toggleTask(id: number) {
    const res = await fetch(`/api/tasks/${id}`, {
      method: 'PATCH',
    })
    const updated = await res.json()

    setTasks(prev =>
      prev.map(t => (t.id === id ? updated : t))
    )
  }

  async function deleteTask(id: number) {
    await fetch(`/api/tasks/${id}`, { method: 'DELETE' })
    setTasks(prev => prev.filter(t => t.id !== id))
  }

  function startEdit(task: Task) {
    setEditingId(task.id);
    setEditText(task.title);
  }

  function saveEdit(id: number) {
    if (!editText.trim()) return;
    setTasks(tasks.map(t =>
      t.id === id ? { ...t, text: editText } : t
    ));
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
