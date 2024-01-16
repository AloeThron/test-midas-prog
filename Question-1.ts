function getClockAngle(hh_mm: string) {
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

  const hourAngle = 0.5 * (hour * 60 + minute);
  const minuteAngle = 6 * minute;

  // return the smaller angle between the hour and minute hands of the clock, in degree
  // 0 <= return value <= 180
  // return angle;
}
