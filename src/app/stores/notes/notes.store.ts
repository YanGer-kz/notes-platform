import { defineStore } from 'pinia'

import type { NoteStoreType, NoteType } from './note.types'

export default defineStore('NotesModule', {
  state: (): NoteStoreType => ({
    notes: [
      {
        id: 0,
        label: 'Lorem, ipsum dolor.',
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione animi tempora soluta officia? Enim architecto blanditiis cumque quibusdam eum veniam provident facere, eos modi magnam dolores dolore dolorem, mollitia molestiae! Sequi nobis totam amet cupiditate soluta, quidem corporis quod asperiores perferendis neque adipisci laboriosam nisi molestiae sed quibusdam odit sint perspiciatis itaque dicta similique inventore ipsam, error vel ducimus! In?',
        author: '',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 1,
        label: 'Lorem, ipsum dolor.',
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione animi tempora soluta officia? Enim architecto blanditiis cumque quibusdam eum veniam provident facere, eos modi magnam dolores dolore dolorem, mollitia molestiae! Sequi nobis totam amet cupiditate soluta, quidem corporis quod asperiores perferendis neque adipisci laboriosam nisi molestiae sed quibusdam odit sint perspiciatis itaque dicta similique inventore ipsam, error vel ducimus! In?',
        author: '',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ],
  }),

  actions: {
    addNote() {
      this.notes.push({
        id: this.notes.length,
        label: '',
        text: '',
        author: '',
        created_at: new Date(),
        updated_at: new Date(),
      })
    },
  },

  getters: {
    getNotes(state): NoteType[] {
      return state.notes
    },

    getNote(state): (noteId: number | null) => NoteType | undefined {
      return (noteId) => state.notes.find(item => item.id === noteId)
    }
  }
})
