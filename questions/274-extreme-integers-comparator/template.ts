enum Comparison {
  Greater,
  Equal,
  Lower,
}
type IsPositiveInteger<N extends number> = `${N}` extends `-${string}` ? false : true
type ParsePositiveInteger<N extends number> = `${N}` extends `-${infer F}` ? F : N
type Greater<A, B, R extends 0[] = []> = A extends `${R['length']}` | `-${R['length']}`
  ? false
  : B extends `${R['length']}` | `-${R['length']}`
    ? true
    : Greater<A, B, [...R, 0]>
type Comparator<A extends number, B extends number> = A extends B
  ? Comparison.Equal
  : IsPositiveInteger<A> extends true
    ? IsPositiveInteger<B> extends true
      ? Greater<`${A}`, `${B}`> extends true
        ? Comparison.Greater
        : Comparison.Lower
      : Comparison.Greater
    : IsPositiveInteger<B> extends true
      ? Comparison.Lower
      : Greater<`${A}`, `${B}`> extends false
        ? Comparison.Greater
        : Comparison.Lower
