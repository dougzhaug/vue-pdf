<template>
    <div>
        <SearchBar></SearchBar>
        <VerticalGrid></VerticalGrid>
        <BannerGrid></BannerGrid>
        <SquareGrid></SquareGrid>
    </div>
</template>

<script>
    import SearchBar from './components/SearchBar'
    import VerticalGrid from '@/components/grid/VerticalGrid'
    import BannerGrid from '@/components/grid/BannerGrid'
    import SquareGrid from '@/components/grid/SquareGrid'
    export default {
        name: "Index",
        components:{
            SearchBar,
            VerticalGrid,
            BannerGrid,
            SquareGrid
        }
    }
</script>

<style lang="scss" scoped>

</style>