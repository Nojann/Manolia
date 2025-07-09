import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useResponseStore = defineStore('response', () => {
  const response = ref<string>('')
  return{
    response
  }
})
