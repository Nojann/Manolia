<script setup lang="ts">
  import Tools from '@/components/Tools.vue'
  import Source from '@/components/Source.vue'
  import Response from '@/components/Response.vue'
  import { useUIStore } from '@/store/UIStore.ts'

  const UIStore = useUIStore()
</script>

<template>
  <div class="wrapper">
    <Source/>
    <Tools v-if="(UIStore.columnState==='tools')"/>
    <Response v-if="(UIStore.columnState==='response')"/>
  </div>
</template>

<style scoped>
  .wrapper{
    display: flex;
    flex-direction: row;
    gap: var(--spacing-xl);
  }
</style>
