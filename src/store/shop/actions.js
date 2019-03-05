import {ShopData} from "../../apis/shop.js";

export default {
    async handleShopDate({commit}){
        let data=await ShopData();
        commit("handleShopData",data);
        console.log(data)
    }
}