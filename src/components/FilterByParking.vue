<template>
  <div id="filterByParkingComponent" class="row">
    <div class="col-6">
      <h5>Parking:</h5>
    </div>
    <div class="col-6">
      <select v-model="selectedValue" @change="filterByParking">
        <option value=''>Select an option</option>
        <option v-for="option in parkingOptions" :value="option" :key=option>{{ option }}</option>
      </select>
    </div>
  </div>
</template>
  
<script>

export default {
  name: 'FilterByParkingComponent',
  props: {
    parkingOptions: [String]
  },
  data() {
    return {
      selectedValue: ''
    }
  },
  methods: {
    filterByParking() {
      this.$emit('parking-filter-event', this.selectedValue)
    }
  }
}
</script>
  
<style scoped>
h5{
    text-align: end;
}
</style>