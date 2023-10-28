<template>
  <div id="detail">
    <h1>Detail for ID: {{ $route.params.id }} </h1>
    <HeaderDetail :title=property.Title :location=property.Location :price="property['Sale Price']"
      :dateListed=property.DateListed></HeaderDetail>
    <div class="row">
      <div class="col-md-8">
        <ImageCustom :url=property.PictureURL></ImageCustom>
        <SummaryInfo :Bathrooms=property.Bathrooms :Bedrooms=property.Bedrooms :Parking=property.Parking :Sqft=property.Sqft :YearBuilt=property.YearBuilt></SummaryInfo>
        <Description :Description=property.Description></Description>
      </div>
      <div class="col-md-4">
        <ContactForm></ContactForm>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderDetail from "../components/HeaderDetailComponent.vue"
import IndexService from '@/services/indexService';
import ImageCustom from '../components/ImageCustomComponent.vue'
import SummaryInfo from '../components/SummaryInfoComponent.vue'
import Description from '../components/DescriptionComponent.vue'
import ContactForm from '../components/ContactFormComponent.vue'

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
    HeaderDetail,
    ImageCustom,
    SummaryInfo,
    Description,
    ContactForm
  },
  methods: {
    getProperty(id) {
      IndexService.getIndexDataByID(id)
        .then(property => {
          this.property = property
        })
        .catch(error => {
          console.error(error.message);
        });
    },
  }
};
</script>