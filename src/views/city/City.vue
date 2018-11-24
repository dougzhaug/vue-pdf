<template>
   <div>
      <CityHeader></CityHeader>
      <CitySearch></CitySearch>
      <CityList></CityList>
      <CityAlphabet></CityAlphabet>
   </div>
</template>

<script>
    import CityHeader from './components/CityHeader'
    import CitySearch from './components/CitySearch'
    import CityList from './components/CityList'
    import CityAlphabet from './components/CityAlphabet'
    export default {
        name: "City",
        components:{
            CityHeader,
            CitySearch,
            CityList,
            CityAlphabet
        }
    }
</script>

<style scoped>

</style>