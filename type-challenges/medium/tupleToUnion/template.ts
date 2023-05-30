
/**
 * 循环数组
 */
// type TupleToUnion<T extends unknown[]> = T extends [infer U, ...infer args]
//   ? TupleToUnion<args> | U
//   : never

/** T[number] 就是数组的每一个数👍 */
type TupleToUnion<T extends unknown[]> = T[number]