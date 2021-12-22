declare function SimpleVue<D, C, M>(options: Options<D, C, M>): any
type GetC<C> = C extends Record<string, (...agrs: any[]) => any>
  ? { [K in keyof C]: ReturnType<C[K]> }
  : never
type Options<D, C, M> = {
  data: (this: {}) => D
  computed: C & ThisType<D & GetC<C> & M>
  methods: M & ThisType<D & GetC<C> & M>
}
