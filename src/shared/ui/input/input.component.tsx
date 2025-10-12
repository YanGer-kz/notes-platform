import './input.style.css'

import { defineComponent, type SetupContext } from 'vue'

import type { InputPropsType, InputEmitsType } from './input.types'

export default defineComponent((props: InputPropsType, ctx: SetupContext<InputEmitsType>) => {
  const handleValue = (event: InputEvent) => {
    const target: HTMLInputElement = event.target as HTMLInputElement
    const value: string = target.value

    ctx.emit('value', value)
  }

  return () => (
    <>
      <input { ...ctx.attrs } class={["ui__input"]} value={props.value} onInput={handleValue}/>
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
