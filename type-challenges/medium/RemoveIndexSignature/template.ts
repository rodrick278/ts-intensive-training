/**
 * 这道题官方解法很多 看不太懂 先pass了
 */

type RemoveIndexSignature<T> = {
  [k in keyof T as (string extends k
    ? never
    : number extends k
    ? never
    : symbol extends k
    ? never
    : k)]: T[k]
}
