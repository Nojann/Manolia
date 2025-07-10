<script setup lang="ts">
  import { useSourcesStore } from '@/store/SourceStore.ts'
  import SourceForm from '@/components/SourceForm.vue'

  const sourcesStore = useSourcesStore()

  const contentPreviewer = (str: string) : string => {
    str = str.slice(0,50)
    const lastSpace: number = str.lastIndexOf(' ');
    return lastSpace !== -1 ? str.slice(0, lastSpace) : str
  }

</script>

<template>
  <div class="source-wrapper">
    <h2>Sources</h2>
    <ul v-show="sourcesStore.sourceList" class="list">
      <li class="element" v-for="(source, index) in sourcesStore.sourceList" :key="index">
        <p>{{source.metadata.creator}}, ({{source.metadata.date}}). <i>{{source.metadata.title}}</i></p>
        <p class="text-small">{{contentPreviewer(source.text)}}...</p>
      </li>
    </ul>
    <SourceForm/>
  </div>
</template>

<style scoped>
  .source-wrapper {
    width: 50%;
    height: min-content;
    display: flex;
    flex-direction: column;
  }

  .list {
    display: flex;
    flex-direction: column;
    gap:var(--spacing-m);
    padding-block: var(--spacing-l);
  }

  .list:empty{
    padding-block: 0;
    padding-top: var(--spacing-l);
  }

  .element{
    font-family: "Overpass Mono", serif;
    border-left: solid 4px;
    padding-left: var(--spacing-s);
    padding-right: var(--spacing-xs);
    padding-block: var(--spacing-xs);
    display: flex;
    flex-direction: column;
    gap: var(--spacing-xs);
  }

</style>
