<template>
  <div id="filterByBedroomsComponent" class="row">
    <div class="col-6">
      <h5>Bedrooms:</h5>
    </div>
    <div class="col-6">
      <select v-model="selectedValue" @change="filterByBedrooms">
        <option value=''>Select an option</option>
        <option v-for="option in bedsOptions" :value="option" :key=option>{{ option }}</option>
      </select>
    </div>
  </div>
</template>
  
<script>

export default {
  name: 'FilterByBedroomsComponent',
  props: {
    bedsOptions: [String]
  },
  data() {
    return {
      selectedValue: ''
    }
  },
  methods: {
    filterByBedrooms() {
      this.$emit('bedrooms-filter-event', this.selectedValue)
    }
  }
}
</script>
  
<style scoped>
h5{
    text-align: end;
}
</style>