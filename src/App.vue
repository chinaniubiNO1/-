<template>
  <div id="app">
    <Header/>
    <router-view/>
  </div>
</template>

<script>
import Header from "./components/common/header"
export default {
  name: 'App',
  components:{
    "Header":Header,
  }
}
</script>

<style>
#app{
  height: 100%;
}
</style>
