type FuckWithout<U> = U extends unknown[] ? U[number] : U

type Without<T, U, R extends any[] = []> = T extends [infer A, ...infer B]
  ? A extends FuckWithout<U>
    ? Without<B, U, R>
    : Without<B, U, [...R, A]>
  : R
