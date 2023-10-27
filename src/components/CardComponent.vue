<template>
    <div id="card">
      <ImageCustom :url=propertyInfo.ThumbnailURL></ImageCustom>
      <h2>titulo: {{ propertyInfo.Title }}</h2>
      <h3>Location: {{ propertyInfo.Location }}</h3>
      <h4>description: {{ propertyInfo.Bedrooms }} | {{ propertyInfo.Bathrooms }}</h4>
      <h1>Price: {{propertyInfo.SalePrice }}</h1>
      <router-link :to="'/detail/' + propertyInfo.Id ">
      <button>View Details</button>
    </router-link>
    </div>
</template>
  
  <script>
  import ImageCustom from '../components/ImageCustomComponent.vue'
  export default {    
    
    name: 'CardComponent', 
    props: {
      propertyInfo: Object
    },
    components:{ImageCustom}
  }
  </script>
  
  <style scoped>
  #card{
    border: solid 1px;
    border-radius: 3px;
    margin: 15px;
    padding: 5px;
  }
  </style>
  