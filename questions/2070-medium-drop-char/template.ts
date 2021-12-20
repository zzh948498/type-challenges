type DropChar<S, C> = C extends '' ? DropChar<S, ' '>
  : S extends `${infer F}${infer R}`
    ? `${F extends C ? '' : F}${DropChar<R, C>}`
    : ''
