type ReplaceKeys<U, T, Y> = U extends U
  ? {
    [Key in keyof U]: Key extends T
      ? Key extends keyof Y
        ? Y[Key]
        : never
      : U[Key];
  }
  : never
