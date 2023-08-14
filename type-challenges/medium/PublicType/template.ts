type PublicType<T extends object> = {
  [K in keyof T as K extends `_${infer A}` ? never : K]: T[K]
}
