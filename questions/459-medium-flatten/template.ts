type Flatten<T> = T extends [infer F, ...infer O]
  ? F extends Array<any>
    ? [...Flatten<F>, ...Flatten<O>]
    : [F, ...Flatten<O>]
  : T
