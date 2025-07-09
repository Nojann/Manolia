import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useQueryStore = defineStore('query', () => {
  const query = ref<string>('')
  return{
    query
  }
})
