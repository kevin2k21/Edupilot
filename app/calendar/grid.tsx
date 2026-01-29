import { getDaysInMonth, getStartDay, isSameDay } from "./utils";

type Props = {
  viewDate: Date;
  today: Date;
};

export function CalendarGrid({ viewDate, today }: Props) {
  const year = viewDate.getFullYear();
  const month = viewDate.getMonth();

  const daysInMonth = getDaysInMonth(year, month);
  const startDay = getStartDay(year, month);

  return (
    <div className="grid grid-cols-7 gap-2 text-center">
      {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(day => (
        <div
          key={day}
          className="font-semibold text-gray-600"
        >
          {day}
        </div>
      ))}

      {Array.from({ length: startDay }).map((_, i) => (
        <div key={`empty-${i}`} />
      ))}

      {Array.from({ length: daysInMonth }).map((_, i) => {
        const dayNumber = i + 1;
        const isToday = isSameDay(today, year, month, dayNumber);

        return (
          <div
            key={dayNumber}
            className={`border rounded h-24 p-1 text-left cursor-pointer
              ${isToday ? "border-blue-500 bg-blue-50" : "hover:bg-gray-50"}
            `}
          >
            <span className="text-sm font-medium text-black">
              {dayNumber}
            </span>
          </div>
        );
      })}
    </div>
  );
}
