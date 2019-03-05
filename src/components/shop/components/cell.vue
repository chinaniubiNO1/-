<template>
  <div class="cell">
    <div class="cell-T">
      <div class="cellA" v-for="(item,index) in cellA"><img :src="item.img"></div>
      <div>
        <div class="cellC" v-for="(item,index) in cellC"><img :src="item.image"></div>
      </div>
    </div>
    <div class="cellB" v-for="(item,index) in cellB"><img :src="item.img"></div>
  </div>
</template>

<script>
import Vuex from "vuex";

export default {
  computed: {
    ...Vuex.mapState({
      cellA: state => state.shop.cellA,
      cellB: state => state.shop.cellB,
      cellC: state => state.shop.cellC
    })
  },
  created() {
      console.log(this.cellA,this.cellB,this.cellC)
  },
}
</script>

<style scoped>
.cell{
    width: 100%;
    height: 8.7rem;
    background: #f2f356;
}


</style>
