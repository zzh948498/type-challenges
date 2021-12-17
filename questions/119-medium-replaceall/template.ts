type ReplaceAll<
  S extends string,
  From extends string,
  To extends string
> = From extends ''
  ? S
  : S extends `${infer B}${From}${infer A}`
    ? `${B}${To}${ReplaceAll<A, From, To>}`
    : S
