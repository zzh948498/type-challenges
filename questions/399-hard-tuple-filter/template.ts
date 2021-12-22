type FilterOut<T extends any[], F> = T extends [infer First, ...infer R]
  ? [First] extends [F]
    ? FilterOut<R, F>
    : [First, ...FilterOut<R, F>]
  : [];
