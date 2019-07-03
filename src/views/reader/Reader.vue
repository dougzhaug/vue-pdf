<template>
    <div class="body">

        <component :is="ReaderCategory"></component>

        <TabBar :list="tabList"></TabBar>
    </div>
</template>

<script>
    import ReaderPdf from './components/ReaderPdf'
    import ReaderImage from './components/ReaderImage'
    import TabBar from '@/components/tabBar/TabBar'
    export default {
        name: "Reader",
        components:{
            ReaderPdf,
            ReaderImage,
            TabBar
        },
        data(){
            return {
                ReaderCategory:'ReaderPdf',
                tabList:[
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
                    },
                    {
                        txt:'皮肤',
                        page:'phiz',
                        normalImg:require('@/assets/logo.jpeg'),
                        activeImg:require('@/assets/logo.jpeg')
                    }
                ]
            }
        }

    }
</script>

<style scoped>
</style>