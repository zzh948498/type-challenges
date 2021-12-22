type CapitalizeTraverse<S extends string> = S extends `${infer F}${infer R}`
  ? F extends " " | "," | "."
    ? `${F}${CapitalizeTraverse<Capitalize<R>>}`
    : `${F}${CapitalizeTraverse<R>}`
  : "";


type CapitalizeWords<S extends string> = Capitalize<CapitalizeTraverse<S>>

