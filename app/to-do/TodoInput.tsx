import { useState } from "react";

type Props = {
  onAdd: (text: string) => void;
};

export function TodoInput({ onAdd }: Props) {
  const [input, setInput] = useState("");

  return (
    <div className="flex gap-2 items-center w-full ">
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="flex-1 border px-4 py-2 rounded text-black"
        placeholder="New task"
      />
      <button
        onClick={() => {
          onAdd(input);
          setInput("");
        }}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Add
      </button>
    </div>
  );
}
