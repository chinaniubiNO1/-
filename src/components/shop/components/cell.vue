<template>
  <div class="cell">
    <div class="cell-T">
      <div class="cellA"><a :href="this.cellA.url"><img :src="this.cellA.img"></a></div>
      <div>
        <div class="cellC" v-for="(item,index) in cellC.list"><a :href="item.url"><img :src="item.image"></a></div>
      </div>
    </div>
    <div class="cellB"><a :href="this.cellB.url"><img :src="this.cellB.url"></a></div>
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
.cell>.cell-T{
  display: flex;
}

</style>
