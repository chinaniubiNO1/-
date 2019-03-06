<template>
    <div class="topic">
        <div class="topic-T"></div>
        <div class="topic-C"></div>
        <div class="topic-B"></div>

    </div>
</template>

<script>
import Vuex from "vuex";

export default {
    computed: {
        ...Vuex.mapState({
            topic : state => state.shop.topic,
        })
    },
    updated() {
        console.log(this.topic)
    },
}
</script>

<style scoped>
.topic{
    width: 100%;
    height: 11.8rem;
    background: green;
}



</style>

