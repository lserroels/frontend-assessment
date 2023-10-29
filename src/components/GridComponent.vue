<template>
    <div id="gridComponent">
        
    <div class="row">
            <div v-for="home in list" :key="home.id" class="col-xl-3  col-lg-4 col-md-6 cardConteiner">
                <Card :propertyInfo=home></Card>
            </div>
    </div>
    </div>
</template>
  
<script>
import Card from "../components/CardComponent.vue"
export default {
    name: 'GridComponent',
    props: {
        list: [Object]
    },
    components: { Card }
}
</script>
  
<style scoped>
.cardConteiner{
    padding: 20px;
    
}
</style>