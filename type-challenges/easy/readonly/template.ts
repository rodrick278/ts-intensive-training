/**
 * 1. 遍历interface 的方式 使用 keyof去拿
 */

type MyReadonly<T> = {
  readonly [P in keyof T]: T[P]
}