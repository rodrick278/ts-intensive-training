type Pop<T extends any[]> = T extends [...infer U, any] ? U : []
// type Push<T extends unknown[], E> = [...T,E]
type Shift<T extends unknown[]> = T extends [infer _, ...infer U] ? U : []
// type Unshift<T extends unknown[], E> = [E, ...T]
