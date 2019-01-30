<template>

        <PurePdf
                :pdfurl="pdfurls"
                :scale="scale"
                @onErr="onErr"
        ></PurePdf>

</template>

<script>
    import Bscroll from 'better-scroll'
    import PurePdf from '@/components/pdf/PurePdf.vue'
    export default {
        name: "ReaderPdf",
        data(){
            return {
                // 所查看的pdf url
                pdfurls: 'http://qiniu.loveliyuan.com/28.pdf',
                // 缩放 默认为1
                scale: 1
            }
        },
        components: {
            PurePdf
        },
        mounted(){
            // console.log(this.$refs.wrapper);
            // this.scroll = new Bscroll(this.$refs.wrapper)
        },
        methods: {
            // 加载失败的callback
            onErr(err) {
                console.log('pdf加载失败，请重试');
                console.log('错误信息：', err);
            }
        }
    }
</script>

<style lang="stylus" scoped>
</style>