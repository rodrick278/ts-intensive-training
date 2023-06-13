// 遍历type string 递归
type TrimLeft<S extends string> = S extends `${' ' | '\n' | '\t'}${infer C}` ? TrimLeft<C> : S
