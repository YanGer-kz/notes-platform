export type InputType = 'text' | 'password'
export type InputVariantType = 'default' | 'text' | 'outlined'

export type InputPropsType = {
  type?: InputType
  value: string
  fulid?: boolean
  placeholder?: string
  variant?: InputVariantType
}

export type InputEmitsType = {
  value: (value: string) => void
}
