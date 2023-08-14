type IndexOf<T extends any[], U extends unknown, R extends any[] = []> = T extends [
  infer A,
  ...infer B
]
  ? Equal<U, A> extends true
    ? R['length']
    : IndexOf<B, U, [...R, '']>
  : -1
