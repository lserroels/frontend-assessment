<template>
  <div id="detail">
    <h1>Detail for ID: {{  $route.params.id}}  </h1>
    <HeaderDetail :title=property.Title :location=property.Location :price="property['Sale Price']" :dateListed=property.DateListed></HeaderDetail>
  </div>
</template>

<script>
import HeaderDetail from "../components/HeaderDetailComponent.vue"
import IndexService from '@/services/indexService';

export default {
  data() {
    return {
      property: Object
    }
  },
  created() {
    this.getProperty(this.$route.params.id)
  },
  components: {
    HeaderDetail
  },
  methods: {
    getProperty(id){
      IndexService.getIndexDataByID(id)
      .then(property => {
        this.property = property
        console.log(this.property)
      })
      .catch(error => {
        console.error(error.message);
      });
    },
  }
};
</script>