type Trunc<S extends number | string> = `${S}` extends `.${infer B}`
  ? '0'
  : `${S}` extends `${infer A}.${infer B}`
  ? A
  : `${S}`
