let defaultCity = '石家庄';
let defaultToken = null;
try {
    if(localStorage.city ){
        defaultCity = localStorage.city;
    }
    if(localStorage.token ){
        defaultToken = localStorage.token;
    }
} catch (e) {}

export default {
    city: defaultCity,      //城市
    token:defaultToken,      //后台返回的登录token

    /**
     * 详情页
     */
    detailTab: 'DetailList',
}