<template>
    <div id="filterByBathroomsComponent">
      <h4>Bathrooms:</h4>
      <select v-model="selectedValue" @change="filterByBathrooms">
        <option value='' >Select an option</option>
        <option v-for="option in bathsOptions" :value="option" :key=option>{{ option }}</option>
   
    </select>
    </div>
</template>
  
  <script>
  
  export default {
    name: 'FilterByBathroomsComponent',
    props: {
      bathsOptions: [String]
    },
    data(){
        return {
            selectedValue:''
        }
    },
    methods:{
        filterByBathrooms(){
            this.$emit('bathrooms-filter-event', this.selectedValue)
        }
    }
  }
  </script>
  
  <style scoped>
  </style>