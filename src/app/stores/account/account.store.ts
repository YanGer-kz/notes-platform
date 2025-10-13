import { defineStore } from 'pinia'

import type { AccountStoreType, AccountType } from './account.types'

export default defineStore('AccountModule', {
  state: (): AccountStoreType => ({
    account: undefined,
    access_token: localStorage.getItem('access_token') ?? undefined,
    refresh_token: localStorage.getItem('refresh_token') ?? undefined,
  }),

  actions: {
    setAccount(account: AccountType, access_token: string, refresh_token: string): Promise<void> {
      return new Promise((resolve) => {
        localStorage.setItem('access_token', access_token)
        localStorage.setItem('refresh_token', refresh_token)

        this.account = account
        this.access_token = access_token
        this.refresh_token = refresh_token

        resolve()
      })
    },

    logout(): Promise<void> {
      return new Promise((resolve) => {
        localStorage.clear()

        this.account = undefined
        this.access_token = undefined
        this.refresh_token = undefined

        resolve()
      })
    }
  },

  getters: {
    getAccount(state): AccountType | undefined {
      return state.account
    },

    getAccessToken(state): string | undefined {
      return state.access_token
    },

    getRefreshToken(state): String | undefined {
      return state.refresh_token
    }
  }
})
