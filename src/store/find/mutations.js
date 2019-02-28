export default {
    handleHomeData(state,data){
        state.banners = data.banners;
        state.grids = data.grids;
        state.tabs = data.tabs;
    }
}