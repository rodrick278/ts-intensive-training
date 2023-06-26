/**
 * 关于ts的内置字符串类型处理
 * https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html#intrinsic-string-manipulation-types
 * 
 * Uppercase的类型是这样的: type Uppercase<S extends string> = intrinsic;
 * 这个intrinsic代表是内置的,ts对于一些字符串的处理,不适合表达,所以提供了一些内置方法
 */

type MyCapitalize<S extends string> = S extends `${infer A}${infer B}`
  ? `${Uppercase<A>}${B}`
  : S

