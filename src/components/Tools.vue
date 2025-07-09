<script setup lang="ts">
  import SourceForm from '@/components/SourceForm.vue'
  import Query from '@/components/Query.vue'

</script>

<template>
  <section class="wrapper-column">
    <h2>Tools</h2>
    <SourceForm/>
    <Query/>
  </section>
</template>

<style scoped>
  .wrapper-column{
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: var(--spacing-l);
  }
</style>
