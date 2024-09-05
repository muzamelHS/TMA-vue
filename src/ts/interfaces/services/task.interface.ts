import type { Task } from '@/ts/interfaces/models/task.model.interface'
import type { ComputedRef, Ref } from 'vue'

export interface TaskService {
  onSubmit: () => Promise<Promise<void> | undefined>
  init: () => Promise<void>
  tasks: Ref<Task[]>
  errors: ComputedRef<Partial<Record<keyof TaskForm, string | undefined>>>
  setFieldValue: (field: keyof TaskForm, value: TaskForm[keyof TaskForm]) => void
  values: TaskForm
  deleteAction: (id: string) => Promise<void>
  editAction: () => Promise<void>
}

export interface TaskForm {
  title: string
  description?: string
  due_date?: string
  status: string
}
export interface TaskResponse {
  status: boolean
  message: string
  data?: Task
}
