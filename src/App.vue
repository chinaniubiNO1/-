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
<<<<<<< HEAD
    "FooterCom":Footer
=======
    "Header":Header,
>>>>>>> 15f3263d0821411a7624f245c7494ff297075854
  }
}
</script>

<style>
#app{
  height: 100%;
}
</style>
