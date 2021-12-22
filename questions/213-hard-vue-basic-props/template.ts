declare function VueBasicProps<P, D, C, M>(
  options: VueBasicPropsOptions<P, D, C, M>
): any
type GetComputed<C> = {
  [K in keyof C]: C[K] extends (...args: any) => infer R ? R : never;
}
type GetP<P> = {
  [K in keyof P]: {} extends P[K]
    ? any
    : P[K] extends { type: infer O }
      ? O extends any[]
        ? ConvertInstanceType<O[number]>
        : ConvertInstanceType<O>
      : ConvertInstanceType<P[K]>;
}

type ConvertInstanceType<T> = T extends new (args: any) => any
  ? T extends typeof String | typeof Boolean | typeof Number
    ? ReturnType<T>
    : InstanceType<T>
  : T

type VueBasicPropsOptions<P, D, C, M> = {
  props: P
  data: (this: GetP<P>) => D
  computed: C & ThisType<D & GetComputed<C> & M>
  methods: M & ThisType<GetP<P> & D & GetComputed<C> & M>
}
