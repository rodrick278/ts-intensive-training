type TrimRight<S extends string> = S extends `${infer C}${Space}` ? TrimRight<C> : S


