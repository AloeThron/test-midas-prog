export function getClockAngle(hh_mm: string): number {
  const [hourStr, minuteStr] = hh_mm.split(":");

  let hour = parseInt(hourStr);
  const minute = parseInt(minuteStr);

  if (
    isNaN(hour) ||
    isNaN(minute) ||
    hour < 0 ||
    hour > 23 ||
    minute < 0 ||
    minute > 59
  ) {
    throw new Error("Invalid input time format");
  }

  if (hour >= 12) {
    hour -= 12;
  }

  const hourAngle = hour * 30 + minute * 0.5;
  const minuteAngle = 6 * minute;

  let angle = Math.abs(hourAngle - minuteAngle);

  if (angle > 180) {
    angle = 360 - angle;
  }

  return angle;
}
