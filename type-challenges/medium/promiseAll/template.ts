/**
 * 1. 循环tuple 见 tuple-to-object
 * Awaited (https://www.typescriptlang.org/docs/handbook/utility-types.html#example) 的效果:
 * Awaited<number> => number
 * Awaited<number | Promise<number>> => number
 *
 */

// 这种方法针对 promiseAllTest4 无效,因为number | Promise<number>不 extends then{xxx}类型
// declare function PromiseAll<T extends unknown[]>(
//   values: readonly [...T]
// ): Promise<{
//   [K in keyof T]: T[K] extends {
//     then: (onfulfilled: (arg: infer P) => any) => any
//   }
//     ? P
//     : T[K]
// }>
// declare function PromiseAll<T extends unknown[]>(
//   values: readonly [...T]
// ): Promise<{
//   [K in keyof T]: T[K] extends Promise<infer P>
//     ? P
//     : T[K]
// }>



declare function PromiseAll<T extends unknown[]>(
  values: readonly [...T]
): Promise<{ [K in keyof T]: Awaited<T[K]> }>



