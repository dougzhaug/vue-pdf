<template>
    <div>
        <DetailBanner
                :sightName="sightName"
                :bannerImg="bannerImg"
                :bannerImgs="bannerImgs"
        ></DetailBanner>
        <DetailHeader></DetailHeader>
        <DetailTab></DetailTab>

        <component :is="detailTab"></component>
        <TabBar></TabBar>
    </div>
</template>

<script>
    import DetailBanner from './components/DetailBanner'
    import DetailHeader from './components/DetailHeader'
    import DetailList from './components/DetailList'
    import DetailTab from './components/DetailTab'
    import DetailCatalog from './components/DetailCatalog'
    import TabBar from '@/components/tabBar/TabBar'
    import axios from 'axios'
    import { mapState } from 'vuex'
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
            DetailList,
            DetailTab,
            DetailCatalog,
            TabBar
        },
        computed:{
            ...mapState(['detailTab'])
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
        },
        activated(){
            this.getDetailInfo()
        }
    }
</script>

<style scoped>


</style>