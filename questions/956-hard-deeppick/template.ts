type DeepPickX<Obj, S> = S extends `${infer F}.${infer R}`
  ? {
    [K in F]: K extends keyof Obj
      ? R extends string
        ? DeepPick<Obj[K], R>
        : Obj[K]
      : unknown;
  }
  : S extends keyof Obj
    ? { [K in S]: Obj[S] }
    : unknown

type DeepPick<Obj, S> = UnionToIntersection<DeepPickX<Obj, S>>
