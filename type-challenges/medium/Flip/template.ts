type Flip<T> = {
  [K in keyof T as T[K] extends string | number | boolean ? `${T[K]}` : never]: K
}
