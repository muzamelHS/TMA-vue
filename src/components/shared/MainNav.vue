<script setup lang="ts">
import { cn } from '@/lib/utils'
import { ref } from 'vue'

const menuItems = ref<
  {
    name: string
    href: string
  }[]
>([
  {
    name: 'Tasks',
    href: '/tasks'
  }
])
</script>

<template>
  <nav :class="cn('flex items-center space-x-4 lg:space-x-6', $attrs.class ?? '')">
    <RouterLink
      v-for="item in menuItems"
      :key="item.name"
      :to="item.href"
      class="text-sm font-medium transition-colors text-muted-foreground hover:text-primary"
      :exact-active-class="cn('text-primary', $attrs.exactActiveClass ?? '')"
    >
      {{ item.name }}
    </RouterLink>
  </nav>
</template>
