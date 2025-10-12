import './notes.style.css'

import { defineComponent, ref, type Ref } from 'vue'

import { useNotesStore } from '@/app/stores'

import { UIButton } from '@/shared/ui/button'
import { UIInput } from '@/shared/ui/input'
import { UITextarea } from '@/shared/ui/textarea'

export default defineComponent(() => {
  const notesStore = useNotesStore()

  const noteId: Ref<number | null> = ref(null)

  const formatDate = (date: Date) => {
    const months: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    const weeks: string[] = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

    return [weeks[(date.getDay() || 7) - 1]?.toUpperCase(), [date.getDate(), months[date.getMonth()]?.toUpperCase()].join(' ')].join(', ')
  }

  const getNotes = () => {
    return notesStore.getNotes.map(item => (
      <li class={["item", { active: noteId.value === item.id }]} onClick={() => noteId.value = item.id}>
        <span class="date">
          {
            formatDate(item.created_at) // THU, 9 OCT
          }
        </span>

        <h1 class="label">
          {
            item.label
          }
        </h1>

        <p class="description">
          {
            item.text.length > 140 ? [item.text.slice(0, 140), '...'].join(' ') : item.text
          }
        </p>
      </li>
    ))
  }

  const getNote = () => {
    const note = notesStore.getNote(noteId.value)

    if (note) {
      return (
        <div class="content">
          <div class="header">
            <div class="group">
              <span class="date">
                {
                  formatDate(note.created_at) // THU, 9 OCT
                }
              </span>
  
              <h1 class="label">
                <UIInput value={note.label} fulid onValue={val => note.label = val}/>
              </h1>
            </div>
  
            <UIButton icon='trash-can-outline' severity='danger'/>
          </div>
  
          <p class="text">
            <UITextarea value={note.text} fulid onValue={val => note.text = val}/>
          </p>
        </div>
      )
    }

    return null
  }

  return () => (
    <>
      <div class="widget__notes">
        <ul class="navigation">
          <UIButton label='Add new Note' icon='plus' severity='secondary' size='large' onClick={() => notesStore.addNote()}/>

          {
            getNotes()
          }
        </ul>

        {
          getNote()
        }
      </div>
    </>
  )
})
