/**
 * 为什么是K[A & keyof K] extends never ? undefined : K[A & keyof K]
 * 如果不加
 * ObjectEntries<{ key?: undefined }> 是 ["key": never]
 */

type ObjectEntries<T, K = { [P in keyof T]-?: T[P] }> = keyof K extends infer A
  ? A extends A
    ? [A, K[A & keyof K] extends never ? undefined : K[A & keyof K]]
    : never
  : never
