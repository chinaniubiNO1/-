import {ShopData} from "../../apis/shop";
export default {
   async handleHomeData({commit}){
        let data = await ShopData("t=201922820253122838");
        
        commit("handleShopData",data);
        console.log(data);
    }
}