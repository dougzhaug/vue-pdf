import axios from "axios";
import qs from "qs";
import weui from 'weui.js'

/****** 创建axios实例 ******/
const service = axios.create({
    baseURL: 'http://card.dev.loveliyuan.com/api/',//process.env.BASE_URL,  // api的base_url
    timeout: 5000  // 请求超时时间
});


/****** request拦截器==>对请求参数做处理 ******/
service.interceptors.request.use(config => {

    weui.loading('正在加载...', {
        className: 'custom-classname'
    });

    config.method === 'post'
        ? config.data = qs.stringify({...config.data})
        : config.params = {...config.params};
    config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
    config.headers['Authorization'] = localStorage.token ? localStorage.token : '';

    return config;
}, error => {  //请求错误处理
    weui.loading().hide();
    Promise.reject(error)
});


/****** respone拦截器==>对响应做处理 ******/
service.interceptors.response.use(

    response => {  //成功请求到数据
        weui.loading().hide();
        //这里根据后端提供的数据进行对应的处理
        return response.data;
    },
    error => {  //响应错误处理
        weui.loading().hide();
        // console.log('error');
        // console.log(error);
        // console.log(JSON.stringify(error));
        // console.log(JSON.parse(JSON.stringify(error)).response);
        //
        // let response = JSON.parse(JSON.stringify(error)).response;
        // let text = response.status === 404
        //     ? '404'
        //     : '网络异常，请重试';
        // if(!response.data.status_code){
        //     alert('网络异常')
        // }else{
        //     alert(response.data.message);
        // }
        // console.log(response.data.status_code);
        // app.$vux.toast.show({
        //     type: 'warn',
        //     text: text
        // });

        return Promise.reject(error)
    }
);

export default service;