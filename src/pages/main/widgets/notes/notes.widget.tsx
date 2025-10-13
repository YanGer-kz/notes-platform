import './notes.style.css'

import { defineComponent, onMounted, ref, type Ref } from 'vue'
import axios from 'axios'

import { useAccountStore } from '@/app/stores'
import { useNotesStore } from '@/app/stores'

import { UIButton } from '@/shared/ui/button'
import { UIInput } from '@/shared/ui/input'
import { UITextarea } from '@/shared/ui/textarea'

export default defineComponent(() => {
  const accountStore = useAccountStore()
  const notesStore = useNotesStore()

  const noteId: Ref<number | null> = ref(null)

  const formatDate = (date: Date | string) => {
    date = new Date(date)

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

  const updateNote = async (val: string, type: 'label' | 'text') => {
    const note = notesStore.getNote(noteId.value)

    if (!note) {
      return null
    }

    if (type === 'label') {
      note.label = val
    } else {
      note.text = val 
    }

    await axios({
      url: 'http://localhost:3000/api/v1/note/update',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      data: {
        noteId: note.id,
        label: note.label,
        text: note.text,
        access_token: accountStore.getAccessToken,
        refresh_token: accountStore.getRefreshToken,
      }
    })
  }

  const removeNote = async (noteId: number) => {
    await axios({
      url: 'http://localhost:3000/api/v1/note/remove',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      data: {
        noteId: noteId,
        access_token: accountStore.getAccessToken,
        refresh_token: accountStore.getRefreshToken,
      }
    })

    notesStore.removeNote(noteId)
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
                <UIInput value={note.label} fulid onValue={val => updateNote(val, 'label')} placeholder='Enter label' variant='text'/>
              </h1>
            </div>
  
            <UIButton icon='trash-can-outline' severity='danger' onClick={() => removeNote(note.id)}/>
          </div>
  
          <p class="text">
            <UITextarea value={note.text} fulid onValue={val => updateNote(val, 'text')} placeholder='Enter text'/>
          </p>
        </div>
      )
    }

    return null
  }

  const addNote = async () => {
    await axios({
      url: 'http://localhost:3000/api/v1/note/create',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      data: {
        label: '',
        text: '',
        access_token: accountStore.getAccessToken,
        refresh_token: accountStore.getRefreshToken,
      }
    })

    notesStore.addNote()
    noteId.value = notesStore.getNotes.length - 1
  }

  onMounted(async () => {
    const request = await axios({
      url: 'http://localhost:3000/api/v1/notes',
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
      return notesStore.setNotes(request.data.notes)
    }
  })

  return () => (
    <>
      <div class="widget__notes">
        <ul class="navigation">
          <UIButton label='Add new Note' icon='plus' severity='secondary' size='large' onClick={addNote}/>

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
