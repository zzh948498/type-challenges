// type MyOmit<T, K> = any
type MyOmit<T, K> = Pick<T, Exclude<keyof T, K>>
