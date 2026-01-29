export function getDaysInMonth(year: number, month: number): number {
  return new Date(year, month + 1, 0).getDate();
}

export function getStartDay(year: number, month: number): number {
  return new Date(year, month, 1).getDay(); // 0 = Sunday
}

export function isSameDay(
  date: Date,
  year: number,
  month: number,
  day: number
): boolean {
  return (
    date.getFullYear() === year &&
    date.getMonth() === month &&
    date.getDate() === day
  );
}
