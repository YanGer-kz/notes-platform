import './button.style.css'

import { defineComponent, type SetupContext } from 'vue'

import type { ButtonPorpsType, ButtonEmitsType } from './button.types'
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

  const getIcon = (icon: ButtonPorpsType['icon'], active: boolean) => {
    if (!icon || !active) {
      return null
    }

    return (
      <UIIcon icon={icon}/>
    )
  }

  const handleClick = (event: Event) => {
    return ctx.emit('click', event)
  }

  return () => (
    <>
      <button { ...ctx.attrs } class="ui__button" onClick={handleClick}>
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
  ],

  emits: [
    'click',
  ],
})
