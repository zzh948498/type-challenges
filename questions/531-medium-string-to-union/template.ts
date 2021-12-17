type StringToUnion<T extends string> = T extends `${infer First}${infer Other}`
  ? First | StringToUnion<Other>
  : never
