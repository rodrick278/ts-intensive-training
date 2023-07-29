type Fibonacci<
  T extends number,
  CurrentIndex extends any[] = [1], // 记录是第几个数
  Prev extends any[] = [],
  Current extends any[] = [1] // 和
> = CurrentIndex['length'] extends T
  ? Current['length']
  : Fibonacci<T, [...CurrentIndex, 1], Current, [...Prev, ...Current]>
