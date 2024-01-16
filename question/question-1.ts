export function getClockAngle(hh_mm: string) {
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

// console.log(getClockAngle("03:45"));
// console.log(getClockAngle("06:15"));
// console.log(getClockAngle("20:20"));
// console.log(getClockAngle("01:59"));

// console.log(getClockAngle("24:30"));
// console.log(getClockAngle("12:60"));