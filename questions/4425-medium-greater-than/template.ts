type ArrayWithLength<
  T extends number,
  U extends any[] = []
> = U['length'] extends T ? U : ArrayWithLength<T, [0, ...U]>
type test = ArrayWithLength<2>[1]
type GreaterThan<T extends number, U extends number> = T extends U
  ? false
  : ArrayWithLength<T> extends [...ArrayWithLength<U>, ...any]
    ? true
    : false
