import type { TaskStatuses } from '@/ts/enums'
import type { Timestamps } from '@/ts/globals'

export interface Task extends Timestamps {
  id: string
  title: string
  description?: string
  status: TaskStatuses
  due_date?: string | null
}
