export interface Timestamps {
  created_at: Date | null
  updated_at: Date | null
  deleted_at: Date | null
}

export interface ErrorMessage {
  errors?: ErrorString
  message: string
}

export interface ErrorString {
  [key: string]: string[]
}

export interface ValidationErrors {
  errors?: ErrorString
}

export type Status = {
  name: 'Pending' | 'In-progress' | 'Completed'
  value: 'pending' | 'in-progress' | 'completed'
}
