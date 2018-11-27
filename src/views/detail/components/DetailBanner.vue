<template>
    <div>
        <div class="banner" @click="handleClickBanner">
            <img class="banner-img" src="//img1.qunarzz.com/sight/p0/1505/aa/aaba14b511b633c7.water.jpg_600x330_e63b20d3.jpg" alt="">
            <div class="banner-info">
                <div class="banner-title">克什克腾石阵景区(AAAAA景区)</div>
                <div class="banner-number"><i class="iconfont arrow-icon">&#xe62d;</i>88</div>
            </div>
        </div>
        <CommonGallery :images="images" v-show="hasShowGallery" @close="handleClickSiwper"></CommonGallery>
    </div>
</template>

<script>
    import CommonGallery from '@/components/gallery/Gallery'
    export default {
        name: "DetailBanner",
        data(){
            return{
                hasShowGallery: false,
                images:[
                    {
                        id:'001',
                        imgUrl: 'https://dimg06.c-ctrip.com/images/35070o000000flw6b524E_C_300_256_Q80.jpg',
                    },
                    {
                        id:'002',
                        imgUrl:'http://img1.qunarzz.com/sight/p0/1505/aa/aad740b42ce7c6f6.water.jpg_r_800x800_657fc51e.jpg'
                    },
                    {
                        id:'003',
                        imgUrl:'http://img1.qunarzz.com/sight/p0/1505/86/86140f3a99985f50.water.jpg_r_800x800_f7923a14.jpg'
                    }
                ]
            }
        },
        components:{
            CommonGallery
        },
        methods:{
            handleClickBanner(){
                this.hasShowGallery = true;
            },
            handleClickSiwper(){
                this.hasShowGallery = false;
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .banner
        position relative
        overflow hidden
        height 0
        padding-bottom 55%
        .banner-img
            width 100%
        .banner-info
            display flex
            position absolute
            right 0
            left 0
            bottom 0
            line-height .6rem
            color #fff
            background-image linear-gradient(rgba(0,0,0,0),rgba(0,0,0,.8))
            .banner-title
                flex 1
                padding 0 .2rem
                font-size .32rem
            .banner-number
                margin-top .1rem
                padding 0 .4rem
                height .4rem
                line-height .4rem
                border-radius .15rem
                background rgba(0, 0, 0, .6)
</style>