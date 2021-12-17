type Absolute<T extends number | string | bigint> =
  `${T}` extends `${infer First}${infer Other}`
    ? First extends '-'
      ? `${Other}`
      : `${T}`
    : `${T}`
