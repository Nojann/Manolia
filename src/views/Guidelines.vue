<script setup lang="ts">
  const vFocus = {
    mounted: (el:HTMLElement) => {
        el.focus()
    }
  }
</script>

<template>
  <h2>Guidelines</h2>
  <input v-focus class="input" type="text" name="query"/>
</template>

<style scoped>

</style>
