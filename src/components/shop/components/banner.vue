<template>
  <div class="banner">
    <div class="swiper-container banner-container" ref="bannerContainer">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item,index) in banners">
          <img :src="item.image">
        </div>
      </div>
    </div>
    <div class="swiper-pagination banner-pagination" id="swiper-span"></div>
  </div>
</template>

<script>
import Vuex from "vuex";
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";

export default {
  computed: {
    ...Vuex.mapState({
      banners: state => state.shop.banners
    })
  },
  updated() {
    if (!this.swiper) {
      this.swiper = new Swiper(this.$refs.bannerContainer, {
        autoplay: {
          disableOnInteraction: false
        },
        loop: true,
        pagination: {
          el: ".banner-pagination"
        }
      });
    }
  }
};
</script>

<style scoped>
.banner-container {
  width: 100%;
  height: 3.8rem;
}

.banner-container img {
  width: 100%;
  height: 100%;
}

.banner-pagination{
  width: 100%;
  height: .5rem;
}
#swiper-span>span{
  width: 15px;
  height: 15px;
}
</style>


