type CamelCaseX<S extends string> = S extends `${infer L}_${infer R}`
  ? `${L}${CamelCaseX<Capitalize<R>>}`
  : S;
type CamelCase<S extends string> = CamelCaseX<Lowercase<S>>;
type tes12 = CamelCase<"foo_bar_hello_world">;
