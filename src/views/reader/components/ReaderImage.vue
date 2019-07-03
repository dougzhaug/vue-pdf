<template>
    <div class="body">
        <ScrollImage></ScrollImage>
    </div>
</template>

<script>
    import ScrollImage from '@/components/image/ScrollImage';
    export default {
        name: "ReaderImage",
        components:{
            ScrollImage
        }
    }
</script>

<style scoped>
.bs-reader{
    margin-top: 50px!important;
}
</style>