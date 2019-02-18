<template>
    <div>
        <div class="title">{{title || '瀑布流'}}</div>
        <ul>
            <li class="item border-bottom" v-for="item of list" :key="item.id">
                <div class="item-img-wrapper">
                    <img class="item-img" :src="item.imgUrl" alt="">
                </div>
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "Waterfall",
        props:{
            title: String,
            list: Array
        },
    }
</script>

<style lang="stylus" scoped>
    @import "~@/assets/css/mixins.styl"
    .title
        line-height .8rem
        background #f5f5f5
        text-indent .2rem
    .item
        .item-img-wrapper
            overflow hidden
            height 0
            padding-bottom 63.09%
            .item-img
                width 100%
                border-radius 0.1rem
        .item-info
            padding .1rem
            .item-title
                line-height .54rem
                font-size .32rem
                ellipsis()
            .item-desc
                line-height .4rem
                color #9d9d9d
                ellipsis()
</style>