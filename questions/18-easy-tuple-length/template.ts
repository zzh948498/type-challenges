// type Length<T extends any> = any

type Length<T> = T extends readonly any[] ? T['length'] : never
