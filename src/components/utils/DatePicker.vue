<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { FormControl, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { cn } from '@/lib/utils'
import {
  CalendarDate,
  getLocalTimeZone,
  parseDate,
  today,
  type DateValue
} from '@internationalized/date'
import { Calendar as CalendarIcon } from 'lucide-vue-next'
import { computed, ref } from 'vue'

const props = defineProps({
  modelValue: String,
  label: String,
  name: String,
  minDate: {
    type: Object as () => DateValue,
    default: () => new CalendarDate(1900, 1, 1)
  },
  maxDate: {
    type: Object as () => DateValue,
    default: () => today(getLocalTimeZone())
  },
  errorMessage: String
})

const emit = defineEmits(['update:modelValue'])

const placeholder = ref()

const value = computed({
  get: () => (props.modelValue ? parseDate(props.modelValue) : undefined),
  set: (val) => emit('update:modelValue', val?.toString())
})
const formatDate = (date: DateValue | undefined): string | undefined => {
  return date
    ? new Intl.DateTimeFormat('en-US', { dateStyle: 'long' }).format(
        date.toDate(getLocalTimeZone())
      )
    : undefined
}
</script>
<template>
  <div class="mt-2">
    <FormItem class="flex flex-col">
      <FormLabel>{{ label }}</FormLabel>
      <Popover>
        <PopoverTrigger as-child>
          <FormControl>
            <Button
              variant="outline"
              :class="
                cn('w-[240px] ps-3 text-start font-normal', !value && 'text-muted-foreground')
              "
            >
              <span>{{ formatDate(value) || 'Pick a date' }}</span>
              <CalendarIcon class="ms-auto h-4 w-4 opacity-50" />
            </Button>
            <input hidden :name="name" />
          </FormControl>
        </PopoverTrigger>
        <PopoverContent class="w-auto p-0">
          <Calendar
            v-model:placeholder="placeholder"
            v-model="value"
            :calendar-label="label"
            initial-focus
            :min-value="minDate"
            @update:model-value="
              (v) => {
                if (v) {
                  emit('update:modelValue', v?.toString())
                } else {
                  emit('update:modelValue', undefined)
                }
              }
            "
          />
        </PopoverContent>
      </Popover>
      <FormMessage v-if="errorMessage">{{ errorMessage }}</FormMessage>
    </FormItem>
  </div>
</template>
