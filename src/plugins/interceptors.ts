import { useToast } from 'vue-toastification'
import axiosInstance from '@/utils/common-http'
import { useErrorStore } from '@/stores/ErrorStore'
import type { App } from 'vue'
import type { AxiosError, AxiosResponse } from 'axios'
import type { ErrorMessage, ValidationErrors } from '@/ts/globals'

export default {
  install: (app: App): void => {
    app.config.globalProperties.$http = axiosInstance
    const $http = app.config.globalProperties.$http

    app.provide('$http', $http)

    const errorStore = useErrorStore()
    const { addApiErrors, addFormErrors, resetErrors } = errorStore

    const handleResponse = (response: AxiosResponse) => {
      resetErrors()
      return response
    }

    const handleError = (error: AxiosError) => {
      const apiError = error.response?.data as ErrorMessage

      const toast = useToast()

      if (error.code === 'ERR_NETWORK') {
        toast.error('Server is not responding or please check your internet connection.')
      }
      toast.error(apiError.message)

      addApiErrors(apiError)
      if (error.response?.status === 422) {
        const validationErrors = error.response?.data as ValidationErrors
        if (validationErrors.errors) {
          addFormErrors(validationErrors.errors)
        }
      }

      return Promise.reject(error)
    }

    $http.interceptors.request.use((config: any) => {
      const token = false
      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }
      return config
    })

    $http.interceptors.response.use(handleResponse, handleError)
  }
}

export const $http = axiosInstance
