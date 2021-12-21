type IndexOf<T, U, Res extends any[] = []> = T extends [infer F, ...infer R]
  ? F extends U
    ? Res['length']
    : IndexOf<R, U, [...Res, F]>
  : -1
