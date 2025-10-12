import './textarea.style.css'

import { defineComponent, type SetupContext } from 'vue'

import type { TextareaPropsType, TextareaEmitsType } from './textarea.types'

export default defineComponent((props: TextareaPropsType, ctx: SetupContext<TextareaEmitsType>) => {
  const handleValue = (event: InputEvent) => {
    const target: HTMLInputElement = event.target as HTMLInputElement
    const value: string = target.value

    ctx.emit('value', value)
  }

  return () => (
    <>
      <textarea { ...ctx.attrs } class={["ui__textarea", { fulid: props.fulid }]} value={props.value} onInput={handleValue}/>
    </>
  )
}, {
  props: [
    'value',
    'fulid',
  ],

  emits: [
    'value'
  ],
})
