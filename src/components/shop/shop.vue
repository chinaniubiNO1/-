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
import Input from "./components/input";
import Banner from "./components/banner";
import List from "./components/list";
import Cell from "./components/cell";

export default {
    components:{
        "Input":Input,
        "Banner":Banner,
        "List":List,
        "Cell":Cell
    },
    created() {
        this.handleShopDate()
    },
    computed: {
        ...Vuex.mapState({
            state:state=>state.shop,
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