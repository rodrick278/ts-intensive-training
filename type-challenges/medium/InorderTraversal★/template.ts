interface TreeNode {
  val: number
  left: null | TreeNode
  right: null | TreeNode
}

/**
 * 1. 为什么要使用 [T] extends [TreeNode] 中括号的方式, 如果T extends TreeNode会导致层级过深,
 * Conditional Type 在比较的时候会有resolve和defer两种选择,层级过深的情况是因为比较中,left和right都是TreeNode类型,
 * 所以会无止境地resolve,而中括号的方式,编译中会认为取决于多个条件则暂时会defer(这一点其实没太理解,有点抽象)
 * 原文:'Otherwise, the condition depends on one or more type variables and the conditional type is deferred.'
 *
 * 2. 为什么不用null判断,很简单,不是null不代表你就是TreeNode类型,所以不可以用left||right属性
 * 参考:
 * https://github.com/type-challenges/type-challenges/issues/8046
 * https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-8.html#conditional-types
 */
// type InorderTraversal<T extends TreeNode | null> = [T] extends [TreeNode]
//   ? [...InorderTraversal<T['left']>, T['val'], ...InorderTraversal<T['right']>]
//   : []

/**
 * 这种情况下对left和right都做了严格限制就不会有过深的问题
 */
type InorderTraversal<T extends TreeNode | null> = T extends TreeNode
  ? [
      ...(T['left'] extends TreeNode ? InorderTraversal<T['left']> : []),
      T['val'],
      ...(T['right'] extends TreeNode ? InorderTraversal<T['right']> : [])
    ]
  : []
