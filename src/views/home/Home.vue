<template>
    <div>
        <HomeHeader></HomeHeader>
        <HomeSwiper :list="swiperList"></HomeSwiper>
        <HomeIcons :list="iconList"></HomeIcons>
        <Grid :list="recommendList" ></Grid>
        <Grid :list="recommendList" title="热门" ></Grid>
        <Waterfall :list="weekendList" title="快乐周末" ></Waterfall>
        <HomeWeekend :list="weekendList"></HomeWeekend>
    </div>
</template>

<script>
    import HomeHeader from './components/HomeHeader'
    import HomeSwiper from './components/HomeSwiper'
    import HomeIcons from './components/HomeIcons'
    import HomeRecommend from './components/HomeRecommend'
    import Grid from '@/components/list/Grid'
    import Waterfall from '@/components/list/Waterfall'
    import HomeWeekend from './components/HomeWeekend'
    import axios from 'axios'
    import { mapState } from 'vuex'
    export default {
        name: "Home",
        components: {
            HomeHeader,
            HomeSwiper,
            HomeIcons,
            HomeRecommend,
            HomeWeekend,
            Grid,
            Waterfall
        },
        data(){
            return {
                lastCity: '',
                swiperList: [],
                iconList:[],
                recommendList:[],
                weekendList:[]

            }
        },
        computed:{
            ...mapState(['city'])
        },
        methods:{
            getHomeInfo(){
                this.lastCity = this.city;
                axios.get('/api/index.json?city=' + this.city).then(this.getHomeInfoSucc)
            },
            getHomeInfoSucc(res){
                res = res.data;
                if(res.ret && res.data){
                    const data = res.data;
                    this.swiperList = data.swiperList;
                    this.iconList = data.iconList;
                    this.recommendList = data.recommendList;
                    this.weekendList = data.weekendList;
                }
            }
        },
        mounted(){
            this.getHomeInfo()
        },
        activated(){
            if(this.lastCity !== this.city){
                this.getHomeInfo()
            }
        }
    }
</script>

<style scoped>

</style>