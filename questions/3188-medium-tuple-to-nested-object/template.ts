type TupleToNestedObject<T, U> = T extends [infer F, ...infer R]
  ? F extends keyof any
    ? Record<F, TupleToNestedObject<R, U>>
    : never
  : U
