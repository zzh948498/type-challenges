// type MyAwaited = any

type MyAwaited<T> = T extends Promise<infer O>
  ? O extends Promise<infer I>
    ? MyAwaited<Promise<I>>
    : O
  : T
