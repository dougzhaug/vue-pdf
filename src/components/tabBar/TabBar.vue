<template>
    <div class="tabberWarp" >
        <div class="warp">
            <Item :txt='item.txt' :page='item.page' @change='getVal' v-for='item in tabbarDes':sel='selected'>

                <img :src="item.normalImg" slot='normalImg'>
                <img :src="item.activeImg" slot='activeImg'>
            </Item>
        </div>
    </div>
</template>

<script>
    import Item from './Item.vue'
    export default {
        name: "TabBar",
        components:{
            Item
        },
        data:function(){
            return{
                selected:'skin',
                tabbarDes:[
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
                    }
                ]
            }
        },
        methods:{
            getVal:function(res){
                this.selected = res;
            }
        }
    }
</script>

<style scoped>
    .warp{
        width: 100%;
        border-top: 1px solid #eee;
        background: #fff;
        display: flex;
        align-items: center;
        justify-content: space-around;
        font-size: 0;
    }
    .warp img{
        width: 20px;
        height: 20px;
    }
    .tabberWarp img{
        margin-top: 10px;
        margin-bottom: 5px;

    }
    .tabberWarp{
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        padding-bottom: 5px;
        background: #fff;
    }
</style>