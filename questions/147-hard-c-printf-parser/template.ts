type ControlsMap = {
  c: 'char'
  s: 'string'
  d: 'dec'
  o: 'oct'
  h: 'hex'
  f: 'float'
  p: 'pointer'
}

type ParsePrintFormat<T> = T extends `${string}%${infer F}${infer R}`
  ? F extends keyof ControlsMap
    ? [ControlsMap[F], ...ParsePrintFormat<R>]
    : ParsePrintFormat<R>
  : []