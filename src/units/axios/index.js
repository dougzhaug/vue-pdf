import axios from "axios";
import qs from "qs";
import app from "@/main.js";

/****** 创建axios实例 ******/
const service = axios.create({
    baseURL: 'http://api.loveliyuan.com',//process.env.BASE_URL,  // api的base_url
    timeout: 5000  // 请求超时时间
});


/****** request拦截器==>对请求参数做处理 ******/
service.interceptors.request.use(config => {
    // app.$vux.loading.show({
    //     text: '数据加载中……'
    // });

    config.method === 'post'
        ? config.data = qs.stringify({...config.data})
        : config.params = {...config.params};
    // config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
    config.headers['Authorization'] = localStorage.token ? localStorage.token : '';

    return config;
}, error => {  //请求错误处理
    // app.$vux.toast.show({
    //     type: 'warn',
    //     text: error
    // });
    Promise.reject(error)
});


/****** respone拦截器==>对响应做处理 ******/
service.interceptors.response.use(
    response => {  //成功请求到数据
        // app.$vux.loading.hide();
        //这里根据后端提供的数据进行对应的处理
        // console.log(response.data);
        return response.data;
    },
    error => {  //响应错误处理
        // console.log('error');
        // console.log(error);
        // console.log(JSON.stringify(error));
        console.log(JSON.parse(JSON.stringify(error)).response);

        let response = JSON.parse(JSON.stringify(error)).response;
        let text = response.status === 404
            ? '404'
            : '网络异常，请重试';
        if(!response.data.status_code){
            alert('网络异常')
        }else{
            alert(response.data.message);
        }
        // console.log(response.data.status_code);
        // app.$vux.toast.show({
        //     type: 'warn',
        //     text: text
        // });

        return Promise.reject(error)
    }
);

export default service;