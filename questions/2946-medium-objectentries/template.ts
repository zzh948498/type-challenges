type ObjectEntries<T> = Required<T> extends Record<infer K, unknown>
  ? K extends K
    ? [K, Required<T>[K]]
    : never
  : never
