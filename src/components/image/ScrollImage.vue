<template>
    <BSReader>
        <div id="imgWrapper">
            <div v-for="(item,key) of imgArray" :key="key" class="img">
                <img :src="item.url" alt="" width="100%">
            </div>
        </div>
    </BSReader>
</template>

<script>
    import BSReader from '@/components/betterScroll/BSReader';
    export default {
        name: "ScrollImage",
        components:{
            BSReader
        },
        data(){
            return {
                imgArray:[
                    {
                        id:'001',
                        url:'http://img1.3lian.com/img013/v5/21/d/84.jpg',
                    },
                    {
                        id:'002',
                        url:'http://pic34.photophoto.cn/20150314/0034034877183417_b.jpg',
                    },
                    {
                        id:'003',
                        url:'http://img0.imgtn.bdimg.com/it/u=260329114,3367670618&fm=26&gp=0.jpg',
                    },
                    {
                        id:'004',
                        url:'http://pic17.photophoto.cn/20101221/0020032849878089_b.jpg',
                    },
                ]
            }
        }
    }
</script>

<style scoped>
    #imgWrapper {
        width: 100%;
        margin: 0 auto;
        position: relative;
        overflow-y: scroll;
    }
    .img{
        margin-top: 5px;
    }
</style>