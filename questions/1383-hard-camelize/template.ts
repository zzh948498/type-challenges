type CamelizeString<S> = S extends `${infer F}_${infer R}`
  ? `${F}${Capitalize<R>}`
  : S
type Camelize<T> = T extends Record<string, unknown>
  ? {
    [K in keyof T as CamelizeString<K>]: Camelize<T[K]>;
  }
  : T extends any[]
    ? {
      [K in keyof T]: Camelize<T[K]>;
    }
    : T
