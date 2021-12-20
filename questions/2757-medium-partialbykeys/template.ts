type MergeType1<T> = {
  [K in keyof T]: T[K];
}

type PartialByKeys<
  T,
  K = keyof T,
  P extends keyof T = Extract<keyof T, K>
> = MergeType1<Partial<Pick<T, P>> & Omit<T, P>>
