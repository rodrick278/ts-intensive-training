/**
 * 这题感觉难度应该是hard
 * 知识点:
 * 1. (unknow|任何) 都可以认为是一个unknow,下面testIsUnionSub就是true
 * 2. never extends never直接返回never
 * 3. IsUnionSub展示的部分,是为了处理单个值的情况
 *    3.1 never时,返回的是never
 *    3.2 单个值的时候C extends T的T是遍历值,如果C只有一个值,那么就是true(unknow|任何 也是算一个值)
 *    3.3 如果是多个值,返回的是true|1
 */

type IsUnion<T, C = T> = (T extends T ? (C extends T ? true : 1) : 2) extends true ? false : true

type IsUnionSub<T, C = T> = T extends T ? (C extends T ? true : 1) : 2

type testIsUnionSub = IsUnionSub<unknown | '123'>
