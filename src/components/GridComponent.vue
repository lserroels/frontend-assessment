<template>
    <div id="gridComponent">
        
    <div class="row">
            <div v-for="home in list" :key="home.id" class="col-md-3">
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
ul {
    list-style: none;
}
</style>