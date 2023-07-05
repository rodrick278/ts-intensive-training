/**
 * Uppercase 、Lowercase、Capitalize 、Uncapitalize。 分别是大写、小写，首字母大写，首字母小写
 * 利用非大写开头首位小写后等于本身的特性判断
 */

type KebabCase<S extends string> = S extends `${infer A}${infer B}`
  ? B extends Uncapitalize<B>
    ? `${Uncapitalize<A>}${KebabCase<B>}`
    : `${Uncapitalize<A>}-${KebabCase<B>}`
  : `${Uncapitalize<S>}`
