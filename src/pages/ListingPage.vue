<template>
  <div id="listing">
    <div id="header">
      <h1>ListingProperties.com</h1>
    </div>

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
    getPropertiesList() {
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

<style scoped>
#header{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 15vh;
  background-color: cadetblue;
  color: aliceblue;
  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
#listing{  
  background-color: rgb(233, 244, 245);
}
</style>