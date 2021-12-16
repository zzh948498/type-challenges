declare function PromiseAll<T extends any[]>(
  value: readonly [...T]
): Promise<{
  [K in keyof T]: T[K] extends Promise<infer U> ? U : T[K];
}>
