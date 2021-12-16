// type LookUp<U, T> = U extends { type: infer Type }
//   ? Type extends T
//     ? U
//     : never
//   : never

type LookUp<U, T> = U extends { type: T } ? U : never
