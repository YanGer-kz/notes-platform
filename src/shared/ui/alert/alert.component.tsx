import './alert.style.css'

import { defineComponent, type SetupContext } from 'vue'

import type { AlertPropsType, AlertEmitsType } from './alert.types'

export default defineComponent((props: AlertPropsType, ctx: SetupContext<AlertEmitsType>) => {
  return () => (
    <>
      <div { ...ctx.attrs } class="ui__alert">
      </div>
    </>
  )
}, {
  props: [
    'title',
    'message',
  ],
})
