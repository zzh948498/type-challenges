// type PickByType<T, U> = Pick<
// T,
// {
//   [K in keyof T]: T[K] extends U ? K : never;
// }[keyof T]
// >

type PickByType<T, U> = {
  [K in keyof T as T[K] extends U ? K : never]: U;
}
