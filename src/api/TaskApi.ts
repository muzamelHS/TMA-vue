import { $http } from '@/plugins/interceptors'
import type { TaskForm, TaskResponse } from '@/ts/interfaces/services/task.interface'
import type { Task } from '@/ts/interfaces/models/task.model.interface'

export default {
  async createTask(payload: TaskForm): Promise<TaskResponse> {
    const { data } = await $http.post<TaskResponse>(`/tasks`, payload)
    return data
  },

  async allTasks(params = {}): Promise<Task[]> {
    const { data } = await $http.get<Task[]>(`/tasks`, params)
    return data
  },

  async editTask(taskId: string): Promise<Task> {
    const { data } = await $http.get<Task>(`/tasks/${taskId}`)
    return data
  },

  async updateTask(taskId: string, payload: TaskForm): Promise<TaskResponse> {
    const { data } = await $http.put<TaskResponse>(`/tasks/${taskId}`, payload)
    return data
  },

  async deleteTask(taskId: string): Promise<TaskResponse> {
    const { data } = await $http.delete<TaskResponse>(`/tasks/${taskId}`)
    return data
  }
}
