// type TupleToObject<T extends readonly any[]> = any

type TupleToObject<T extends readonly any[]> = {
  [P in T[number]]: P;
}
