/**
 * 这里提一下 Equal 的实现:
 * https://stackoverflow.com/questions/68961864/how-does-the-equals-work-in-typescript/68963796
 * <T>() => T extends X ? 1 : 2 称为函数A
 * <T>() => T extends Y ? 1 : 2 称为函数B
 * The assignability rule for conditional types <...> requires that the types after extends be " identical " as that is defined by the checker
 * 条件类型 <...> 的可分配性规则要求扩展后的类型与检查器定义的类型“相同”
 * 也就是说 这里我们把 A B 看成一个"单纯"的类型,A extends B 就像是 number extends string 一样
 * 只有在X Y 完全相等的情况下, A extends B 才能符合要求
 */
type Equal<X, Y> = (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2
  ? true
  : false
//? 一个疑问 这里为什么Test是true? 
// type Equal<X, Y> = (<T>() => X extends T ? 1 : 2) extends <T>() => Y extends T ? 1 : 2
//   ? true
//   : false

// type Test = Equal<{}, { a: 'A' }>

/**
 * 这种在 Expect<Equal<Includes<[boolean, 2, 3, 5, 6, 7], false>, false>> 报错,extends只是继承,不是equal
 */
// export type Includes<T extends readonly any[], U> = U extends T[number] ? true : false
type Includes<T extends readonly any[], U> = T extends [infer First, ...infer Arr]
  ? Equal<First, U> extends true
    ? true
    : Includes<Arr, U>
  : false

