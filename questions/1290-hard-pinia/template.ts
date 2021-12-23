declare function defineStore<S, G, A>(store: Store<S, G, A>): GetG<G> & A &S;
type Store<S, G, A> = {
  id: string;
  state: () => S;
  getters: G & ThisType<A & S & GetG<G>>;
  actions: A & ThisType<A & S & GetG<G>>;
};
type GetG<G> = {
  [K in keyof G]: G[K] extends (...args: any[]) => infer R ? R : never;
};
