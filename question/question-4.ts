function minEnergy(
  start: number,
  shops: number[],
  stations: number[],
  target: number
): number {
  const totalPoints = [start, ...shops, ...stations, target];
  const sortedPoints = totalPoints.sort((a, b) => a - b);

  let minEnergy = 0;

  for (let i = 0; i < sortedPoints.length - 1; i++) {
    const prev = sortedPoints[i - 1];
    const current = sortedPoints[i];
    const next = sortedPoints[i + 1];
    const future = sortedPoints[i + 2];

    if (shops.includes(next)) {
      if (stations.includes(future)) {
        minEnergy += Math.min(
          Math.abs(future - next),
          Math.abs(future - current),
          Math.abs(current - next)
        );
        continue;
      } else {
        minEnergy += Math.abs(next - current);
        continue;
      }
    }

    if (stations.includes(next)) {
      if (stations.includes(prev)) {
        minEnergy += Math.min(
          Math.abs(next - current),
          Math.abs(current - prev)
        );
        continue;
      } else if (stations.includes(current)) {
        continue;
      } else {
        minEnergy += Math.abs(next - current);
        continue;
      }
    }
    if (next == target) {
      minEnergy += Math.abs(target - current);
      continue;
    }
  }

  return minEnergy;
}
