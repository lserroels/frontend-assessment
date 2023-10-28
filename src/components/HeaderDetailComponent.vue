<template>
    <div id="HeaderDetailComponent">

        <div class="row">
            <div class="col-md-4">
                <h1>{{title}}</h1>
                <h2>{{location}}</h2>
            </div>
            <div class="col-md-4">
                <h1>{{price}}</h1>
                <h2>{{dateListed}}</h2>
            </div>
            <div class="col-md-4">
                <button>Save Property</button>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'HeaderDetailComponent',
    props: {
        title: String,
        location: String,
        price: Number,
        dateListed: Date
    },
   
}
</script>
  
<style scoped></style>