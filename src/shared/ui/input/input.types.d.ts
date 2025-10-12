export type InputVariant = 'default' | 'text' | 'outlined'

export type InputPropsType = {
  value: string
  fulid?: boolean
  placeholder?: string
  variant?: InputVariant
}

export type InputEmitsType = {
  value: (value: string) => void
}
