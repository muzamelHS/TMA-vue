<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import DatePicker from '@/components/utils/DatePicker.vue'
import { useTaskService } from '@/services/useTaskService'
import { useTaskStore } from '@/stores/TaskStore'
import { TaskStatus } from '@/utils/constants'
import { Separator } from 'radix-vue'
import { defineComponent, onBeforeUnmount, onMounted } from 'vue'

const { onSubmit, errors, setFieldValue, values, editAction } = useTaskService()
const onDateChange = (date: string | undefined) => {
  setFieldValue('due_date', date ?? '')
}
const { resetTaskState } = useTaskStore()
onMounted(async () => {
  await editAction()
})
onBeforeUnmount(() => {
  resetTaskState()
})
defineComponent({
  name: 'EditTask'
})
</script>
<template>
  <main class="px-2">
    <Card>
      <CardHeader>
        <h6 class="text-xl font-semibold">
          {{ 'Edit task' }}
        </h6>
        <Separator class="border-t" />
      </CardHeader>
      <CardContent>
        <form @submit="onSubmit">
          <div class="grid gap-3">
            <div class="grid grid-cols-3 gap-3">
              <div class="grid gap-1">
                <FormField v-slot="{ componentField }" name="title">
                  <FormItem>
                    <FormLabel>Title</FormLabel>
                    <FormControl>
                      <Input type="text" placeholder="Enter title" v-bind="componentField" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                </FormField>
              </div>

              <div class="grid gap-1">
                <FormField v-slot="{ componentField }" name="status">
                  <FormItem>
                    <FormLabel>Status</FormLabel>
                    <Select v-bind="componentField">
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a status" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem v-for="status in TaskStatus" :value="status.value">
                            {{ status.name }}
                          </SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                </FormField>
              </div>

              <div class="grid gap-1 mt-0.5">
                <FormField name="due_date">
                  <DatePicker
                    label="Due Date"
                    name="due_date"
                    :modelValue="values.due_date"
                    @update:modelValue="onDateChange"
                    :errorMessage="errors.due_date"
                  />
                </FormField>
              </div>
            </div>

            <div class="grid grid-cols-1">
              <div class="grid gap-1">
                <FormField v-slot="{ componentField }" name="description">
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Enter description here maximum 500 characters..."
                        class="resize-none"
                        v-bind="componentField"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                </FormField>
              </div>
            </div>
          </div>
          <Separator class="my-4 border-t" />
          <Button type="submit"> Update </Button>
        </form>
      </CardContent>
    </Card>
  </main>
</template>
