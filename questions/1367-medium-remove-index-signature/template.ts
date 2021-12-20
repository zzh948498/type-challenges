type ExcludeSignature<K> = string extends K
  ? never
  : number extends K
  ? never
  : symbol extends K
  ? never
  : K;

type RemoveIndexSignature<T> = {
  [K in keyof T as ExcludeSignature<K>]: T[K];
};
