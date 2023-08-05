/**
 * 分别构建一个数组,数组的长度就是数字,如果一个更长,那么就可以继承
 */

// 构建数组
type GetNumArr<T extends number, A extends any[] = []> = A['length'] extends T
  ? A
  : GetNumArr<T, [...A, 1]>

type GreaterThan<T extends number, U extends number> = GetNumArr<U> extends [
  ...GetNumArr<T>,
  ...infer _
]
  ? false
  : true


  /**
   * 大数不能递归 要用字符串比较, 大概思路是转字符串后按位比较,比较复杂,不写了
   */