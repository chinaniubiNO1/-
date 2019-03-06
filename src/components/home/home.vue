<template>
  <div class="home">
    <Header/>
    <div class="wrapper homeWrapper" ref="homeWrapper">
        <Input/>
        <Hot/>
        <Area/>
    </div>
  </div>
</template>

<script>
import Vuex from "vuex";
import BScroll from "better-scroll";

import Header from "../common/header";
import Input from "./components/input";
import Hot from "./components/hot";
import Area from "./components/area";

export default {
  components: {
    "Header": Header,
    "Input": Input,
    "Hot": Hot,
    "Area":Area
  },
  created() {
    this.handleHomeDate();
    this.handleAreaDate();
  },
  computed: {
    ...Vuex.mapState({
      ms: state => state.home.ms
    })
  },
  methods: {
    ...Vuex.mapActions({
      handleHomeDate: "home/handleHomeDate",
      handleAreaDate: "home/handleAreaDate"
    })
  },
  mounted () {
     this.scroll = new BScroll(this.$refs.homeWrapper,{
       scrollY:true,
       click:true,
       tap:true
     })
  }   
}
</script>


<style scoped>
.home,.homeWrapper{
    height: 100%;
    background: #f2f2f2;
  }
</style>
