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
          <div class="header">
            <span class="date">
              SAT, 11 OCT
            </span>

            <h1 class="label">
              Lorem, ipsum dolor.
            </h1>
          </div>

          <p class="text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione animi tempora soluta officia? Enim architecto blanditiis cumque quibusdam eum veniam provident facere, eos modi magnam dolores dolore dolorem, mollitia molestiae!
            Sequi nobis totam amet cupiditate soluta, quidem corporis quod asperiores perferendis neque adipisci laboriosam nisi molestiae sed quibusdam odit sint perspiciatis itaque dicta similique inventore ipsam, error vel ducimus! In?
          </p>
        </div>
      </div>
    </>
  )
})
