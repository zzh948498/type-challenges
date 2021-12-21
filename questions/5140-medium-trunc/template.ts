type Trunc<T extends number | string> = `${T}` extends `${infer L}.${string}` ? L: `${T}`
