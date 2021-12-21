type Tuple2Union<T> = T extends Array<infer K> ? K : never;
type Without<T, U> = T extends [infer F, ...infer R]
  ? F extends U | Tuple2Union<U>
    ? Without<R, U>
    : [F, ...Without<R, U>]
  : [];
