// Dot-matrix glyphs: one signature per pattern (ops/CONTEXT.md, design notes).
// Order matches copy.p1.patterns.items.

const GLYPHS = [
  // Withdrawal & Avoidance: a small cluster pulled into a corner
  ['.....', '.....', '.....', '##...', '##...'],
  // Approval Chasing: dots reaching upward
  ['..#..', '.###.', '#.#.#', '..#..', '..#..'],
  // Substance Soothing: a slow wave
  ['.....', '#...#', '.#.#.', '..#..', '.....'],
  // Achievement Hiding: steps climbing
  ['....#', '...##', '..###', '.####', '#####'],
  // Intimacy Seeking: two points leaning together
  ['.....', '#...#', '.#.#.', '.###.', '..#..'],
  // Compulsive Spending: scattered
  ['#..#.', '..#..', '#...#', '.#..#', '..#..'],
];

export function PatternGlyph({ index, on = '#ff6b5b', off = 'rgba(250,248,245,0.1)' }: { index: number; on?: string; off?: string }) {
  const rows = GLYPHS[index % GLYPHS.length];
  return (
    <svg width="56" height="56" viewBox="0 0 56 56" aria-hidden="true">
      {rows.flatMap((row, y) =>
        row.split('').map((cell, x) => (
          <circle
            key={`${x}-${y}`}
            cx={6 + x * 11}
            cy={6 + y * 11}
            r={cell === '#' ? 3.6 : 2.4}
            fill={cell === '#' ? on : off}
            className={cell === '#' ? 'transition-all duration-500 group-hover:opacity-80' : undefined}
          />
        )),
      )}
    </svg>
  );
}
