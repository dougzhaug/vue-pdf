<template>
    <div>
        <div class="title">热门推荐</div>
        <ul>
            <router-link tag="li" class="item border-bottom" v-for="item of list" :key="item.id" :to="'/detail/'+item.id">
                <div class="item-img-wrapper">
                    <img class="item-img" :src="item.imgUrl" alt="">
                </div>
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                    <button class="item-button">查看详情</button>
                </div>
            </router-link>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "HomeRecommend",
        props:{
            list: Array
        },
        data () {
            return {
                recommendList: [
                    {
                        id:'001',
                        imgUrl:'http://img1.qunarzz.com/sight/p0/1412/f4/ceb0a95c3d11daee35c46eed064c4303.water.jpg_200x200_6d00c8b5.jpg',
                        title:'清东陵',
                        desc:'福临的陵寝，背靠昌瑞山，前朝金星山，位居陵区中轴线上，规模宏大。'
                    },
                    {
                        id:'002',
                        imgUrl:'http://img1.qunarzz.com/sight/p39/201211/00/86d1e4c007f206c493835fbb.jpg_200x200_e5841767.jpg',
                        title:'月坨岛',
                        desc:'“美景”、“美趣”和“美味”三美尤其让人惊艳。无论是赶海拾贝、还是涉水弄雕，是飞艇驽空，还是渔猎垂钓，都富蕴着风情万千'
                    },
                    {
                        id:'003',
                        imgUrl:'http://img1.qunarzz.com/sight/p0/1805/c7/c727f996cbfdeea5a3.img.jpg_200x200_aee92ddd.jpg',
                        title:'滦县青龙山',
                        desc:'河北省滦县青龙山原名清凉山，位于滦县中南部'
                    },
                    {
                        id:'004',
                        imgUrl:'http://img1.qunarzz.com/sight/p0/1703/34/34057084480826dba3.img.jpg_200x200_206dc70f.jpg',
                        title:'塔寺峪景区',
                        desc:'塔寺峪景区位于河北省迁安市大五里乡境内，地处迁安市、迁西县的交界地带。距市政府所在地迁安市区 23.3 公里。'
                    },
                    {
                        id:'005',
                        imgUrl:'http://img1.qunarzz.com/sight/p0/201301/14/783eddccf276834793835fbb.jpg_200x200_3c0be82c.jpg',
                        title:'山叶口景区',
                        desc:'山叶口景区座落于迁安市西部大五里乡山叶口村，总面积14平方公里'
                    },
                    {
                        id:'006',
                        imgUrl:'http://img1.qunarzz.com/sight/p0/1708/bd/bddb4147430026cba3.img.jpg_200x200_f97fe273.jpg',
                        title:'挂云山景区',
                        desc:'挂云山最高峰海拔629.5米，是迁安市的第二高峰，挂云山以山美、境幽、峰奇、石怪、水灵闻名于京东。'
                    },
                ]
            }
        }
    }
</script>

<style lang="stylus" scoped>
    @import "~@/assets/css/mixins.styl"
    .title
        margin-top .2rem
        line-height .8rem
        background #f5f5f5
        text-indent .2rem
    .item
        overflow hidden
        display flex
        height 1.9rem
        /*background #eee*/
        .item-img
            width 1.7rem
            height 1.7rem
            padding .1rem
        .item-info
            flex 1
            padding .1rem
            min-width 0
            .item-title
                line-height .54rem
                font-size .32rem
                ellipsis()
            .item-desc
                line-height .4rem
                color #ccc
                ellipsis()
            .item-button
                line-height .44rem
                margin-top 0.16rem
                padding 0 .1rem
                color #fff
                background #ff9300
</style>