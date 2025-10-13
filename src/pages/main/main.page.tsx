import './main.style.css'

import { defineComponent } from 'vue'

import { HeaderWidget } from '@/widgets/header'
import { NotesWidget } from './widgets/notes'

export default defineComponent(() => {
  return () => (
    <>
      <div class="page__main">
        <HeaderWidget/>
        <NotesWidget/>
      </div>
    </>
  )
})
