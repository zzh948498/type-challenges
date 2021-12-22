type Get<T, K extends string> = K extends `${infer F}.${infer R}`
  ? Get<T[F & keyof T], R>
  : T[K & keyof T];
