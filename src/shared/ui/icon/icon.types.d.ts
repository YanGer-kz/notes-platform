import type icons from './icons'

export type IconType = keyof typeof icons

export type IconPropsType = {
  icon: IconType
}

export type IconEmitsType = {
}
