import './sign-in.style.css'

import { defineComponent, ref, type Ref } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'

import { useAccountStore } from '@/app/stores'

import { UIInput } from '@/shared/ui/input'
import { UIButton } from '@/shared/ui/button'

export default defineComponent(() => {
  const router = useRouter()

  const alerts: Ref<{ type: 'success' | 'danger', message: string }[]> = ref([])

  const login: Ref<string> = ref('')
  const password: Ref<string> = ref('')

  const handleSubmit = async () => {
    const accountStore = useAccountStore()

    if (!login.value || !password.value) {
      return alerts.value.push({
        type: 'danger',
        message: 'Login or password is empty'
      })
    }

    const request = await axios({
      url: 'http://localhost:3000/api/v1/auth/sign-in',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      data: {
        login: login.value,
        password: password.value,
      }
    })

    if (request.data['status'] !== 200) {
      return alerts.value.push({
        type: 'danger',
        message: 'Server error: ' + request.data['message']
      })
    }

    return accountStore.setAccount(request.data['user'], request.data['access_token'], request.data['refresh_token']).then(() => {
      router.push({ path: '/' })
    })
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
            <span key={i} class={`${item.type}-message`}>
              {
                item.message
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
