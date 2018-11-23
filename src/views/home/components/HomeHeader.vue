<template>
   <div class="header">
       <div class="header-left">
           <div class="iconfont back-icon">&#xe624;</div>
       </div>
       <div class="header-input">
           <i class="iconfont">&#xe632;</i>
           输入城市/景点/游玩主题
       </div>
       <router-link to="/city">
           <div class="header-right">
               {{city}}
               <i class="iconfont arrow-icon">&#xe62d;</i>
           </div>
       </router-link>

   </div>
</template>

<script>
    export default {
        name: "HomeHeader",
        props:{
            city:String
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
            width 1.24rem
            float right
            text-align center
            color #fff
            .arrow-icon
                margin-left -.04rem
                font-size .24rem
</style>