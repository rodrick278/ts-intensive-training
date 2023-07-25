/**
 * 1. 构建A为key的时候需要用遍历 in
 * 2. A B需要做约束,extends string或者 [K in A&string] 都可以
 */

type TupleToNestedObject<T, U> = T extends [infer A extends string, ...infer B extends string[]]
  ? { [K in A]: TupleToNestedObject<B, U> }
  : U


