import './avatar.style.css'

import { defineComponent, type SetupContext } from 'vue'

import type { AvatarPropsType, AvatarEmitsType } from './avatar.types'

export default defineComponent((props: AvatarPropsType, ctx: SetupContext<AvatarEmitsType>) => {
  const getLabel = (label?: string) => {
    if (!label) {
      return null
    }

    return (
      <span class="avatar-label">
        {
          label
        }
      </span>
    )
  }

  return () => (
    <>
      <div { ...ctx.attrs } class="ui__avatar">
        {
          getLabel(props.label)
        }
      </div>
    </>
  )
}, {
  props: [
    'label',
  ],
})
