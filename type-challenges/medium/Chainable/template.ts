/**
 * 题目需求:
 * 1. option 增加链结果的类型, get获取链类型
 * 2. 增加的时候,如果有重复类型,取后者,覆盖前者
 * 3. 如果有重复类型 要报错
 *
 * 解答拆分:
 * 1. Chainable<T>用来作为答案,T必须给基础类型{},否则结果都会由于是any&xxx,导致变为any
 * 2. 递归传入类型,传入的类型是去掉K后的T和新加入K的T的相交 Omit<T, K> & Record<K, V>
 * 3. 重复类型在入参中做限制key: K extends keyof T ? never : K,
 *! 4. K,V泛型的使用,在这里不用泛型没法处理V的类型传递,区分一下泛型和infer的使用场景
 *! 5. 必须要用Record<K, V> 也就是 { [P in K]: V } 构建新的类型
 *     不可以直接用{K:V},这样构建出来的是{K:any,V:any}这种
 */

type Chainable<T = {}> = {
  option<K extends string, V>(
    key: K extends keyof T ? never : K,
    value: V
  ): Chainable<Omit<T, K> & Record<K, V>>
  get(): T
}
