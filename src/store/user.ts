import { defineStore } from 'pinia'
import Storage from '../utils/storage'

export const userStorage = new Storage<User>('user')

export const useUserStore = defineStore({
  id: 'user',
  state: () => ({ user: userStorage.get() }),
  getters: {
    isAuthorized (state) {
      return state.user !== null
    },
  },
  actions: {
    updateUser (userData: User) {
      if (userData === undefined || userData === null) {
        userStorage.remove()
        // TODO: delete authorization header
        this.user = null
      } else {
        userStorage.set(userData)
        // TODO: set authorization header
        this.user = userData
      }
    },
  },
})
