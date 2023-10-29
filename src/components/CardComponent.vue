<template>
  <div id="card" class="card h-100">
    <ImageCustom :url=propertyInfo.ThumbnailURL class="img card-img-top"></ImageCustom>
    <div class="card-middle">
      <h2>{{ propertyInfo.Title }}</h2>
      <h4>{{ propertyInfo.Location }}</h4>
      <h5>{{ propertyInfo.Bedrooms }} beds | {{ propertyInfo.Bathrooms }} baths</h5>
    </div>
    <div class="card-body">
      <h1 class="price">{{ propertyInfo['Sale Price'] }}</h1>
    </div>

    <div class="card-footer">

      <router-link :to="'/detail/' + propertyInfo.Id">
        <button class="btn btn-primary">View Details</button>
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
  border: gainsboro solid 1px;
  border-radius: 6px;
  margin: 15px;
  padding: 0px;
}

.img {
  margin: 0;
  padding: 0;
}

h5 {
  color: gainsboro;
}

h1,
h2,
h3,
h4,
h5 {
  margin: 10px;
}

.card-footer {
  background-color: white;
  border: none;
  align-content: center;
  display: flex;
  justify-content: center;
  align-items: center;
}

.price::before {
  content: "$";
}</style>
  