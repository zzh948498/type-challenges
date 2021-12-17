type TrimSpace = ' ' | '\n' | '\t'

// type Trim<S extends string> = S extends `${TrimSpace}${infer Other}` ? Trim<Other> : S extends `${infer Other}${TrimSpace}` ? Trim<Other> : S
type Trim<S extends string> = S extends `${Space}${infer T}` | `${infer T}${Space}` ? Trim<T> : S
