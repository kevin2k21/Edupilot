"use client";
import { useEffect, useState } from "react";
import { Task } from "./types";
import { loadTasks, saveTasks } from "./storage";

export function useTodos() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editText, setEditText] = useState("");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTasks(loadTasks());
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (!loaded) return;
    saveTasks(tasks);
  }, [tasks, loaded]);

  function addTask(task: string) {
    if (!task.trim()) return;
    setTasks([...tasks, { text: task ,id: Date.now(), done: false }]);
  }

  function toggleTask(id: number) {
    setTasks(tasks.map(t =>
      t.id === id ? { ...t, done: !t.done } : t
    ));
  }

  function deleteTask(id: number) {
    setTasks(tasks.filter(t => t.id !== id));
  }

  function startEdit(task: Task) {
    setEditingId(task.id);
    setEditText(task.text);
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
    setEditText,
    addTask,
    toggleTask,
    deleteTask,
    startEdit,
    saveEdit,
    cancelEdit,
  };
}
