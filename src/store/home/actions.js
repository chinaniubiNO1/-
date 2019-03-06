import {HomeData , AreaData} from "../../apis/home.js";
export default {
   async handleHomeDate({commit}){
        let data = await HomeData();
        
        commit("handleHomeData",data)
    },

    async handleAreaDate({commit}){
        let data = await AreaData();
        
        commit("handleAreaData",data);

        console.log(data)
    }
}