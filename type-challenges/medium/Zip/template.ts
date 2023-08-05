type Zip<A extends any[], B extends any[]> = [A, B] extends [
  [infer U, ...infer U1],
  [infer K, ...infer K1]
]
  ? [[U, K], ...Zip<U1, K1>]
  : []


