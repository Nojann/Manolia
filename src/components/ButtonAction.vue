<script setup lang="ts">
  import { type FunctionalComponent } from 'vue'

  defineProps<{
      icon: FunctionalComponent,
      text: string
    }>()
</script>

<template>
  <button class="button-action">
    <span class="wrapper-icon u_bg-dark">
      <component
        :is="icon"
        :size=28
        :strokeWidth=1
      />
    </span>
    <span class="text-action">{{ text }}</span>
  </button>
</template>

<style scoped>
  .button-action {
    width: var(--width-small);
    height: auto;

    border: solid 1px;

    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    gap: var(--spacing-s);
  }

  .wrapper-icon{
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

</style>
