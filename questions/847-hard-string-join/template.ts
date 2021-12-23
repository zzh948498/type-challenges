declare function join<D extends string>(
  delimiter: D
): <P extends string[]>(...parts: P) => Join<D, P>

type Join<D extends string, P extends any[]> = P extends [string, ...infer R]
  ? `${P[0]}${[] extends R ? '' : D}${Join<D, R>}`
  : ''
