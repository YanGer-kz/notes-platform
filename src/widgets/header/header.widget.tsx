import './header.style.css'

import { defineComponent } from 'vue'

import { UIAvatar } from '@/shared/ui/avatar'
import { UIButton } from '@/shared/ui/button'

export default defineComponent(() => {
  return () => (
    <>
      <div class="widget__header">
        <h1 class="label">
          My Notes.
        </h1>

        <div class="group">
          <div class="user__rows">
            <UIAvatar label='IZ'/>

            <div class="user__cols">
              <h1 class="user__name">
                Ilyas Zhakenov
              </h1>

              <p class="user__login">
                @zhakenov
              </p>
            </div>
          </div>

          <UIButton label='Logout' icon='logout'/>
        </div>
      </div>
    </>
  )
})
