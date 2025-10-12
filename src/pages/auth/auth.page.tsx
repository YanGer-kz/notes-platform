import './auth.style.css'

import { defineComponent } from 'vue'

import { SignInWidget } from './widgets/sign-in'

export default defineComponent(() => {
  return () => (
    <>
      <div class="page__auth">
        <SignInWidget/>
      </div>
    </>
  )
})
