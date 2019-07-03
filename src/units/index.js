exports.install = (Vue,option)=>{

    Vue.prototype.isWechat = () =>{
        return navigator.userAgent.toLowerCase().indexOf('micromessenger') !== -1
    }

}