/**
 * 参考 Permutation 的注释
 * 泛型 extends never的时候,是无效的,不管后面的条件是什么,都会返回never
 */

type IsNever<T> = [T] extends [never] ? true : false

// type IsNever<T> = Equal<never, T>
