/**
 * 一个数组P存长度
 * 长度不等于Start的时候,值不改动且P增长
 * 长度等于Start的时候,开始替换,P增长
 * P等于end的时候,直接返回T就行,
 * 但是P一直在增长,为了判断P的长度是否在Start和End中间,需要用一个bool值记录
 */

type Fill<
  T extends unknown[],
  N,
  Start extends number = 0,
  End extends number = T['length'],
  P extends any[] = [],
  Flag extends boolean = P['length'] extends Start ? true : false
> = P['length'] extends End
  ? T
  : T extends [infer A, ...infer B]
  ? Flag extends true
    ? [N, ...Fill<B, N, Start, End, [...P, ''], true>]
    : [A, ...Fill<B, N, Start, End, [...P, '']>]
  : T
