import './sign-in.style.css'

import { defineComponent, ref, type Ref } from 'vue'
import { useRouter } from 'vue-router'

import { UIInput } from '@/shared/ui/input'
import { UIButton } from '@/shared/ui/button'

export default defineComponent(() => {
  const router = useRouter()

  const alerts: Ref<string[]> = ref([])

  const login: Ref<string> = ref('')
  const password: Ref<string> = ref('')

  const handleSubmit = () => {
    if (!login.value || !password.value) {
      return alerts.value.push('Login or password is empty')
    }
  }

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
          <UIInput type='password' value={password.value} placeholder='Enter password' variant='outlined' onValue={val => password.value = val}/>
        </div>

        <UIButton label='Sign In' onClick={handleSubmit}/>
        <UIButton label='Create a new account' severity='secondary' onClick={() => router.push({ path: '/auth/sign-up' })}/>
      </div>
    </>
  )
})
