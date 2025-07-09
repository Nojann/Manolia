<script setup lang="ts">
  import { useSourcesStore } from '@/store/SourceStore.ts'

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
    <ul class="list">
      <li class="element" v-for="(source, index) in sourcesStore.sourceList" :key="index">
        <p>{{source.metadata.creator}}, ({{source.metadata.date}}). <i>{{source.metadata.title}}</i></p>
        <p class="text-small">{{contentPreviewer(source.text)}}...</p>
      </li>
    </ul>
  </div>
</template>

<style scoped>
  .source-wrapper{
    height: min-content;
    display: flex;
    flex-direction: column;
    gap: var(--spacing-l);
  }

  .list{
    display: flex;
    flex-direction: column;
    gap:var(--spacing-m);
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
