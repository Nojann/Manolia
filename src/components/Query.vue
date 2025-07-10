<script setup lang="ts">
  import { nextTick, ref, useTemplateRef } from 'vue'
  import { useQueryStore } from '@/store/QueryStore.ts'
  import { useUIStore } from '@/store/UIStore.ts'
  import { TextCursorInput } from 'lucide-vue-next'
  import ButtonAction from '@/components/ButtonAction.vue'
  import runReasoner from '@/utils/requestModel'

  const isOpen = ref<boolean>(false)
  const input = useTemplateRef('input')

  const toggleOpen = () => {
    isOpen.value = !isOpen.value
    if(isOpen.value){
      nextTick(()=>{
        input.value!.focus()
      })
    }
  }

  const handleFocusOut = () => {
    if(!useQueryStore().query.trim()){
      toggleOpen()
    }
  }

  const handleSubmit = async () => {
    useUIStore().columnState = 'response'
    await runReasoner()
  }

</script>

<template>
  <ButtonAction :icon="TextCursorInput" text="Query" v-show="!isOpen" @click="toggleOpen"/>
  <div class="wrapper" v-show="isOpen" >
    <form class="form" @submit.prevent="handleSubmit">
      <span class="w_wrapper-icon u_bg-dark">
       <TextCursorInput color="#FFF9F4" :size=28 :strokeWidth=1 />
      </span>
      <input
        class="input"
        type="text"
        name="query"
        ref="input"
        v-model="useQueryStore().query"
        @focusout="handleFocusOut"
      />
    </form>
    <span class="text-small">Press enter to send</span>
  </div>
</template>

<style scoped>
  .wrapper{
    width:auto;
    display: flex;
    flex-direction: column;
    gap: var(--spacing-xs)
  }

  .form{
    width: auto;
    display: flex;
    flex-direction: row;
  }

  .input{
    width:100%;
  }
</style>
