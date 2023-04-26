/**
1. 可以用三元表达式 
2. 判断是不是空数组 T === [] 使用extends 
 */
// type First<T extends any[]> = T extends [] ? never : T[0]

/**
 * 判断T.length === 0 用 T["length"] extends 0
 */
// type First<T extends any[]> = T["length"] extends 0 ? never : T[0]

/**
  type Test<T extends any[]> = T[0]
  type aa = Test<[]> //空数组的时候 aa 是undefined
  所以判断 undefined extends T[number] 找不到值的情况下说明数组为空
  如果数组就是[undefined] 也不影响判断正确性
 */
// type First<T extends any[]> = T[0] extends T[number] ? T[0] : never

/**
 * infer 代表待推断的值,这里用infer进行解构,相当于T必须满足至少有一位长度(一位长度的时候,args是never),
 * 注意三元表达式冒号后面是拿不到first或者args的,因为T不满足extends的条件,自然不存在first或者args
 */
type First<T extends any[]> = T extends [infer first, ...infer args] ? first : never

