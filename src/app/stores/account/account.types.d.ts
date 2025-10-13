export type AccountType = {
  id: number
  login: string
  name: string
  created_at: Date
  updated_at: Date
}

export type AccountStoreType = {
  account?: AccountType
  access_token?: string
  refresh_token?: string
}
