/**
 *
 * keyof (Foo & Bar) => "name" | "age" | "gender"
 * keyof (Foo | Bar) => "name" | "age"
 */

// type Diff<O, O1> = {
//   [K in Exclude<keyof (O & O1), keyof (O | O1)>]: (O & O1)[K]
// }

type Diff<O, O1> = Omit<O & O1, keyof (O | O1)>