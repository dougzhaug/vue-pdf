<template>
    <div>
        <BSReader>
            <div id="imgWrapper">
                <div v-for="(item,key) of imgArray" :key="key" class="img" @click="imgClick(key)">
                    <img :src="item.imgUrl" alt="" width="100%">
                </div>
            </div>
        </BSReader>

        <CommonGallery :images="imgArray" :slide="slide" v-if="hasShowGallery" @close="handleClickSiwper"></CommonGallery>
    </div>
</template>

<script>
    import BSReader from '@/components/betterScroll/BSReader';
    import CommonGallery from '@/components/gallery/Gallery';
    import FadeAnimation from '@/components/fade/FadeAnimation';
    export default {
        name: "ScrollImage",
        components:{
            BSReader,
            CommonGallery,
            FadeAnimation
        },
        data(){
            return {
                hasShowGallery: false,
                slide:0,
                imgArray: [
                    {
                        id:'001',
                        imgUrl:'http://img1.3lian.com/img013/v5/21/d/84.jpg',
                    },
                    {
                        id:'002',
                        imgUrl:'http://pic34.photophoto.cn/20150314/0034034877183417_b.jpg',
                    },
                    {
                        id:'003',
                        imgUrl:'http://img0.imgtn.bdimg.com/it/u=260329114,3367670618&fm=26&gp=0.jpg',
                    },
                    {
                        id:'004',
                        imgUrl:'http://pic17.photophoto.cn/20101221/0020032849878089_b.jpg',
                    },
                ]
            }
        },
        methods:{
            imgClick:function (key) {
                this.slide = key;
                this.hasShowGallery=true;
            },
            handleClickSiwper(){
                this.hasShowGallery = false;
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