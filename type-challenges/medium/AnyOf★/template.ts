/**
 * 注意任何一个对象 {key:val} extends {} 都是true,空对象的表达方式是{ [key: string]: never }  一个值为never的对象
 */

type AnyOfFaleUnion = 0 | null | undefined | [] | { [key: string]: never } | false | ''

type AnyOf<T extends readonly any[]> = T[number] extends AnyOfFaleUnion ? false : true
