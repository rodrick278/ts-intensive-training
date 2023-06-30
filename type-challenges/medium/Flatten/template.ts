/**
 * 坑的点在于
 * Flatten<[1, 2, [3, 4], [[[5]]]]>中的A是: [1, 2, [3, 4]]
 * 所以A也要再进行递归
 *
 */


// 这个的思路是把最后一个数组分离出来
type Flatten<T extends unknown[], R extends unknown[] = []> = T extends [
  ...infer A,
  infer B extends any[]
]
  ? Flatten<B, [...R, ...Flatten<A>]>
  : [...R, ...T]


// 这个的思路是把第一个值分离出来,看是不是数组
// type Flatten<S extends any[], T extends any[] = []> = S extends [infer X, ...infer Y]
//   ? X extends any[]
//     ? Flatten<[...X, ...Y], T>
//     : Flatten<[...Y], [...T, X]>
//   : T
