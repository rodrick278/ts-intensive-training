/**
 * 1. 由于要循环,需要吧string转union
 * 2. 需要判断never 防止一直递归
 * 3. 为什么要 用 '' | xxxx ?
 * 因为如果不加,第一轮是 'A${AllCombinations<never, 'BC'>',这样无论如何,结果肯定是'ABC',但是如果加上''
 * 那走到底的时候会有`C | ''`, `A${'B'|'C'|''}`这种的结果就是 A|AB|AC
 */

type AllCombinations<S extends string, US extends string = StringToUnion<S>> = [US] extends [never]
  ? ''
  : '' | { [C in US]: `${C}${AllCombinations<never, Exclude<US, C>>}` }[US]


