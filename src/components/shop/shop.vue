<template>
    <div class="shop">
        <Input></Input>
        <Banner></Banner>
        <List></List>
        <Cell></Cell>
    </div>
</template>
<script>
import Vuex from "vuex";
import axios from "axios";
import BScroll from "better-scroll";
import Input from "./components/input";
import Banner from "./components/banner";
import List from "./components/list";
import Cell from "./components/cell";
import Topic from "./components/topic";

export default {
    components:{
        "Input":Input,
        "Banner":Banner,
        "List":List,
        "Cell":Cell,
        "Topic":Topic,
    },
    created() {
        this.handleShopDate()
    },
    computed: {
        ...Vuex.mapState({
            state:state=>state.shop,
            banners:state => state.shop.scrollImg,
            navigatorIcon:state => state.shop.navigatorIcon,
            cellA:state => state.shop.cellA,
            cellB:state => state.shop.cellB,
            cellC:state => state.shop.cellC,
            topic:state => state.shop.topic,
        })
    },
    methods: {
        ...Vuex.mapActions({
            handleShopDate:"shop/handleShopDate"
            }),
            
        ...Vuex.mapMutations({
            handleShopData:"shop/handleShopData"
        })
    },
     
}
</script>

<style  scoped>
.shop{
    height: 100%;
    width: 100%;
    margin-top: .9rem;
}
</style>