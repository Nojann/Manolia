<script setup lang="ts">
  import { RouterLink } from 'vue-router'
</script>

<template>
  <header>
    <RouterLink to="/app">
      <div class="title">
        <img src="../assets/svg/manoliaIcon.svg" alt="geometric flower" />
        <h1>Manolia</h1>
      </div>
    </RouterLink>
    <RouterLink to="/guidelines">
      <a class="item">Guidelines</a>
    </RouterLink>
  </header>
</template>

<style scoped>
  header{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    height: 64px;
    padding-inline: 64px;

    border-bottom: solid 1px;
  }

  .title{
    display: flex;
    align-items: center;
    gap: 12px;

    img{
      width: 48px;
      height: 48px;
    }

  }

  .item{
    font-family: Overpass Mono, serif;
    font-size: 16px;
    color: black;

    display: flex;
    align-items: center;

    height: 48px;
  }

</style>
