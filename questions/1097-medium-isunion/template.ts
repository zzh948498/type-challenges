type IsUnion<T, O = T> = T extends O ? ([O] extends [T] ? false : true) : never
