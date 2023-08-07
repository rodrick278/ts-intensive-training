type Chunk<
  T extends any[],
  N extends number,
  R extends any[] = [],
  P extends any[] = []
> = T extends [infer A, ...infer Args]
  ? P['length'] extends N
    ? Chunk<Args, N, [...R, P], [A]>
    : Chunk<Args, N, R, [...P, A]>
  : P['length'] extends 0
  ? R
  : [...R, P]

// type Chunk<T extends any[], N extends number, Swap extends any[] = []> =
// Swap['length'] extends N
//   ? [Swap, ...Chunk<T, N>]
//   : T extends [infer K, ...infer L]
//     ? Chunk<L, N, [...Swap, K]>
//     : Swap extends [] ? Swap : [Swap]
