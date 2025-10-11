import type { IconPropsType } from '../icon/icon.types'

export type ButtonPorpsType = {
  icon?: IconPropsType['icon']
  position?: 'left' | 'right'
  label?: string
}

export type ButtonEmitsType = {
  click: (event: Event) => void
}
