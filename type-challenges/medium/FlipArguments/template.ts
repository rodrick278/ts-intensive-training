type FlipArguments<T extends (...args) => any> = T extends (...args: infer U) => infer R
  ? (...args: Reverse<U>) => R
  : never
