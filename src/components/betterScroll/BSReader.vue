<template>
    <div class="bs-reader" @click="readerClick" ref="wrapper">
        <transition>
            <slot></slot>
        </transition>
    </div>
</template>

<script>
    import Bscroll from 'better-scroll';
    export default {
        name: "BSReader",
        methods:{
            readerClick:function () {
                console.log(this.scroll.y);
                if(event._constructed){ //判断是否为better-scroll的点击事件
                    // this.scroll.next(500)
                    // this.scroll.scrollTo(0,-3001,500)
                }
            }
        },
        mounted(){
            this.scroll = new Bscroll(this.$refs.wrapper,{click:true})
        }
    }
</script>

<style scoped>
    .bs-reader{
        overflow: hidden;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }
</style>