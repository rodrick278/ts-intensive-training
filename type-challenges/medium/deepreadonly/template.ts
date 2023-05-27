/**
 * 解法1 针对类型直接过滤掉string Function
 */
// type DeepReadonly<T> = {
//   readonly [K in keyof T]: T[K] extends string | Function ? T[K] : DeepReadonly<T[K]>
// }

/**
 * 解法2 判断T[K] 是否extends never类型
 * !要注意的是,虽然keyof (() => 22)  是never
 * 但是 keyof string extends never 是false的,
 * 因为 keyof string 是 number | typeof Symbol.iterator | "toString" | "charAt" .... 这些
 * 但是的但是, T为string时,也就是下面这种情况,T是原始类型时,映射类型(Mapped Types)会返回类型本身,这个非常重要
 * 
  type HAHA<T> = {
    [K in keyof T]: T[K]
  }
  type test = HAHA<string>
 */
type DeepReadonly<T> = {
  readonly [K in keyof T]: keyof T[K] extends never ? T[K] : DeepReadonly<T[K]>
}

/**
 * 解法3: 先处理Funciton这种特殊的object,让他不要递归,然后区分一下object和其他类型即可
 */
// type DeepReadonly<T> = T extends Function
//   ? T
//   : T extends {}
//   ? { readonly [K in keyof T]: DeepReadonly<T[K]> }
//   : T
