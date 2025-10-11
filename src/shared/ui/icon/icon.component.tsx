import { defineComponent, type SetupContext } from 'vue'

import type { IconPropsType, IconEmitsType } from './icon.types'

export default defineComponent((props: IconPropsType, ctx: SetupContext<IconEmitsType>) => {
  return () => (
    <>
    </>
  )
}, {
  props: [
    'icon',
  ],
})
