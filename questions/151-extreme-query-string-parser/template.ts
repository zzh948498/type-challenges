type String2Tuple<S extends string> = S extends `${infer F}&${infer R}`? [F, ...String2Tuple<R>] : [S]
type ParseStringTuple<T extends string[]> = T extends Array<infer S> ? S extends `${infer F}=${infer R}` ? [F, R] : [S, true] :[]


type Tuple2Object<T extends [string, any]> = {
  [K in T as K[0]]: IsUnion<K[1]> extends false? K[1] : UnionToTuple<K[1]>;
};

type ParseQueryString<S extends string> = Tuple2Object<ParseStringTuple<String2Tuple<S>>>;
