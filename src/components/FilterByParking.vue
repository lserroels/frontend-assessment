<template>
    <div id="filterByParkingComponent">
      <h4>Parking:</h4>
      <select v-model="selectedValue" @change="filterByParking">
        <option value=''>Select an option</option>
        <option v-for="option in parkingOptions" :value="option" :key=option>{{ option }}</option>
   
    </select>
    </div>
</template>
  
  <script>
  
  export default {
    name: 'FilterByParkingComponent',
    props: {
      parkingOptions: [String]
    },
    data(){
        return {
            selectedValue:''
        }
    },
    methods:{
        filterByParking(){
            this.$emit('parking-filter-event', this.selectedValue)
        }
    }
  }
  </script>
  
  <style scoped>
  </style>