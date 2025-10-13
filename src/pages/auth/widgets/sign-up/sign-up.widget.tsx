import './sign-up.style.css'

import { defineComponent, ref, type Ref } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'

import { UIInput } from '@/shared/ui/input'
import { UIButton } from '@/shared/ui/button'

export default defineComponent(() => {
  const router = useRouter()

  const alerts: Ref<{ type: 'success' | 'danger', message: string }[]> = ref([])

  const login: Ref<string> = ref('')
  const name: Ref<string> = ref('')
  const password: Ref<string> = ref('')
  const confirm_password: Ref<string> = ref('')

  const handleSubmit = async () => {
    if (!login.value || !name.value || !password.value || !confirm_password.value) {
      return alerts.value.push({
        type: 'danger',
        message: 'Login / name / password or confirm password is empty'
      })
    }

    if (password.value !== confirm_password.value) {
      return alerts.value.push({
        type: 'danger',
        message: 'Password and confirm password not equals'
      })
    }

    const request = await axios({
      url: 'http://localhost:3000/api/v1/auth/sign-up',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      data: {
        login: login.value,
        name: name.value,
        password: password.value,
        confirm_password: confirm_password.value
      }
    })

    if (request.data['status'] !== 200) {
      return alerts.value.push({
        type: 'danger',
        message: 'Server error: ' + request.data['message']
      })
    }

    return router.push({ path: '/auth/sign-in' })
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
            <span key={i} class={`${item.type}-message`}>
              {
                item.message
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
