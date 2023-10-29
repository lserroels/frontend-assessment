<template>
  <div id="imageComponent">
    <img :src="url" alt="Image">
  </div>
</template>
  
<script>

export default {
  name: 'ImageCustomComponent',
  props: {
    url: String
  }
}
</script>
  
<style scoped>
#imageComponent {
  border-radius: 6px;
  justify-content: center;
  display: flex;
  align-items: center; /* Centra verticalmente */
  background-color:gainsboro

}
img{
  border-radius: 5px;

}
</style>