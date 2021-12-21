// type ToArray<S, A extends string[] = []> = S extends `${infer F}${infer R}`
//   ? ToArray<R, [...A, F]>
//   : A

// type AllCombinations<
//   S,
//   Arr extends string[] = ToArray<S>,
//   N extends string[] = []
// > = Arr['length'] extends N['length']
//   ? ''
//   : ''|`${Arr[number]}${AllCombinations<S, Arr, ['', ...N]>}`

type Combination<S extends string, U extends string = '', K = S> = [S] extends [
  never
]
  ? U
  : K extends S
    ? Combination<Exclude<S, K>, U | `${U}${K}`>
    : U

type AllCombinations<S extends string> = Combination<StringToUnion<S>>

