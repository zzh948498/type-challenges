// type DropString<S, R> = S extends `${infer F}${infer Rest}`
//   ? `${F extends String2Un<R> ? '' : F}${DropString<Rest, R>}`
//   : ''
// type String2Un<S> = S extends `${infer F}${infer R}` ? F | String2Un<R> : never

type DropString<
  T extends string,
  K extends string
> = K extends `${infer A}${infer Res}` ? DropString<DropOne<T, A>, Res> : T

type DropOne<
  T extends string,
  K extends string
> = T extends `${infer A}${K}${infer B}` ? DropOne<`${A}${B}`, K> : T
