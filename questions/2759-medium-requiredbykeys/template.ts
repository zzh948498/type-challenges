// type RequiredByKeys<T , K> = any
type MergeType<T> = {
  [K in keyof T]: T[K];
}

type RequiredByKeys<
  T,
  K = keyof T,
  P extends keyof T = Extract<keyof T, K>
> = MergeType<Required<Pick<T, P>> & Omit<T, P>>
