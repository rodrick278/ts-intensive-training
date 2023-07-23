/**
 * 测试case是说根据正则 /^(\+|\-)?(\d*)?(\%)?$/ 来匹配结果,中间的部分只可能是数字或者是空字符串,不会出现字母等
 */

type PercentageParser<A extends string> = A extends `${infer L}${infer R}`
  ? L extends '+' | '-'
    ? R extends `${infer Q}%`
      ? [L, Q, '%']
      : [L, R, '']
    : A extends `${infer Q}%`
    ? ['', Q, '%']
    : ['', A, '']
  : ['', '', '']

