<script setup lang="ts">
  import { useQueryStore } from '@/store/QueryStore.ts'
  import { useResponseStore } from '@/store/ResponseStore.ts'

</script>

<template>
  <div class="response-wrapper">
    <h2>Response</h2>
    <h3>{{ useQueryStore().query }}</h3>
    <p>{{ useResponseStore().response }}</p>
  </div>
</template>

<style scoped>
.response-wrapper{
  width: 50%;
  height: min-content;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-l);
}
h3{
  font-size: large;
}
</style>
