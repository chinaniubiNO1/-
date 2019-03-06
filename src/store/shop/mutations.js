export default {
    handleShopData(state,data){
        state.banners = data.scrollImg;
        state.navigatorIcon = data.navigatorIcon;
        state.cellA = data.cellA;
        state.cellB = data.cellB;
        state.cellC = data.cellC;
        state.topic = data.topic;
    }
}