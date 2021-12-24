type GetReadonlyKeys<T> = keyof {
  [K in keyof T as Equal<Readonly<Pick<T, K>>, Pick<T, K>> extends true
    ? K
    : never]: any;
};
