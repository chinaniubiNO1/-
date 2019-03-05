<template>
    <div>
        <ul>
            <li v-for="(item,index) in navigatorIcon">
                <a href="">
                    <img src="" alt="">
                    <span></span>
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
            navigatorIcon:state=>state.shop.navigatorIcon
        })
    },
}
</script>

<style scoped>

</style>


