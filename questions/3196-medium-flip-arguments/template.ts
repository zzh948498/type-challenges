type FlipArguments<T> = T extends (...args: infer I) => infer O
  ? (...args: Reverse<I>) => O
  : never
