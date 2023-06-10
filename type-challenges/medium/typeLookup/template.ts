type LookUp<U, T> = U extends {type:T} ? U :never

/**
type LookUp<U, T> = {
  [K in T]: U extends { type: T } ? U : never
}[T]
 */
