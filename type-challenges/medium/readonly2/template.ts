/**
 * 1. 测试case里是Alike,不要求类型完全一致
 * 2. K 可能为空,空的时候,等于Readonly<T>,所以默认值是keyof T
 * 3. 没有办法根据P是否extends K来动态增加readonly
 * 4. 将需要处理的K值,和不需要处理的其他值分开处理,
 * 要注意的是这里K的值代表要变为readonly,但是如果不在K内但是原来就是readonly 的,要保持不变
 * 5. 可以用Omit配置Pick来实现
 */

type MyReadonly2<T, K extends keyof T = keyof T> = {
  [P in keyof T as P extends K ? never : P]: T[P]
} & {
  readonly [P in K]: T[P]
}
// 用自带的方法
// type MyReadonly2<T, K extends keyof T = keyof T> = Readonly<Pick<T, K>> & Omit<T, K>


