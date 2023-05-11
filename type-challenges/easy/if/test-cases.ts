import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<If<true, 'a', 'b'>, 'a'>>,
  Expect<Equal<If<false, 'a', 2>, 2>>,
]

// 仅仅在strictNullChecks true的情况下才可以成立
// 文档见https://www.typescriptlang.org/docs/handbook/type-compatibility.html#handbook-content
// @ts-expect-error
type error = If<null, 'a', 'b'>