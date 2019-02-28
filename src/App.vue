<template>
  <div id="app">
    <router-view/>
    <FooterCom/>
  </div>
</template>

<script>
import Footer from "./components/common/footer";
export default {
  name: 'App',
  components:{
    "FooterCom":Footer
  }
}
</script>

<style>
#app{
  height: 100%;
}
</style>
