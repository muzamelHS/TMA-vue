import TaskApi from '@/api/TaskApi'
import { useTaskStore } from '@/stores/TaskStore'
import type { TaskForm, TaskResponse, TaskService } from '@/ts/interfaces/services/task.interface'
import { toTypedSchema } from '@vee-validate/zod'
import { storeToRefs } from 'pinia'
import { isEmpty } from 'underscore'
import { useForm } from 'vee-validate'
import { useRoute, useRouter } from 'vue-router'
import { useToast } from 'vue-toastification'
import { z as zod } from 'zod'

export function useTaskService(): TaskService {
  /* Variables */
  const { tasks, task } = storeToRefs(useTaskStore())
  const { fetchAllTasks, fetchTaskById } = useTaskStore()

  /* Validations */
  const validationSchema = toTypedSchema(
    zod.object({
      title: zod.string({ required_error: 'The Title field is required' }),
      description: zod
        .string()
        .max(500, { message: 'The description must be less than 500 characters' })
        .optional()
        .nullable(),
      due_date: zod.string().optional().nullable(),
      status: zod.string().optional().nullable()
    })
  )

  const { handleSubmit, errors, setFieldValue, values, resetForm } = useForm<TaskForm>({
    validationSchema,
    initialValues: {}
  })

  /* Composable */
  const router = useRouter()
  const toast = useToast()
  const route = useRoute()

  /* Methods */
  const onSubmit = handleSubmit(async (values: TaskForm, { setErrors }): Promise<void> => {
    const taskId = task.value?.id
    if (taskId) {
      TaskApi.updateTask(taskId, values)
        .then(async (response: TaskResponse) => {
          await fetchAllTasks()
          toast.success(response.message)
          router.push({ path: '/tasks' })
        })
        .catch((error) => {
          const response = error.response
          setErrors(response)
          if (response) {
            setErrors(response.data.errors)
          }
        })
    } else {
      TaskApi.createTask(values)
        .then(async (response: TaskResponse) => {
          await fetchAllTasks()
          toast.success(response.message)
          router.push({ path: '/tasks' })
        })
        .catch((error) => {
          const response = error.response
          setErrors(response)
          if (response) {
            setErrors(response.data.errors)
          }
        })
    }
  })
  const init = async (): Promise<void> => {
    if (isEmpty(tasks.value)) {
      await fetchAllTasks()
    }
  }
  const deleteAction = async (id: string): Promise<void> => {
    TaskApi.deleteTask(id)
      .then(async (response: TaskResponse) => {
        toast.success(response.message)
        await fetchAllTasks()
      })
      .catch((error) => {
        const response = error.response
        toast.error(response.message)
      })
  }
  const editAction = async (): Promise<void> => {
    await fetchTaskById(route.params.task as string)
    if (task.value) {
      resetForm({
        values: {
          title: task.value.title,
          description: task.value.description ?? '',
          due_date: task.value.due_date ?? '',
          status: task.value.status ?? ''
        }
      })
    }
  }
  return {
    tasks,
    init,
    onSubmit,
    errors,
    setFieldValue,
    values,
    deleteAction,
    editAction
  }
}
