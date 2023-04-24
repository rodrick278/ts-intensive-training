/**
 * 1. as const 意义: 将定义的值转换为字面量类型保证其不可修改
 * 2. js变量用作ts时加上typeof
 * 3. 遍历数组,要拿下标,用[P in keyof T],要拿值,用[P in T[number]]
 * 4. // @ts-expect-error 代表下一行代码应该会报错,相当于是一个断言,断言下一行报错的意思
 */

/**
  let str = '123'
  type t1 = typeof str // t1 是stirng
  let str2 = '123' as const
  type t2 = typeof str2 // t2 是'123'
  const str3 = '123'
  type t3 = typeof str3 // t3 是'123'
  const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const
  type t4 = typeof tuple // t4 是 readonly ["tesla", "model 3", "model X", "model Y"]
 */

// =================
type TupleToObject<T extends readonly (string | number)[]> = {
  // [P in keyof T]: P // 这样是拿到索引: readonly ["0", "1", "2", "3"]
  // [P in keyof T]: T[P] // 这样是值列表: readonly ["tesla", "model 3", "model X", "model Y"]
  [P in T[number]]: P
}

