type Join<T extends unknown[], U extends string | number, R extends string = ''> = T extends [
  infer A extends string,
  ...infer B
]
  ? Join<B, U, `${R}${A}${U}`>
  : R extends `${infer C}${U}`
  ? `${C}`
  : R
