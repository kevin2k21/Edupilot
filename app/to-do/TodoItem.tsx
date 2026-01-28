import { Task } from "./types";

type Props = {
  task: Task;
  editing: boolean;
  editText: string;
  onToggle: () => void;
  onDelete: () => void;
  onStartEdit: () => void;
  onSave: () => void;
  onCancel: () => void;
  onEditChange: (v: string) => void;
};

export function TodoItem({
  task,
  editing,
  editText,
  onToggle,
  onDelete,
  onStartEdit,
  onSave,
  onCancel,
  onEditChange,
}: Props) {
  return (
    <div className="flex items-center gap-3 py-2 px-2 rounded-lg hover:bg-gray-50 transition">
      {/* Checkbox */}
      <input
        type="checkbox"
        checked={task.done}
        onChange={onToggle}
        className="h-4 w-4 accent-blue-600"
      />

      {editing ? (
  <>
    <input
      value={editText}
      onChange={(e) => onEditChange(e.target.value)}
      className="flex-1 border px-3 py-1.5 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    />

    <button
      onClick={onSave}
      className="px-3 py-1.5 rounded-md bg-green-600 text-white text-sm font-medium hover:bg-green-700 transition"
    >
      Save
    </button>

    <button
      onClick={onCancel}
      className="px-3 py-1.5 rounded-md bg-red-600 text-white text-sm font-medium hover:bg-red-700 transition"
    >
      Cancel
    </button>
  </>
      ) : (
        <>
          {/* Task text */}
          <span
            className={`flex-1 text-sm ${
              task.done ? "line-through text-gray-400" : "text-gray-800"
            }`}
          >
            {task.text}
          </span>

          {/* Edit */}
          <button
            onClick={onStartEdit}
            className="px-3 py-1.5 rounded-md text-sm text-blue-600 hover:bg-blue-50 transition"
          >
            Edit
          </button>

          {/* Delete */}
          <button
            onClick={onDelete}
            className="px-3 py-1.5 rounded-md text-sm text-red-600 hover:bg-red-50 transition"
          >
            Delete
          </button>
        </>
      )}
    </div>
  );
}
