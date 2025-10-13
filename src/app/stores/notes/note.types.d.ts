export type NoteType = {
  id: number
  label: string
  text: string
  author: string
  created_at: Date
  updated_at: Date
}

export type NoteStoreType = {
  notes: NoteType[]
}
