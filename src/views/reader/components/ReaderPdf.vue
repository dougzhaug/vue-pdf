<template>

        <PurePdf
                :pdfurl="pdfurls"
                :scale="scale"
                @onErr="onErr"
        ></PurePdf>

</template>

<script>
    import PurePdf from '@/components/pdf/PurePdf.vue'
    export default {
        name: "ReaderPdf",
        data(){
            return {
                // 所查看的pdf url
                pdfurls: 'http://qiniu.loveliyuan.com/02.pdf',
                // 缩放 默认为1
                scale: 1
            }
        },
        components: {
            PurePdf
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

<style scoped>
</style>