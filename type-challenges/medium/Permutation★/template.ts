/**
 * ★★这道题的主要知识点
 * 1. 利用extends会依次拿出作比较的特性
 *  [T, ...Permutation<Exclude<U, T>>] 的第一个T ,如果是'A' | 'B' | 'C',那就会依次是'A','B','C',相当于是做了一个循环
 * 2. 为什么需要 U = T,这里U作为T的拷贝,T在extends循环的时候回变化,而我们需要从完整的'A'|'B'|'C',中剔除T,所以需要保留一份完整的拷贝,也就是U
 * 3. 最复杂的,为什么需要[T] extends [never]?
 *    首先,递归到最后一层,由于U,T是一样的,Exclude会返回never作为T传入下一个Permutation
 *    然后,如果我们使用T extends never,参考下面的例子,typeOfTestExtendsNever并不是true,而是一个never!
 *    这是ts很奇怪的特性,泛型 extends never的时候,是无效的,不管后面的条件是什么,都会返回never
 *    为了解决这个问题,可以采用[T] extends [never]来规避这个特性
 * 
 *    补充: 判断一个类型是不是never的实现:
 *         type IsNeverType<T> = [T] extends [never] ? true : false;
 * 
 *    参考:
 *     https://github.com/type-challenges/type-challenges/issues/614
*      https://github.com/microsoft/TypeScript/issues/23182
 * 
 */



type Permutation<T, U = T> = [T] extends [never]
  ? []
  : T extends any
  ? [T, ...Permutation<Exclude<U, T>>]
  : []

type testExtendsNever<T> = T extends never ? true : false
type typeOfTestExtendsNever = testExtendsNever<never> // => never


