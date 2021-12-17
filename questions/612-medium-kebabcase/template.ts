type KebabCase<S> = S extends `${infer F}${infer O}`
  ? O extends Uncapitalize<O>
    ? `${Uncapitalize<F>}${KebabCase<O>}`
    : `${Uncapitalize<F>}-${KebabCase<Uncapitalize<O>>}`
  : S
