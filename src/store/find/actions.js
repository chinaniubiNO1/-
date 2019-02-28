import {HomeData} from "../../apis/home";
export default {
   async handleHomeData({commit}){
        let data = await HomeData({os:3});
        
        commit("handleHomeData",data.data);
    }
}