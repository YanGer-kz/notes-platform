import './auth.style.css'

import { defineComponent } from 'vue'
import { useRoute } from 'vue-router'

import { SignInWidget } from './widgets/sign-in'
import { SignUpWidget } from './widgets/sign-up'

export default defineComponent(() => {
  const route = useRoute()

  return () => (
    <>
      <div class="page__auth">
        {
          route.path === '/auth/sign-in' ? (
            <SignInWidget/>
          ) : (
            <SignUpWidget/>
          )
        }
      </div>
    </>
  )
})
