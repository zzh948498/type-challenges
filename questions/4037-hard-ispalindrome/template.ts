type IsPalindrome<
  T extends string | number,
  K = `${T}`
> = K extends `${infer L}${infer R}`
  ? R extends ''
    ? true
    : K extends `${L}${infer S}${L}`
      ? IsPalindrome<S>
      : false
  : true
