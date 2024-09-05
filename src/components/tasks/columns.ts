import type { Task } from '@/ts/interfaces/models/task.model.interface'
import type { ColumnDef } from '@tanstack/vue-table'
import { h } from 'vue'
import DropdownAction from '@/components/ui/data-table/DataTableDropDown.vue'
import { useTaskService } from '@/services/useTaskService'
import Badge from '@/components/ui/badge/Badge.vue'

export const columns: ColumnDef<Task>[] = [
  {
    accessorKey: 'title',
    header: () => h('div', { class: 'text-left' }, 'Title'),
    cell: ({ row }) => h('div', { class: 'text-left font-medium' }, row.getValue('title'))
  },
  {
    accessorKey: 'status',
    header: () => h('div', { class: 'text-center' }, 'Status'),
    cell: ({ row }) => {
      const status = row.getValue('status')
      // Define badge color based on the status
      let badgeColor: 'default' | 'secondary' | 'destructive' | 'outline' = 'default' // You can adjust this logic
      if (status === 'pending') {
        badgeColor = 'destructive'
      } else if (status === 'in-progress') {
        badgeColor = 'secondary'
      }
      return h(
        'div', // Wrap the Badge component in a div with the text-center class
        { class: 'text-center' },
        h(Badge, { variant: badgeColor }, row.getValue('status'))
      )
    }
  },
  {
    accessorKey: 'due_date',
    header: () => h('div', { class: 'text-right' }, 'Due Date'),
    cell: ({ row }) => h('div', { class: 'text-right font-medium' }, row.getValue('due_date'))
  },
  {
    id: 'actions',
    enableHiding: false,
    cell: ({ row }) => {
      const data = row.original
      const { deleteAction } = useTaskService()
      return h(
        'div',
        { class: 'relative' },
        h(DropdownAction, {
          data,
          onExpand: row.toggleExpanded,
          actions: [
            {
              label: 'Edit',
              to: '/tasks/' + data.id + '/edit'
            },
            {
              label: 'Delete',
              deleteAction: () => deleteAction(data.id)
            }
          ]
        })
      )
    }
  }
]
