type Replace<
  S extends string,
  From extends string,
  To extends string
> = From extends ''
  ? S
  : S extends `${infer B}${From}${infer A}`
    ? `${B}${To}${A}`
    : S
