type CamelCase1<S> = S extends `${infer F}-${infer O}`
  ? O extends Capitalize<O>
    ? `${F}-${CamelCase1<O>}`
    : `${F}${CamelCase1<Capitalize<O>>}`
  : S
