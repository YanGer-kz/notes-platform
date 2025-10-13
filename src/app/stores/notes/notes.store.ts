import { defineStore } from 'pinia'

import type { NoteStoreType, NoteType } from './note.types'

export default defineStore('NotesModule', {
  state: (): NoteStoreType => ({
    notes: [],
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

    setNotes(notes: NoteType[]) {
      this.notes = notes
    },

    removeNote(noteId: number) {
      this.notes.splice(this.notes.findIndex(item => item.id === noteId), 1)
    }
  },

  getters: {
    getNotes(state): NoteType[] {
      return state.notes.sort((a, b) => b.id - a.id)
    },

    getNote(state): (noteId: number | null) => NoteType | undefined {
      return (noteId) => state.notes.find(item => item.id === noteId)
    }
  }
})
