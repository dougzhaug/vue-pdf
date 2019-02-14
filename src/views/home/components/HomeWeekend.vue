<template>
    <div>
        <div class="title">周末去哪</div>
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
        name: "HomeWeekend",
        props:{
            list: Array
        },
        data () {
            return {
                recommendList: [
                    {
                        id:'001',
                        imgUrl:'http://img1.qunarzz.com/sight/source/1511/2b/5e0923cd15e06.jpg_r_640x214_b9c024c1.jpg',
                        title:'清东陵',
                        desc:'福临的陵寝，背靠昌瑞山，前朝金星山，位居陵区中轴线上，规模宏大。'
                    },
                    {
                        id:'002',
                        imgUrl:'http://img1.qunarzz.com/sight/source/1509/79/e3036d299610f8.jpg_r_640x214_ac8d495d.jpg',
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