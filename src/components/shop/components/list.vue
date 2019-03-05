<template>
    <div class="list">
        <ul>
            <li v-for="(item,index) in navigatorIcon">
                <a :href="item.url">
                    <img :src="item.image">
                    <span>{{item.iconTitle}}</span>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
import Vuex from "vuex";

export default {
    computed: {
        ...Vuex.mapState({
            navigatorIcon:state=>state.shop.navigatorIcon,
        })
    }
}
</script>

<style scoped>
.list{
    width: 100%;
    height: 3.8rem;
    display: flex;
    margin-top: .3rem;
}
.list > ul{
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
}
.list > ul > li{
    display: flex;
    width: 25%;
    height: 1.9rem;
    justify-content: center;
    text-align: center;
    font-size: .28rem;
}
.list > ul > li > a{
    display: block;
    width: 100%;
    height: 100%;
}
.list > ul > li > a > img{
    width: 110px;
    height: 110px;
    margin:0 auto;
}
.list > ul > li > a > span{
    display: inline-block;
    margin-top: .15rem;
}
</style>


