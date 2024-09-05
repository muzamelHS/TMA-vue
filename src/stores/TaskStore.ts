import TaskApi from '@/api/TaskApi'
import type { Task } from '@/ts/interfaces/models/task.model.interface'
import { defineStore } from 'pinia'

export const useTaskStore = defineStore('task', {
  state: () => ({
    tasks: [] as Task[],
    task: {} as Task
  }),

  actions: {
    async fetchAllTasks(params = {}) {
      this.tasks = await TaskApi.allTasks(params)
    },

    async fetchTaskById(taskId: string) {
      this.task = await TaskApi.editTask(taskId)
    },

    resetTaskState() {
      this.task = {} as Task
    }
  }
})
