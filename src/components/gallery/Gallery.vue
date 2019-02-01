<template>
    <div class="container" @click="handleClickSwiper">
        <div class="wrapper">
            <swiper :options="swiperOption">
                <!-- slides -->
                <swiper-slide v-for="item of images"
                              :key="item.id"
                              class="swiper-zoom-container">

                    <img class="wrapper-img" :src="item.imgUrl" alt="">
                </swiper-slide>
                <!-- Optional controls -->
                <div class="swiper-pagination" slot="pagination"></div>
                <!--<div class="swiper-button-prev" slot="button-prev"></div>-->
                <!--<div class="swiper-button-next" slot="button-next"></div>-->
                <!--<div class="swiper-scrollbar"   slot="scrollbar"></div>-->
            </swiper>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CommonGallery",
        props:{
            images:{
                type: Array,
                default () {
                    return []
                }
            },
            slide:{
                type:Number,
                default(){
                    return 0
                }
            }
        },
        data(){
            return{
                swiperOption:{
                    pagination: {
                        el:'.swiper-pagination',
                        type:'fraction',
                        clickable :true
                    },
                    observer:true,
                    observeParents:true,
                    zoom : true,                //是否可缩放
                    initialSlide: this.slide    //初始化打开第几个图片
                }
            }
        },
        methods:{
            handleClickSwiper(){
                this.$emit('close');
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .container >>> .swiper-container
        overflow initial
    .container
        z-index 99
        display flex
        justify-content center
        flex-direction column
        position fixed
        top 0
        right 0
        bottom 0
        left 0
        background black
        .wrapper
            background #ccc
            /*height 0*/
            /*width 100%*/
            /*padding-bottom 100%*/
            .wrapper-img
                width 100%
            .swiper-pagination
                color #fff
                bottom  -.5rem
</style>