import './notes.style.css'

import { defineComponent } from 'vue'

import { UIIcon } from '@/shared/ui/icon'

export default defineComponent(() => {
  return () => (
    <>
      <div class="widget__notes">
        <ul class="navigation">
          <li class="add">
            <UIIcon icon="plus"/>

            <h1 class="label">
              Add new Note
            </h1>
          </li>

          <li class="item active">
            <span class="date">
              THU, 9 OCT
            </span>

            <h1 class="label">
              Lorem, ipsum dolor.
            </h1>

            <p class="description">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. At recusandae modi suscipit sed earum esse adipisci beatae nam ...
            </p>
          </li>

          <li class="item">
            <span class="date">
              SAT, 11 OCT
            </span>

            <h1 class="label">
              Lorem, ipsum dolor.
            </h1>

            <p class="description">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. At recusandae modi suscipit sed earum esse adipisci beatae nam ...
            </p>
          </li>
        </ul>

        <div class="content">
        </div>
      </div>
    </>
  )
})
