export default {
    changeCity(state,city){
        state.city = city;
        try {
            localStorage.city = city;
        } catch (e) {}
    },
    //设置token
    setToken(state,token){
        state.token = token;
        try {
            localStorage.token = token;
        } catch (e) {}
    },

    /***详情页***/
    setDetailTab(state,tab){
        state.detailTab = tab;
    }
}