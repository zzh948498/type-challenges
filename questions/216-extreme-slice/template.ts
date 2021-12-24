type PopArray<T extends any[]> = T extends [...infer K, any] ? K : never

type ParseNumber<
  Arr extends any[],
  N extends number,
  Res extends any[] = []
> = `${N}` extends `-${infer S}`
  ? `${Arr['length']}` extends `${S}`
    ? Res['length']
    : ParseNumber<PopArray<Arr>, N, [...Res, 0]>
  : N
type SliceX<
  Arr extends any[],
  Start,
  End,
  Res extends any[] = [],
  Index extends any[] = [],
  Change = false
> = Arr extends [infer F, ...infer R]
  ? Index['length'] extends End
    ? Res
    : Index['length'] extends Start
      ? SliceX<R, Start, End, [...Res, F], [F, ...Index], true>
      : SliceX<
      R,
      Start,
      End,
      Change extends true ? [...Res, F] : [...Res],
      [F, ...Index],
      Change
      >
  : Res

type Slice<
  Arr extends any[],
  Start extends number = 0,
  End extends number = Arr['length']
> = SliceX<Arr, ParseNumber<Arr, Start>, ParseNumber<Arr, End>>
