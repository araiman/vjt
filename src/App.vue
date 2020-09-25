<template>
  <div id="app">
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
import AppHeader from "./components/Header.vue";

export default {
  name: 'App',
  components: {
    appHeader: AppHeader,
  }
}
</script>

<style scoped>
  #app {
    margin: 10px 100px;
  }
</style>