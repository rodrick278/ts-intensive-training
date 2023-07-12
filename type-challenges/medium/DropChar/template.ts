// type DropChar<S extends string, C extends string> = S extends `${infer A}${infer B}`
//   ? A extends C
//     ? DropChar<B, C>
//     : `${A}${DropChar<B, C>}`
//   : S

type DropChar<S extends string, C extends string> = S extends `${infer A}${C}${infer B}`
  ? DropChar<`${A}${B}`, C>
  : S
