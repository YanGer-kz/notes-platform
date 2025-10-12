import './sign-in.style.css'

import { defineComponent } from 'vue'

import { UIInput } from '@/shared/ui/input'

export default defineComponent(() => {
  return () => (
    <>
      <div class="widget__sign_in">
        <div class="header">
          <h1 class="label">
            Sign In
          </h1>

          <p class="text">
            Welcome to Notes Platform
          </p>
        </div>

        <div class="form">
          <UIInput value='' placeholder='Enter login' variant='outlined'/>
          <UIInput value='' placeholder='Enter password' variant='outlined'/>
        </div>
      </div>
    </>
  )
})
