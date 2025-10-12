import './notes.style.css'

import { defineComponent } from 'vue'

import { UIButton } from '@/shared/ui/button'
import { UIInput } from '@/shared/ui/input'
import { UITextarea } from '@/shared/ui/textarea'

export default defineComponent(() => {
  return () => (
    <>
      <div class="widget__notes">
        <ul class="navigation">
          <UIButton label='Add new Note' icon='plus' severity='secondary' size='large'/>

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
            <div class="group">
              <span class="date">
                SAT, 9 OCT
              </span>

              <h1 class="label">
                <UIInput value='Lorem, ipsum dolor.' fulid onValue={val => console.log(val)}/>
              </h1>
            </div>

            <UIButton icon='trash-can-outline' severity='danger'/>
          </div>

          <p class="text">
            <UITextarea value='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione animi tempora soluta officia? Enim architecto blanditiis cumque quibusdam eum veniam provident facere, eos modi magnam dolores dolore dolorem, mollitia molestiae! Sequi nobis totam amet cupiditate soluta, quidem corporis quod asperiores perferendis neque adipisci laboriosam nisi molestiae sed quibusdam odit sint perspiciatis itaque dicta similique inventore ipsam, error vel ducimus! In?' fulid onValue={val => console.log(val)}/>
          </p>
        </div>
      </div>
    </>
  )
})
