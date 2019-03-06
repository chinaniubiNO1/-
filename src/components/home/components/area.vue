<template>
    <div class="area">
        <a :href="area.url">
            <img :src="area.image" >
        </a>
    </div>
</template>

<script>
import Vuex from "vuex";


export default {
    computed: {
    ...Vuex.mapState({
      area: state => state.home.area,
    })
  }
    
}
</script>

<style scoped>
.area{
    width: 100%;
    height: 3rem;
    margin-top: .16rem;
}
.area>a{
    display: block;
    width: 100%;
    height: 100%;
}
.area>a>img{
    width: 100%;
    height: 100%;
}


</style>
