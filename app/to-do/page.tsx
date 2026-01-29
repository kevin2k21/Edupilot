"use client";
import { TodoInput } from "./TodoInput";
import { TodoItem } from "./TodoItem";
import { useTodos } from "./hooks";

export default function TodoPage() {
  const todo = useTodos();

  const filteredTasks = todo.tasks.filter(task => {
    if (todo.filter === "completed") return task.done;
    if (todo.filter === "pending") return !task.done;
    return true;
  });

  return (
    <div className="max-w-md">
      <h1 className="text-2xl font-bold mb-4 text-black">
        To-Do List
      </h1>

      {/* Input + Filter Row */}
      <div className="flex items-center gap-2 mb-4">
        <TodoInput onAdd={todo.addTask} />

        <select
          value={todo.filter}
          onChange={(e) => todo.setFilter(e.target.value as any)}
          className="border px-3 py-2 rounded text-black"
        >
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="pending">Pending</option>
        </select>
      </div>

      {/* Task List */}
      <div className="space-y-2">
        {filteredTasks.map(task => (
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

      {/* Empty State */}
      {filteredTasks.length === 0 && (
        <p className="text-gray-500 mt-4">
          No {todo.filter} tasks
        </p>
      )}
    </div>
  );
}
