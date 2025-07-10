<script setup lang="ts">
  import { useQueryStore } from '@/store/QueryStore.ts'
  import { useResponseStore } from '@/store/ResponseStore.ts'
  import { useUIStore } from '@/store/UIStore.ts'
  import runReasoner from '@/utils/requestModel.ts'

  const handleReturn = async () => {
    useUIStore().columnState = 'tools'
    useResponseStore().response = ''
    await runReasoner()
  }

</script>

<template>
  <div class="response-wrapper">
    <h2>Answer</h2>
    <div v-show="useResponseStore().response" class="text-wrapper">
      <h3 class="query">{{ useQueryStore().query }}</h3>
      <p class="response">{{ useResponseStore().response }}</p>
    </div>
    <span v-show="!useResponseStore().response" class="loader"></span>
    <a class="text-small return" @click="handleReturn">Return</a>
  </div>
</template>

<style scoped>
  .response-wrapper{
    width: 50%;
    height: min-content;
    display: flex;
    flex-direction: column;
    gap: var(--spacing-l);
  }
  .text-wrapper{
    display: flex;
    flex-direction: column;
    gap: var(--spacing-m);
  }
  .query{
    font-family: "Overpass Medium", serif;
    font-size: large;
  }
  .response{
    font-family: "Overpass Mono", serif;
  }
  .return{
    text-decoration: underline;
  }
  .return:hover {
    color:#726e70;
    cursor: pointer;
  }
  .loader {
    width: 80px;
    aspect-ratio: 1;
    padding: 10px;
    box-sizing: border-box;
    display: grid;
    background: #fff;
    filter: blur(2px) contrast(10) hue-rotate(300deg);
    mix-blend-mode: darken;
  }
  .loader:before,
  .loader:after{
    content: "";
    grid-area: 1/1;
    width: 20px;
    height: 20px;
    background: #000000;
    animation: l7 2s infinite;
  }
  .loader:after{
    animation-delay: -1s;
  }
  @keyframes l7{
    0%   {transform: translate(   0,0)}
    25%  {transform: translate(100%,0)}
    50%  {transform: translate(100%,100%)}
    75%  {transform: translate(   0,100%)}
    100% {transform: translate(   0,0)}
  }

</style>
