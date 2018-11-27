<template>
    <div>
        <DetailBanner></DetailBanner>
        <DetailHeader></DetailHeader>
        <DetailList :list="list"></DetailList>
        <div class="content"></div>
    </div>
</template>

<script>
    import DetailBanner from './components/DetailBanner'
    import DetailHeader from './components/DetailHeader'
    import DetailList from './components/DetailList'
    export default {
        name: "Detail",
        data () {
            return {
                list:[
                    {
                        title:'成人票',
                        children:[
                            {
                                title:'成人三连票'
                            },
                            {
                                title:'成人五连票',
                                children:[
                                    {
                                        title:'成人五连票-京东店'
                                    },
                                    {
                                        title:'成人五连票-田园店'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        title:'儿童票'
                    },
                    {
                        title:'学生票'
                    },
                    {
                        title:'折扣票'
                    }
                ]
            }
        },
        components:{
            DetailBanner,
            DetailHeader,
            DetailList
        }
    }
</script>

<style lang="stylus" scoped>
    .content
        height 50rem
</style>