type CreateArr<L extends number, R extends any[] = []> = R['length'] extends L
  ? R
  : CreateArr<L, [...R, '']>

type LastIndexOf<
  T extends any[],
  U extends unknown,
  R extends any[] = CreateArr<T['length']>
> = T extends [...infer A, infer B]
  ? R extends [...infer O, infer _]
    ? Equal<U, B> extends true
      ? O['length']
      : LastIndexOf<A, U, O>
    : never
  : -1

