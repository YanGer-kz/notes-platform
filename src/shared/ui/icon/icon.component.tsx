import { defineComponent, type SetupContext } from 'vue'

import type { IconPropsType, IconEmitsType } from './icon.types'

import icons from './icons'

export default defineComponent((props: IconPropsType, ctx: SetupContext<IconEmitsType>) => {
  const getIcon = (icon: IconPropsType['icon']) => {
    return icons[icon].map((item, i) => (
      <path key={i} d={item}/>
    ))
  }

  return () => (
    <>
      <svg { ...ctx.attrs } class="ui__icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        {
          getIcon(props.icon)
        }
      </svg>
    </>
  )
}, {
  props: [
    'icon',
  ],
})
