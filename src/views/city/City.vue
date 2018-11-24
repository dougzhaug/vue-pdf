<template>
   <div>
      <CityHeader></CityHeader>
      <CitySearch></CitySearch>
   </div>
</template>

<script>
    import CityHeader from './components/CityHeader'
    import CitySearch from './components/CitySearch'
    export default {
        name: "City",
        components:{
            CityHeader,
            CitySearch
        }
    }
</script>

<style scoped>

</style>