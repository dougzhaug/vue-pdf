<template>
   <div class="header">
       <div class="header-left">
           <div class="iconfont back-icon">&#xe624;</div>
       </div>
       <div class="header-input">
           <i class="iconfont">&#xe632;</i>
           输入感兴趣的
       </div>
       <router-link to="/city">
           <div class="header-right">
               <!--{{this.city}}-->
               <!--<i class="iconfont arrow-icon">&#xe62d;</i>-->
           </div>
       </router-link>

   </div>
</template>

<script>
    import { mapState } from 'vuex'
    export default {
        name: "HomeHeader",
        computed:{
            ...mapState(['city'])
        }
    }
</script>

<style lang="stylus" scoped>
    @import "~@/assets/css/varibles.styl"
    .header
        display flex
        line-height $headerHeight
        background-color $bgColor
        color #fff
        .header-left
            width .64rem
            float left
            .back-icon
                text-align center
                font-size .4rem
        .header-input
            flex 1
            height .64rem
            margin-top .12rem
            margin-left .2rem
            padding-left .2rem
            line-height .64rem
            background #fff
            border-radius .08rem
            color #ccc
        .header-right
            min-width .4rem
            padding 0 .1rem
            float right
            text-align center
            color #fff
            .arrow-icon
                margin-left -.04rem
                font-size .24rem
</style>