import type { IconType } from '../icon'

export type ButtonIconPositionType = 'left' | 'right'
export type ButtonSeverityType = 'primary' | 'secondary'
export type ButtonSizeType = 'small' | 'base' | 'large'

export type ButtonPorpsType = {
  icon?: IconType
  position?: ButtonIconPositionType
  label?: string
  severity?: ButtonSeverityType
  size?: ButtonSizeType
}

export type ButtonEmitsType = {
  click: (event: Event) => void
}

export { IconType }
