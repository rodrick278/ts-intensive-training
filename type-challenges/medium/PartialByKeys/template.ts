/**
 * Partial<Pick<T, K>> 取出需要Partial的key
 * Omit<T, K> 排除需要Partial的key
 * 此时两个类型是Intersection type,不符合Equal校验,利用Omit一个never key将两个类型合并一次
 * 或者遍历一遍这个Intersection type
 */

type PartialByKeys<T, K extends keyof T = keyof T> =
  Omit<
    Partial<Pick<T, K>> & Omit<T, K>
    , never
  >

// type PartialByKeys<T, K extends keyof T = keyof T> = IntersectionToObj<
//   Partial<Pick<T, K>> & Omit<T, K>
// >
// type IntersectionToObj<T> = {
//   [K in keyof T]: T[K]
// }
