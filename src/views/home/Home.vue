<template>
    <div>
        <HomeHeader></HomeHeader>
        <HomeSwiper :list="swiperList"></HomeSwiper>
        <HomeIcons :list="iconList"></HomeIcons>
        <HomeRecommend :list="recommendList"></HomeRecommend>
        <HomeWeekend :list="weekendList"></HomeWeekend>
    </div>
</template>

<script>
    import HomeHeader from './components/HomeHeader'
    import HomeSwiper from './components/HomeSwiper'
    import HomeIcons from './components/HomeIcons'
    import HomeRecommend from './components/HomeRecommend'
    import HomeWeekend from './components/HomeWeekend'
    import axios from 'axios'
    export default {
        name: "Home",
        components: {
            HomeHeader,
            HomeSwiper,
            HomeIcons,
            HomeRecommend,
            HomeWeekend
        },
        data(){
            return {
                swiperList: [],
                iconList:[],
                recommendList:[],
                weekendList:[]

            }
        },
        methods:{
            getHomeInfo(){
                axios.get('/api/index.json').then(this.getHomeInfoSucc)
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
        }
    }
</script>

<style scoped>

</style>