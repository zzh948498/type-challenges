type Zip<T extends any[], U extends any[]> = T extends [infer T1, ...infer T2]
  ? U extends [infer U1, ...infer U2]
    ? [[T1, U1], ...Zip<T2, U2>]
    : []
  : [];

