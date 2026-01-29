type Props = {
  viewDate: Date;
  onPrevMonth: () => void;
  onNextMonth: () => void;
};

export function CalendarHeader({
  viewDate,
  onPrevMonth,
  onNextMonth,
}: Props) {
  return (
    <div className="flex items-center justify-between mb-4">
      <h2 className="text-xl font-semibold text-blue-500">
        {viewDate.toLocaleString("default", {
          month: "long",
          year: "numeric",
        })}
      </h2>

      <div className="flex gap-2">
        <button
          onClick={onPrevMonth}
          className="px-3 py-1 border rounded text-blue-500 hover:bg-gray-50"
        >
          ←
        </button>

        <button
          onClick={onNextMonth}
          className="px-3 py-1 border rounded text-blue-500 hover:bg-gray-50"
        >
          →
        </button>
      </div>
    </div>
  );
}
