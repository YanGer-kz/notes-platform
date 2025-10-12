import './sign-up.style.css'

import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'

import { UIInput } from '@/shared/ui/input'
import { UIButton } from '@/shared/ui/button'

export default defineComponent(() => {
  const router = useRouter()

  return () => (
    <>
      <div class="widget__sign_up">
        <div class="header">
          <h1 class="label">
            Sign Up
          </h1>

          <p class="text">
            Create a new account
          </p>
        </div>

        <div class="form">
          <UIInput value='' placeholder='Enter login' variant='outlined'/>
          <UIInput value='' placeholder='Enter name' variant='outlined'/>
          <UIInput type='password' value='' placeholder='Enter password' variant='outlined'/>
          <UIInput type='password' value='' placeholder='Confirm password' variant='outlined'/>
        </div>

        <UIButton label='Sign Up'/>
        <UIButton label='There is an account' severity='secondary' onClick={() => router.push({ path: '/auth/sign-in' })}/>
      </div>
    </>
  )
})
