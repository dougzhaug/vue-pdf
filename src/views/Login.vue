<template>
    <div>
        登录中......
    </div>
</template>

<script>
    export default {
        name: "Login",
        methods:{
            Login:function (result) {
                if(result){
                    this.setToken(result.data);
                    this.$router.push('/')
                }
            },
            getAuthUrl:function (result) {
                window.location.href = result.data;
            }
        },
        mounted:function () {
            let code = this.$route.query.code;
            if(code){
                this.axios.get('/login?code='+code).then(this.Login).catch()
            }else{
                this.axios.get('/get_authorized_url').then(this.getAuthUrl).catch()
            }
        }
    }
</script>

<style scoped>

</style>