function quickestPath(board: { ladders: [number, number][]; snakes: [number, number][]; }): number[] {
  const destination = 100;
  const visited = new Set<number>();
  const queue: { position: number; rolls: number[] }[] = [{ position: 80, rolls: [] }];

  while (queue.length > 0) {
      const current = queue.shift()!;

      if (current.position === destination) {
          return current.rolls;
      }

      if (visited.has(current.position)) {
          continue;
      }

      visited.add(current.position);

      for (let roll = 6; roll >= 1; roll--) {
          const nextPosition = current.position + roll;

          if (nextPosition <= destination) {
              const nextRolls = [...current.rolls, roll];

              const ladder = board.ladders.find(([start, end]) => start === nextPosition);
              if (ladder) {
                  queue.push({ position: ladder[1], rolls: nextRolls });
                  continue;
              }

              const snake = board.snakes.find(([start, end]) => start === nextPosition);
              if (snake) {
                  queue.push({ position: snake[1], rolls: nextRolls });
                  continue;
              }

              queue.push({ position: nextPosition, rolls: nextRolls });
          }
      }
  }

  return [];
}

// const result1 = quickestPath({
//   ladders: [[3, 39], [14, 35], [31, 70], [44, 65], [47, 86], [63, 83], [71, 93]],
//   snakes: [[21, 4], [30, 8], [55, 38], [79, 42], [87, 54], [91, 48], [96, 66]]
// });
// const result2 = quickestPath({
//   ladders: [[3, 39], [14, 35], [31, 70], [44, 65], [47, 86], [63, 83], [71, 93]],
//   snakes: [[21, 4], [30, 8], [55, 38], [79, 42], [87, 54], [91, 48], [96, 66]]
// });

// console.log(result1); // Output: [2, 5, 6, 6, 1]
// console.log(result2); // Output: [2, 5, 6, 6, 1]
