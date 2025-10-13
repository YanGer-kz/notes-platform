import './button.style.css'

import { defineComponent, type SetupContext } from 'vue'

import type { ButtonPorpsType, ButtonEmitsType, IconType } from './button.types'

import { UIIcon } from '../icon'

export default defineComponent((props: ButtonPorpsType, ctx: SetupContext<ButtonEmitsType>) => {
  const getLabel = (label?: string) => {
    if (!label) {
      return null
    }

    return (
      <span class="button-label">
        {
          label
        }
      </span>
    )
  }

  const getIcon = (icon: IconType | undefined, active: boolean) => {
    if (!icon || !active) {
      return null
    }

    return (
      <UIIcon icon={icon}/>
    )
  }

  const handleClick = (event: Event) => {
    ctx.emit('click', event)

    return null
  }

  return () => (
    <>
      <button { ...ctx.attrs } class={["ui__button", `ui__button-${props.severity ?? 'primary'} ui__button-${props.size ?? 'base'}`]} onClick={handleClick}>
        {
          getIcon(props.icon, props.position === undefined || props.position === 'left')
        }

        {
          getLabel(props.label)
        }

        {
          getIcon(props.icon, props.position === 'right')
        }
      </button>
    </>
  )
}, {
  props: [
    'icon',
    'position',
    'label',
    'severity',
    'size',
  ],

  emits: [
    'click',
  ],
})
