import './header.style.css'

import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'

import { useAccountStore } from '@/app/stores'

import { UIAvatar } from '@/shared/ui/avatar'
import { UIButton } from '@/shared/ui/button'

export default defineComponent(() => {
  const router = useRouter()
  
  const accountStore = useAccountStore()

  const logout = async () => {
    await axios({
      url: 'http://localhost:3000/api/v1/auth/logout',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      data: {
        access_token: accountStore.getAccessToken,
        refresh_token: accountStore.getRefreshToken,
      }
    })

    return accountStore.logout().then(() => {
      router.push({ path: '/auth' })
    })
  }

  return () => (
    <>
      <div class="widget__header">
        <h1 class="label">
          My Notes.
        </h1>

        <div class="group">
          {
            accountStore.getAccount && (
              <div class="user__rows">
                <UIAvatar label={accountStore.getAccount.name.charAt(0).toUpperCase()}/>

                <div class="user__cols">
                  <h1 class="user__name">
                    {
                      accountStore.getAccount.name
                    }
                  </h1>

                  <p class="user__login">
                    {
                      ['@', accountStore.getAccount.login].join('')
                    }
                  </p>
                </div>
              </div>
            )
          }

          <UIButton label='Logout' icon='logout' onClick={logout}/>
        </div>
      </div>
    </>
  )
})
