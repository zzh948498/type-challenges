type StringToNumber<S extends string, R extends any[] = []> = S extends `${R['length']}` ? R['length'] : StringToNumber<S, [...R, 0]>

type Enum<T extends readonly string[], N extends boolean = false> = {
  readonly [K in keyof T as T[K] extends string
    ? Capitalize<T[K]>
    : never]: K extends string ? (N extends false ? T[K] : StringToNumber<K>) : never;
}
