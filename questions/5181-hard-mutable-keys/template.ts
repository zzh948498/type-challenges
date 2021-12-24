type MutableKeys<T> = keyof {
  [K in keyof T as Equal<Readonly<Pick<T, K>>, Pick<T, K>> extends true
    ? never
    : K]: any;
}
