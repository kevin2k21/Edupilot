"use client";
import { TodoInput } from "./TodoInput";
import { TodoItem } from "./TodoItem";
import { useTodos } from "./hooks";

export default function TodoPage() {
  const todo = useTodos();

  return (
    <div className="max-w-md">
      <h1 className="text-2xl font-bold mb-4 text-black">To-Do List</h1>

      <TodoInput onAdd={todo.addTask} />

      {todo.tasks.map(task => (
        <TodoItem
          key={task.id}
          task={task}
          editing={todo.editingId === task.id}
          editText={todo.editText}
          onToggle={() => todo.toggleTask(task.id)}
          onDelete={() => todo.deleteTask(task.id)}
          onStartEdit={() => todo.startEdit(task)}
          onSave={() => todo.saveEdit(task.id)}
          onCancel={todo.cancelEdit}
          onEditChange={todo.setEditText}
        />
      ))}
    </div>
  );
}
