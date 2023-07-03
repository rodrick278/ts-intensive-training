// type StringToUnion<T extends string, K extends string = never> = T extends `${infer A}${infer B}`
//   ? StringToUnion<B, K | A>
//   : K

type StringToUnion<T extends string> = T extends `${infer A}${infer B}`
  ? A | StringToUnion<B>
  : never
