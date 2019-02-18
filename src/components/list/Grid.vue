<template>
    <div>
        <div class="title">{{title || '网格'}}</div>
        <ul class="ul">
            <router-link tag="li" class="item border-bottom" v-for="item of list" :key="item.id" :to="'/detail/'+item.id">
                <div class="item-img-wrapper">
                    <img class="item-img" :src="item.imgUrl" alt="">
                    <div class="item-text">
                        <div class="item-title">{{item.title}}</div>
                        <div class="item-content">
                            <span v-for="(val,key) of item.tag" :key="key">{{val}}</span>
                        </div>
                    </div>
                </div>
            </router-link>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "Grid",
        props:{
            title: String,
            list: Array
        },
    }
</script>

<style lang="stylus" scoped>
    @import "~@/assets/css/mixins.styl"
    .title
        margin-top .2rem
        line-height .8rem
        background #f5f5f5
        text-indent .2rem
    .ul
        display flex
        flex-wrap wrap
        .item
            padding .15rem 0 .15rem .15rem
            .item-img
                width 2.3rem
                height 3.55rem
                border-radius 0.09rem
            .item-text
                margin-top .1rem
                width 2.3rem
                color #4f4f4f
            .item-title
                font-size 14px
            .item-content
                color #9d9d9d
                font-size 12px
                margin-top .1rem
                ellipsis()
                span
                    margin-right 0.1rem
</style>