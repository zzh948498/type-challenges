type AppendToObject<T, U extends keyof any, V> = {
  [Key in keyof T | U]: Key extends keyof T ? T[Key] : V;
}
