type TrimRight<S extends string> = S extends `${infer L}${' ' | '\t' | '\n'}`
  ? TrimRight<L>
  : S
