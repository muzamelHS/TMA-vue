import type { Status } from '@/ts/globals'

export const API_URL: string = import.meta.env.VITE_API_URL

export const AUTH_HEADER = {
  Accept: 'application/json',
  'Access-Control-Allow-Origin': '*',
  //   Authorization: `Bearer <token>}`,
  Locale: window.localStorage.getItem('lang') || 'en'
}

export const TaskStatus: Status[] = [
  { name: 'Pending', value: 'pending' },
  { name: 'In-progress', value: 'in-progress' },
  { name: 'Completed', value: 'completed' }
]
