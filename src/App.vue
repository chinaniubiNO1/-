<template>
  <div id="app">
    <Header/>
    <router-view/>
    <FooterCom/>
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
