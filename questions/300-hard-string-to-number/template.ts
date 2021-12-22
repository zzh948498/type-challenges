type ToNumber<
  S extends string,
  R extends any[] = []
> = S extends `${R['length']}` ? R['length'] : ToNumber<S, [...R, 0]>
