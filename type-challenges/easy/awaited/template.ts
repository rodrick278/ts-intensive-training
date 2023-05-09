type PromiseThen = {
  then: (onfulfilled: (arg: unknown) => any) => any
}

/**
 * 为什么需要U extends Promise<unknown>?
 * 由于T extends Promise,如果U不是Promise,则不能再进入MyAwaited
 */
type MyAwaited<T extends Promise<unknown> | PromiseThen> = T extends Promise<infer U>
  ? U extends Promise<unknown>
    ? MyAwaited<U>
    : U
  : T extends { then: (onfulfilled: (arg: infer K) => any) => any }
  ? K
  : T
