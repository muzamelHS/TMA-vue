import { defineStore } from 'pinia'
import type { ErrorMessage, ErrorString } from '@/ts/globals'

type ErrorState = {
  apiErrors: ErrorMessage
  formErrors: ErrorString
}

export const useErrorStore = defineStore('error', {
  state: (): ErrorState => ({
    apiErrors: {
      message: ''
    },
    formErrors: {}
  }),

  actions: {
    addApiErrors(errors: ErrorMessage): void {
      this.apiErrors = errors
    },

    addFormErrors(formErrors: ErrorString): void {
      this.formErrors = formErrors
    },

    resetErrors(): void {
      this.apiErrors = {
        message: ''
      }
      this.formErrors = {}
    }
  }
})
