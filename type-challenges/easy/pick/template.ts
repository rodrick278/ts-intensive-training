/**
 * 1. 返回对象 = {}
 * 2. 遍历union type K 联合类型的值是P
 * 3. 对象的key是 P,value就是 T[P] 和js语法obj[key]一样
 * 4. K中的值可能不是 Object.keys(T)的值, 所以约束 K extends keyof T, 注意是keyof, P是key
 */

type MyPick<T, K extends keyof T> = {
  [P in K]: T[P]
}
