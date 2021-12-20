type Shift<T> = T extends [any, ...infer R] ? R : never
