import './sign-up.style.css'

import { defineComponent, ref, type Ref } from 'vue'
import { useRouter } from 'vue-router'

import { UIInput } from '@/shared/ui/input'
import { UIButton } from '@/shared/ui/button'

export default defineComponent(() => {
  const router = useRouter()

  const alerts: Ref<string[]> = ref([])

  const login: Ref<string> = ref('')
  const name: Ref<string> = ref('')
  const password: Ref<string> = ref('')
  const confirm_password: Ref<string> = ref('')

  const handleSubmit = () => {
    if (!login.value || !name.value || !password.value || !confirm_password.value) {
      return alerts.value.push('Login / name / password or confirm password is empty')
    }

    if (password.value !== confirm_password.value) {
      return alerts.value.push('password and confirm password not equals')
    }
  }

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

        {
          alerts.value.map((item, i) => (
            <span key={i} class="error-message">
              {
                item
              }
            </span>
          ))
        }

        <div class="form">
          <UIInput value={login.value} placeholder='Enter login' variant='outlined' onValue={val => login.value = val}/>
          <UIInput value={name.value} placeholder='Enter name' variant='outlined' onValue={val => name.value = val}/>
          <UIInput type='password' value={password.value} placeholder='Enter password' variant='outlined' onValue={val => password.value = val}/>
          <UIInput type='password' value={confirm_password.value} placeholder='Confirm password' variant='outlined' onValue={val => confirm_password.value = val}/>
        </div>

        <UIButton label='Sign Up' onClick={handleSubmit}/>
        <UIButton label='There is an account' severity='secondary' onClick={() => router.push({ path: '/auth/sign-in' })}/>
      </div>
    </>
  )
})
