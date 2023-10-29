<template>
    <div id="DescriptionComponent">
        <p>{{ Description }}</p>
       
    </div>
</template>
  
<script>
export default {
    name: 'DescriptionComponent',
    props: {
        Description: String,
    },
   
}
</script>
  
<style scoped>
#DescriptionComponent{
    margin-top: 20px;
}
</style>