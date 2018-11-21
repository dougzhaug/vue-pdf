<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <PurePdf
            :pdfurl="pdfurls"
            :scale="scale"
            @onErr="onErr"
    ></PurePdf>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import PurePdf from '@/components/pdf/PurePdf.vue'

export default {
    name: 'homedd',
    data(){
        return {
            // 所查看的pdf url
            pdfurls: 'http://localhost:8080/01.pdf',
            // 缩放 默认为1
            scale: 1,
        }
    },
    components: {
        HelloWorld,
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
