type AppendArgument<Fn extends (...args: any[]) => any, A> = Fn extends (
  ...args: infer T
) => infer R
  ? (...args: [...T, A]) => R
  : never
