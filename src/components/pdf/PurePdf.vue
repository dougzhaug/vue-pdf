<template>
    <div class="pure-pdf" ref="wrapper" >
        <div id="cvsWraper">
            <div class="loading-pdf" v-if="isloading">{{loadingTxt}}</div>
        </div>
    </div>
</template>

<script>
    import PDFJS from 'pdfjs-dist';
    import Bscroll from 'better-scroll';
    export default {
        name: 'PurePdf',
        props: {
            pdfurl: {
                default: '',
            },
            scale: {
                default: 1,
            },
        },
        data() {
            return {
                pafDoc: null,
                pageNum: 1,
                pageRendering: false,
                pageNumPending: null,
                isloading: true,
                loadingTxt: '拼命加载中...',
            };
        },
        mounted() {
            const me = this;
            const cvsWraper = document.getElementById('cvsWraper');
            // 异步加载pdf
            PDFJS.getDocument(me.pdfurl).then(function (pafObj) {
                me.isloading = true;
                me.pdfDoc = pafObj;
                console.log(pafObj);
                let totalNum = me.pdfDoc.numPages;
                // 循环渲染所有canvas
                for (let i = 1; i <= totalNum; i++) {
                    let id = `canvas${i}`;
                    let cvsNode = document.createElement('canvas');
                    cvsNode.setAttribute('id', id);
                    cvsNode.setAttribute('class', 'canvas-item');
                    cvsWraper.appendChild(cvsNode);
                    me.renderPage(i);
                    if (totalNum === i) {
                        me.isloading = false;
                    }
                }

                me.scroll = new Bscroll(me.$refs.wrapper)
            }).catch(function (err) {
                me.loadingTxt = '加载失败，请稍后重试';
                me.$emit('onErr', err);
            });

        },
        methods: {
            // 渲染页面
            renderPage(num) {
                let me = this;
                let id = `canvas${num}`;
                let canvas = document.getElementById(id);
                let ctx = canvas.getContext('2d');
                me.pageRendering = true;
                // 通过promise获得pdf指定页面
                me.pdfDoc.getPage(num).then(function (page) {
                    let viewport = page.getViewport(me.scale);
                    canvas.height = viewport.height;
                    // console.log(canvas.height);
                    // me.heightValue += canvas.height*0.66;
                    canvas.width = viewport.width;
                    // 将pdf渲染到canvas中
                    let renderContext = {
                        canvasContext: ctx,
                        viewport: viewport
                    };
                    page.render(renderContext);
                });
            }
        },
    }
</script>

<style>
    #cvsWraper {
        /*overflow: hidden;*/
        /*position: absolute;*/
        /*position:fixed;*/
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        margin: 0 auto;
        position: relative;
        overflow-y: scroll;
        /*height:auto;*/
        border: 1px solid #ccc;
    }
    .canvas-item {
        margin: 0 auto;
        width: 100%;
    }
    .loading-pdf {
        text-align: center;
        margin-top: 300px;
    }
</style>