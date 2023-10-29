<template>
  <div id="filterByBathroomsComponent" class="row">
    <div class="col-6">
      <h5>Bathrooms:</h5>
    </div>
    <div class="col-6">
      <select v-model="selectedValue" @change="filterByBathrooms">
        <option value=''>Select an option</option>
        <option v-for="option in bathsOptions" :value="option" :key=option>{{ option }}</option>
      </select>
    </div>
  </div>
</template>
  
<script>

export default {
  name: 'FilterByBathroomsComponent',
  props: {
    bathsOptions: [String]
  },
  data() {
    return {
      selectedValue: ''
    }
  },
  methods: {
    filterByBathrooms() {
      this.$emit('bathrooms-filter-event', this.selectedValue)
    }
  }
}
</script>
  
<style scoped>
h5{
    text-align: end;
}
</style>