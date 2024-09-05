<script setup lang="ts">
import { columns } from '@/components/tasks/columns'
import Button from '@/components/ui/button/Button.vue'
import Card from '@/components/ui/card/Card.vue'
import CardHeader from '@/components/ui/card/CardHeader.vue'
import DataTable from '@/components/ui/data-table/DataTable.vue'
import { useTaskService } from '@/services/useTaskService'
import { Icon } from '@iconify/vue'
import { defineComponent, onMounted } from 'vue'

defineComponent({
  name: 'TasksListing'
})
const { init, tasks } = useTaskService()

onMounted(async () => {
  await init()
})
</script>

<template>
  <main class="px-2">
    <slot name="breadcrumb"></slot>
    <div class="flex flex-col space-y-5 mt-5">
      <Card>
        <CardHeader>
          <div class="flex justify-between px-2">
            <h6 class="text-xl font-semibold">
              {{ 'Tasks Listing' }}
            </h6>
            <router-link :to="'/tasks/create'" class="font-semibold">
              <Button>
                <Icon icon="mdi:plus" class="text-xl mr-2" />
                {{ 'Add new' }}
              </Button>
            </router-link>
          </div>
        </CardHeader>
      </Card>
      <section>
        <div class="container-fluid py-10 mx-auto">
          <DataTable :columns="columns" :data="tasks" />
        </div>
      </section>
    </div>
  </main>
</template>
