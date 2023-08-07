/**
 * 解释一下为什么number extends T['length']
 * 如果是Tuble 那么length是固定的, number extends 一个固定数字肯定是false,非Tuble的话length是number
 */

type IsTuple<T> = [T] extends [never]
  ? false
  : T extends readonly any[]
  ? number extends T['length']
    ? false
    : true
  : false
