type LengthOfString<
  S extends string,
  Result extends any[] = []
> = S extends `${string}${infer Other}`
  ? LengthOfString<Other, [...Result, string]>
  : Result['length']
