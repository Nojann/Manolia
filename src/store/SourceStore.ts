import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Source } from '../types/SourceTypes.ts'

export const useSourcesStore = defineStore('sources', () => {
  const sourceList = ref<Source[]>([])
  const addSource = (source:Source): void => {
    if(source.text.trim() && source.metadata.title.trim()){
      sourceList.value.push({ ...source })
    }
  }
  return{
    sourceList,
    addSource
  }
})
