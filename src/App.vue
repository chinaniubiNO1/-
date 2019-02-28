<template>
  <div id="app">
    <router-view/>
    <FooterCom/>
  </div>
</template>

<script>

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
