type MyExclude<T, U> = T extends U ? never : T

/**
 * 分布式条件类型 Distributive Conditional Types
 * https://www.typescriptlang.org/docs/handbook/2/conditional-types.html#distributive-conditional-types
 * 知识点梳理:
 * 1. union类型的 T extends U, 返回的两个结果 会对T 循环每一个值做筛选,筛选结果分别是:可以继承U的union和不可以继承U的union
 * 2. union类型中如果有never, 不会展示,比如 a | b | never === a | b
 * 3. 交叉类型中有never只会返回never, 比如 a & b & never === never
 * 
 * 一些有意思的玩法:
 * type ToArray<Type> = Type extends any ? Type[] : never; // 所有类型转换为对应数组类型
 * type Flatten<T> = T extends any[] ? T[number]: T // 数组转换为union类型
 */



/**
 * type MyExclude<T, U> = T extends U ? 1 : 2
 * type aaa = MyExclude<'a' | 'b' | 'c', 'a'>
 * 上述情况下 aaa是 1|2
 *
 * extends的特性: 当T可能可以继承U时,会得到1(a继承a),当T可能不可以继承U时(b不能继承a,c也不行),此时会得到2
 *
 * 那么 1. type MyExclude<T, U> = T extends U ? T : 1  => aaa是 "a" | 1
 *     2. type MyExclude<T, U> = T extends U ? 1 : T  => aaa是 "b" | "c" | 1
 *  情况1中三元表达式返回的T是可以继承的情况 也就是a
 *  情况2中三元表达式返回的T是不可以继承的情况 也就是b|c
 *  这种方式可以对T 进行筛选! 要记住!
 * 情况2的T就是我们要的结果,但是我们不需要这个1,可以利用 union中never不会返回的特性,把1改为never
 */


