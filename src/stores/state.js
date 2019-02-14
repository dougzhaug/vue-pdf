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
    city: defaultCity,
    token:defaultToken
}