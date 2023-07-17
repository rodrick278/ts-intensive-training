type RequiredByKeys<T, K extends keyof T = keyof T> = Omit<Required<Pick<T, K>> & Omit<T, K>, never>
