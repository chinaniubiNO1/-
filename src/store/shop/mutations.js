export default {
    handleShopData(state,data){
        state.banners = data.scrollImg;
        state.navigatorIcon = data.navigatorIcon;
    }
}