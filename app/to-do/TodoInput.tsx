import { useState } from "react";

type Props = {
  onAdd: (text: string) => void;
};

export function TodoInput({ onAdd }: Props) {
  const [input, setInput] = useState("");

  return (
    <div className="flex gap-2 mb-4 ">
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="flex-1 border px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
        placeholder="New task"
      />
      <button
        onClick={() => {
          onAdd(input);
          setInput("");
        }}
        className="px-3 py-1 bg-blue-600 text-white rounded"
      >
        Add
      </button>
    </div>
  );
}
