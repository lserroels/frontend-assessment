<template>
    <div id="filterByBedroomsComponent">
      <h4>Bedrooms:</h4>
      <select v-model="selectedValue" @change="filterByBedrooms">
        <option value=''>Select an option</option>
        <option v-for="option in bedsOptions" :value="option" :key=option>{{ option }}</option>
   
    </select>
    </div>
</template>
  
  <script>
  
  export default {
    name: 'FilterByBedroomsComponent',
    props: {
      bedsOptions: [String]
    },
    data(){
        return {
            selectedValue:''
        }
    },
    methods:{
        filterByBedrooms(){
            this.$emit('bedrooms-filter-event', this.selectedValue)
        }
    }
  }
  </script>
  
  <style scoped>
  </style>