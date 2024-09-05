<script setup lang="ts">
import { MoreHorizontal } from 'lucide-vue-next'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import type { TableActions } from '@/ts/interfaces/services/datatable.interface'

defineProps<{
  data: {
    id: string
  }
  actions?: TableActions[]
}>()
</script>

<template>
  <DropdownMenu v-if="actions">
    <DropdownMenuTrigger as-child>
      <Button variant="ghost" class="w-8 h-8 p-0">
        <span class="sr-only">Open menu</span>
        <MoreHorizontal class="w-4 h-4" />
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end">
      <DropdownMenuLabel>Actions</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuItem v-for="action in actions">
        <span v-if="action.deleteAction" @click="action.deleteAction"> {{ action.label }}</span>
        <router-link v-else :to="action.to ?? '#'">
          {{ action.label }}
        </router-link>
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
