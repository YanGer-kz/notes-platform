import { defineComponent, onMounted } from 'vue'
import { RouterView } from 'vue-router'
import axios from 'axios'

import { useAccountStore } from './stores'

export default defineComponent(() => {
  const accountStore = useAccountStore()

  onMounted(async () => {
    const request = await axios({
      url: 'http://localhost:3000/api/v1/user',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      data: {
        access_token: accountStore.getAccessToken,
        refresh_token: accountStore.getRefreshToken,
      }
    })

    if (request.data['status'] === 200) {
      return accountStore.setAccount(request.data['user'], localStorage.getItem('access_token') ?? '', localStorage.getItem('refresh_token') ?? '')
    }
  })

  return () => (
    <>
      <RouterView/>
    </>
  )
})
