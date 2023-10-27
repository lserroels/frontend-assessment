<template>
  <div id="card" class="card h-100">
    <ImageCustom :url=propertyInfo.ThumbnailURL class="img card-img-top"></ImageCustom>
    <div class="card-middle">
      <h2>titulo: {{ propertyInfo.Title }}</h2>
      <h3>Location: {{ propertyInfo.Location }}</h3>
      <h4>description: {{ propertyInfo.Bedrooms }} | {{ propertyInfo.Bathrooms }}</h4>
      </div>
      <div class="card-body">
      <h1>Price: {{ propertyInfo.SalePrice }}</h1>
    </div>

    <div class="card-footer">

      <router-link :to="'/detail/' + propertyInfo.Id">
        <button>View Details</button>
      </router-link>
    </div>
  </div>
</template>
  
<script>
import ImageCustom from '../components/ImageCustomComponent.vue'
export default {

  name: 'CardComponent',
  props: {
    propertyInfo: Object
  },
  components: { ImageCustom }
}
</script>
  
<style scoped>
#card {
  border: solid 1px;
  border-radius: 3px;
  margin: 15px;
  padding: 0px;
}
.img{
  margin: 0;
  padding: 0;
}
</style>
  