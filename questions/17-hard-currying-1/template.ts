declare function Currying<T>(fn: T): Curried<T>;
type Curried<T> = T extends (...args: infer I) => infer O
  ? I extends [infer F, ...infer R]
    ? (arg: F) => Curried<(...args: R) => O>
    : O
  : never
