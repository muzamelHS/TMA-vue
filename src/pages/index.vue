<script setup lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import { RouterView } from 'vue-router'
import MainNav from '@/components/shared/MainNav.vue'

defineComponent({
  name: 'DefaultLayout'
})
</script>

<template>
  <div class="flex flex-col">
    <div class="border-b">
      <div class="flex h-16 items-center px-10">
        <RouterLink to="/" class="mr-6 flex items-center space-x-2">
          <span class="font-bold">{{ 'Assessment' }}</span>
        </RouterLink>
        <MainNav class="mx-6" />
      </div>
    </div>
    <div class="flex-1 space-y-4 p-8 pt-6">
      <RouterView />
    </div>
  </div>
</template>

<route>
{
  name: "default-layout",
}
</route>
