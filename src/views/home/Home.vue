<template>
    <div>
        <HomeHeader></HomeHeader>
        <HomeSwiper :list="swiperList"></HomeSwiper>
        <HomeIcons :list="iconList"></HomeIcons>
        <Grid :list="hotList" title="热门推荐"></Grid>
        <Grid :list="weekList" title="本周头版"></Grid>
        <Grid :list="newList" title="新作主打" ></Grid>
        <Waterfall :list="waterfallList" title="更多" ></Waterfall>
        <TabBar :list="tabList"></TabBar>
    </div>
</template>

<script>
    import HomeHeader from './components/HomeHeader'
    import HomeSwiper from './components/HomeSwiper'
    import HomeIcons from './components/HomeIcons'
    import Grid from '@/components/list/Grid'
    import Waterfall from '@/components/list/Waterfall'
    import TabBar from '@/components/tabBar/TabBar'
    import axios from 'axios'
    import { mapState } from 'vuex'
    import { getHomeAD, getHomeIcon, getHomeHot, getHomeWeek, getHomeNew, getHomeWaterfall } from './api'
    export default {
        name: "Home",
        components: {
            HomeHeader,
            HomeSwiper,
            HomeIcons,
            Grid,
            Waterfall,
            TabBar
        },
        data(){
            return {
                swiperList: [],
                iconList:[],
                hotList:[],
                weekList:[],
                newList:[],
                waterfallList:[],
                tabList:[
                    {
                        txt:'表情',
                        page:'skin',
                        normalImg:require('@/assets/logo.jpeg'),
                        activeImg:require('@/assets/logo.jpeg')

                    },
                    {
                        txt:'皮肤',
                        page:'phiz',
                        normalImg:require('@/assets/logo.jpeg'),
                        activeImg:require('@/assets/logo.jpeg')
                    },
                    {
                        txt:'词库',
                        page:'thesaurus',
                        normalImg:require('@/assets/logo.jpeg'),
                        activeImg:require('@/assets/logo.jpeg')
                    },
                    {
                        txt:'皮肤',
                        page:'phiz',
                        normalImg:require('@/assets/logo.jpeg'),
                        activeImg:require('@/assets/logo.jpeg')
                    }
                ]
            }
        },
        computed:{
            ...mapState(['city'])
        },
        methods:{
            getHomeInfo(){
                //this.lastCity = this.city;
                axios.get('/api/index.json?city=' + this.city).then(this.getHomeInfoSucc)
            },
            getHomeInfoSucc(res){
                res = res.data;
                if(res.ret && res.data){
                    const data = res.data;
                    this.swiperList = data.swiperList;
                    this.iconList = data.iconList;
                    this.newList = data.recommendList;
                    this.waterfallList = data.weekendList;
                }
            }
        },
        mounted(){
            // this.getHomeInfo();
            getHomeAD().then((result)=>{
                this.swiperList = result;
            });
            getHomeIcon().then((result)=>{
                this.iconList = result;
            });
            // getHomeHot().then((result)=>{
            //     this.hotList = result.data;
            // });
            // getHomeWeek().then((result)=>{
            //     this.weekList = result.data;
            // });
            // getHomeNew().then((result)=>{
            //     this.newList = result.data;
            // });
            // getHomeWaterfall().then((result)=>{
            //     this.waterfallList = result.data;
            // });
        },
        activated(){}
    }
</script>

<style scoped>

</style>