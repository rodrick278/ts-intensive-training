/**
 * Key Remapping via 'as'
 * https://www.typescriptlang.org/docs/handbook/2/mapped-types.html#key-remapping-via-as
 *
 * 思路:
 * 这里可以通过 as 实现键名重新映射
 * 在 exclude 的实现里: type MyExclude<T, U> = T extends U ? never : T
 * 通过extends实现排除
 * 
 * 这道题里,需要对key进行排除,排除只能是exclude
 * 所以可以通过as将键P重新映射,分两段来看
 * 1. P in keyof T 取出 P值
 * 2. P extends K ? never : P , 对K进行 Exclude操作,如果P是K内,那么这个key就是never,在最后会被自动排除
 * 
 * 写法等同于 [P in keyof T as Exclude<P, K>]: T[P]
 * 
 */

type MyOmit<T, K extends keyof T> = {
  [P in keyof T as (P extends K ? never : P)]: T[P]
  //  [P in keyof T as Exclude<P, K>]: T[P]
}


