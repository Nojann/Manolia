<script setup lang="ts">
  import type { Metadata, Source } from '@/types/SourceTypes.ts'
  import { ref } from 'vue'
  import { useSourcesStore } from '@/store/SourceStore.ts'
  import { BookPlus, X, Plus } from 'lucide-vue-next';
  import ButtonAction from '@/components/ButtonAction.vue'

  const sourcesStore = useSourcesStore()

  const isOpen = ref<boolean>(false)
  const toggleOpen = () => {
    isOpen.value = !isOpen.value
  }

  const createDefaultMetadata = ():Metadata => ({
    title: '',
    creator: null,
    date: null,
    /*subject: null,
    description: null,
    uri: null,
    language: null,
    licence: null,*/
  })

  const newSource = ref<Source>({
    text: '',
    metadata: createDefaultMetadata()
  })

const resetForm = () => {
  newSource.value = {
    text: '',
    metadata: createDefaultMetadata()
  }
}
</script>

<template>
  <ButtonAction :icon="BookPlus" text="add source" v-show="!isOpen" @click="toggleOpen"/>
  <form class="wrapper" @submit.prevent="sourcesStore.addSource(newSource)" v-show="isOpen">
    <div class="header">
      <span class="w_wrapper-icon u_bg-dark">
       <BookPlus color="#FFF9F4" :size=28 :strokeWidth=1 />
      </span>
      <span class="text-action">Add Source</span>
      <button class="w_wrapper-icon button-close" @click="toggleOpen">
        <X :size=28 :strokeWidth=1 />
      </button>
    </div>
    <div class="body">
      <div class="section">
        <h3>Metadata</h3>
        <div class="input-wrapper-metadata">
          <input class="input-size" type="text" name="title" placeholder="Title" v-model="newSource.metadata.title"/>
          <input class="input-size" type="text" name="date" placeholder="Date" v-model="newSource.metadata.date"/>
          <input class="input-size" type="text" name="creator" placeholder="Creator" v-model="newSource.metadata.creator"/>
        </div>
      </div>
      <div class="section">
        <h3>Source</h3>
        <textarea class="textarea-size" name="source" placeholder="Text for the reasoning engine." v-model="newSource.text"/>
      </div>
      <div class="footer">
        <button class="u_bg-dark button-submit" type="submit"  @click="() => {
        sourcesStore.addSource(newSource)
        resetForm()
      }">
          <span class="w_wrapper-icon">
            <Plus color="#FFF9F4" :size=28 :strokeWidth=2 />
          </span>
        </button>
      </div>
    </div>
  </form>
</template>

<style scoped>
  /* Source form components wrapper */
  .wrapper{
    width: auto;
    display: flex;
    flex-direction: column;
    gap: var(--spacing-m);
    border: solid 1px;
  }

  .header{
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: solid 1px;
  }

  .body{
    padding: var(--spacing-s);
    display: flex;
    flex-direction: column;
    gap: var(--spacing-m);
  }

  .section{
    display: flex;
    flex-direction: column;
    gap: var(--spacing-s);
  }

  .input-wrapper-metadata{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: var(--spacing-s);
  }

  .footer{
    height: auto;
    display: flex;
    justify-content: flex-end;
  }

  .button-close{
    border-left: solid 1px black;
    color: var(--color-dark);
  }

  .input-size{
    width: 100%;
    height: 24px;
  }

  .textarea-size{
    height: 64px;
  }

  .button-submit{
    width: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

</style>
