import './sign-in.style.css'

import { defineComponent } from 'vue'

import { UIInput } from '@/shared/ui/input'
import { UIButton } from '@/shared/ui/button'

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
          <UIInput type='password' value='' placeholder='Enter password' variant='outlined'/>
        </div>

        <UIButton label='Sign-in'/>
        <UIButton label='Create a new account' severity='secondary'/>
      </div>
    </>
  )
})
