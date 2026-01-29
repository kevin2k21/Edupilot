"use client";

import { useState } from "react";
import { CalendarHeader } from "./Header";
import { CalendarGrid } from "./grid";

export function Calendar() {
  const today = new Date();

  const [viewDate, setViewDate] = useState(
    new Date(today.getFullYear(), today.getMonth(), 1)
  );

  return (
    <>
      <CalendarHeader
        viewDate={viewDate}
        onPrevMonth={() =>
          setViewDate(prev => new Date(prev.getFullYear(), prev.getMonth() - 1, 1))
        }
        onNextMonth={() =>
          setViewDate(prev => new Date(prev.getFullYear(), prev.getMonth() + 1, 1))
        }
      />

      <CalendarGrid viewDate={viewDate} today={today} />
    </>
  );
}
