// import { Equal } from '@type-challenges/utils'
type Equal<X, Y> = (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y
  ? 1
  : 2
  ? true
  : false

// type Includes<T extends readonly any[], U> = any;
type Includes<T extends readonly any[], U> = T extends [
  infer First,
  ...infer Other
]
  ? Equal<U, First> extends true
    ? true
    : Includes<Other, U>
  : false
