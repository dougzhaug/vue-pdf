<template>
    <div>
        <component :is="ReaderCategory"></component>
    </div>
</template>

<script>
    import ReaderPdf from './components/ReaderPdf'
    import ReaderImage from './components/ReaderImage'
    export default {
        name: "Reader",
        components:{
            ReaderPdf,
            ReaderImage
        },
        data(){
            return {
                ReaderCategory:'ReaderImage'
            }
        }

    }
</script>

<style scoped>

</style>