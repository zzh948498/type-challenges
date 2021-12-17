type AppendArgument<Fn, A> = Fn extends (...args: infer I) => infer O
  ? (...args: [...I, A]) => O
  : never
