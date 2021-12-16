type TupleToUnion<T extends any[]> = T extends Array<infer K> ? K : never
