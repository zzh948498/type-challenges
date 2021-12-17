// type AnyOf<T extends readonly any[]> = T extends [infer F, ...infer Other]
//   ? F extends 0 | '' | { [key: string]: never} | [] | false
//     ? AnyOf<Other>
//     : true
//   : false

type AnyOf<T extends readonly any[]> = T[number] extends
| 0
| ''
| { [key: string]: never }
| []
| false
  ? false
  : true
