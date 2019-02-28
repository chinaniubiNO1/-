import Vue from "vue";
import Vuex from "vuex";
import home from "./home";
import shop from "./shop";
import find from "./find";
Vue.use(Vuex);

let state = {};
let actions = {};
let getters = {};
let mutations = {};


const store = new Vuex.Store({
    state,
    actions,
    getters,
    mutations,
    modules:{
        home,
        shop,
        find
    }
})

export default store;