<template>
  <div id="listing">
    <h1>Properties List</h1>
    <FilterConteiner :propertiesList=items @filter="ApplyFilters"></FilterConteiner>
    <Grid :list=itemsFiltered></Grid>
  </div>
</template>

<script>
import Grid from "../components/GridComponent"
import FilterConteiner from "@/components/FilterConteiner.vue";
import IndexService from '@/services/indexService';

export default {
  data() {
    return {
      items: [],
      itemsFiltered: []
    }
  },
  created() {
    this.getPropertiesList()
  },
  components: {
    Grid,
    FilterConteiner
  },
  methods: {
    getPropertiesList(){
      IndexService.getIndexData()
      .then(properties => {
        this.items = properties
        this.itemsFiltered = properties
      })
      .catch(error => {
        console.error(error.message);
      });
    },
    ApplyFilters(items) {
      this.itemsFiltered = items
    }
  }
};
</script>