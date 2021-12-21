// type Chunk<
//   T extends any[],
//   C extends number,
//   S extends any[] = []
// > = S['length'] extends C
//   ? [S, ...Chunk<T, C>]
//   : T extends [infer F, ...infer R]
//     ? Chunk<R, C, [...S, F]>
//     : S['length'] extends 0
//       ? []
//       : [S]
