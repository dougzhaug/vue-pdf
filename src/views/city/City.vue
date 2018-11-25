<template>
   <div>
      <CityHeader></CityHeader>
      <CitySearch></CitySearch>
      <CityList
              :city="city"
              :hotCities="hotCities"
              :cities="cities"
              :letter="letter"
      >
      </CityList>
      <CityAlphabet
              :letters="letters"
              @change="handleLetterChangeClick"
      >
      </CityAlphabet>
   </div>
</template>

<script>
    import CityHeader from './components/CityHeader'
    import CitySearch from './components/CitySearch'
    import CityList from './components/CityList'
    import CityAlphabet from './components/CityAlphabet'
    import axios from 'axios'

    export default {
        name: "City",
        data () {
            return {
                city:'',
                hotCities: [],
                cities: {},
                letters: [],
                letter: ''
            }
        },
        components:{
            CityHeader,
            CitySearch,
            CityList,
            CityAlphabet
        },
        methods:{
            getCityInfo(){
                axios.get('api/city.json').then(this.getCityInfoSucc);
            },
            getCityInfoSucc(res){
                res = res.data;
                if(res.ret && res.data){
                    const data = res.data;
                    this.city = data.city;
                    this.hotCities = data.hotCities;
                    this.cities = data.cities;
                    this.letters = Object.keys(data.cities);
                }
            },
            handleLetterChangeClick(letter){
                this.letter = letter
            }
        },
        mounted(){
            this.getCityInfo();
        }
    }
</script>

<style scoped>

</style>