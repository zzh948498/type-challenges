type Fill<
  T extends unknown[],
  N,
  Start extends number = 0,
  End extends number = T['length'],
  Res extends any[] = [],
  Change = false
> = T extends [infer F, ...infer R]
  ? Res['length'] extends End
    ? Fill<R, N, Start, End, [...Res, F], false>
    : Res['length'] extends Start
      ? Fill<R, N, Start, End, [...Res, N], true>
      : Change extends true
        ? Fill<R, N, Start, End, [...Res, N], Change>
        : Fill<R, N, Start, End, [...Res, F], Change>
  : Res

type test45 = Fill<[1, 2, 3], 0, 0, 0>
