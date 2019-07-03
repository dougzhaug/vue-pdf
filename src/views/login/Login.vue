<template>
    <div>
        <component :is="LoginType"></component>
    </div>
</template>

<script>
    import WechatLogin from './components/WechatLogin';
    import PhoneLogin from './components/PhoneLogin';
    export default {
        name: "Login",
        components:{
            WechatLogin,
            PhoneLogin
        },
        data(){
            return {
                LoginType:'',
            }
        },
        created() {
            if(this.isWechat()){
                this.LoginType = 'WechatLogin'
            }else{
                this.LoginType = 'PhoneLogin'
            }
        }
    }
</script>

<style scoped>

</style>