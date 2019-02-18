<template>
    <div>
        登录中......
    </div>
</template>

<script>
    import { mapMutations } from 'vuex'
    export default {
        name: "Login",
        methods:{
            ...mapMutations(['setToken']),
            Login(result) {
                if(result){
                    this.setToken(result.data);
                    this.$router.push('/reader')
                }
            },
            getAuthUrl(result) {
                window.location.href = result.data;
            }
        },
        mounted:function () {
            let code = this.$route.query.code;
            if(code){
                this.axios.get('http://api.loveliyuan.com/login?code='+code).then(this.Login).catch()
            }else{
                this.axios.get('http://api.loveliyuan.com/get_authorized_url').then(this.getAuthUrl).catch()
            }
        }
    }
</script>

<style scoped>

</style>