"use client";

import { useState } from "react";

export function HeaderSearch() {
  const [query, setQuery] = useState("");

  return (
    <input
      type="text"
      placeholder="Search..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      className="px-3 py-2 rounded-full border border-gray-300
                 focus:outline-none focus:ring-2 focus:ring-blue-500
                 text-black"
    />
  );
}
