<template>
    <div>
        <DetailBanner
                :sightName="sightName"
                :bannerImg="bannerImg"
                :bannerImgs="bannerImgs"
        ></DetailBanner>
        <DetailHeader></DetailHeader>
        <DetailList :list="list"></DetailList>
        <div class="content"></div>
    </div>
</template>

<script>
    import DetailBanner from './components/DetailBanner'
    import DetailHeader from './components/DetailHeader'
    import DetailList from './components/DetailList'
    import axios from 'axios'
    export default {
        name: "Detail",
        data () {
            return {
                sightName:'',
                bannerImg:'',
                bannerImgs:[],
                list:[]
            }
        },
        components:{
            DetailBanner,
            DetailHeader,
            DetailList
        },
        methods:{
            getDetailInfo(){
                axios.get('/api/detail.json',{
                    params:{
                        id:this.$route.params.id
                    }
                }).then(this.getDetailInfoSucc)
            },
            getDetailInfoSucc(res){
                res = res.data;
                if(res.ret && res.data){
                    const data = res.data;
                    console.log(data.sightName);
                    this.sightName = data.sightName;
                    this.bannerImg = data.bannerImg;
                    this.bannerImgs = data.gallaryImgs;
                    this.list = data.categoryList;
                }
            }
        },
        created(){
            this.getDetailInfo()
        }
    }
</script>

<style lang="stylus" scoped>
    .content
        height 50rem
</style>