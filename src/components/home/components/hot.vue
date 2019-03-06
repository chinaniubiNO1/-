<template>
  <div class="hot">
    <h2>
      <a href>正在热映</a>
    </h2>
    <ul>
      <li v-for="(item,index) in ms" >
        <a href="##">
          <img :src="item.img">
          <i>{{item.r}}</i>
          <span>{{item.t}}</span>
        </a>
      </li>
    </ul>
    <p><a href="##">即将上映52部</a></p>

  </div>
</template>

<script>
import Vuex from "vuex";

export default {
    // updated() {
    //     console.log(this.ms)
    // },
  computed: {
    ...Vuex.mapState({
      ms: state => state.home.ms
    })
  }
};
</script>

<style scoped>
.hot{
    width: 100%;
    height: 9rem;
    padding-top: .3rem;
    border-bottom: .02rem solid #333;
}
.hot>h2{
    display: block;
    width: 100%;
    height: .6rem;
    line-height: .6rem;
    padding-left: .3rem;
}
.hot>h2>a{
    color: #333;
    font-size: .4rem;
}
.hot>ul{
    width: 100%;
    height: 7rem;
    display: flex;
    flex-wrap: wrap;
    padding: .2rem .1rem;
    overflow: hidden;
    border-bottom: .02rem solid #333;
}
.hot>ul>li{
  display: block;
  width: 24%;
  height: 50%;
  text-align: center;
  margin-bottom: .3rem;
}
.hot>ul>li>a{
  display: block;
  width: 100%;
  height: 100%;
  position: relative;
}
.hot>ul>li>a>img{
  width: 1.6rem;
  height: 2.4rem;
  margin: 0 auto;
}
.hot>ul>li>a>i{
  position: absolute;
  display: block;
  width: .5rem;
  height: .3rem;
  background: palevioletred;
  color: #FFF;
  top:.1rem;
  right: .1rem;
}
.hot>ul>li>a>span{
  display: block;
  margin-top: .1rem;
  font-size: .3rem;
}
.hot>p{
  display: flex;
  width: 100%;
  height: .6rem;
  padding-left: .3rem;
  margin-top: .3rem;
}
.hot>p>a{
  font-size: .4rem;
  line-height: .6rem;
  color: #333;
}
</style>
