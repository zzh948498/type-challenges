type ControlsMap2 = {
  s: string;
  d: number;
};

type Format<T extends string> = T extends `${string}%${infer F}${infer R}`
  ? F extends keyof ControlsMap2
    ? (F: ControlsMap2[F]) => Format<R>
    : Format<R>
  : string;

type tt12 = Format<"a%dbc%s">;
