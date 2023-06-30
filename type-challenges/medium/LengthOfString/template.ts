/**
 * 关键在于递归和累计长度
 * ts里没办法使用type XX<T extends number = 0> = ..... XX<T+1>这种形式,运算是不可以的
 * 所以可以利用数组的length方法(直接使用S['length']只能得到number类型)
 */

type LengthOfString<S extends string, T extends string[] = []> = S extends `${infer _}${infer B}`
  ? LengthOfString<B, [...T, '_']>
  : T['length']
