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
      <label { ...ctx.attrs } class={{ fulid: props.fulid }}>
        <input type={props.type || 'text'} class={["ui__input", `ui__input-${props.variant || 'default'}`]} value={props.value} onInput={handleValue} placeholder={props.placeholder}/>
      </label>
    </>
  )
}, {
  props: [
    'type',
    'value',
    'fulid',
    'placeholder',
    'variant',
  ],

  emits: [
    'value'
  ],
})
