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
  border: solid 3px;
  border-radius: 6px;
}
</style>