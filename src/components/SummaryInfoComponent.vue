<template>
    <div id="SummaryInfoComponent">

        <div class="row">
            <div class="col-md-2">
                <h2>{{Bedrooms}}</h2>
                <h3>BED</h3>
            </div>
            <div class="col-md-2">
                <h2>{{Bathrooms}}</h2>
                <h3>BATH</h3>
            </div>
            <div class="col-md-2">
                <h2>{{Parking}}</h2>
                <h3>PARKING</h3>
            </div>            
            <div class="col-md-3">
                <h2>{{Sqft}}</h2>
                <h3>SQFT</h3>
            </div>            
            <div class="col-md-3">
                <h2>{{YearBuilt}}</h2>
                <h3>YEAR BUILT</h3>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'SummaryInfoComponent',
    props: {
        Bedrooms: Number,
        Bathrooms: Number,
        Parking: Number,
        Sqft: Number,
        YearBuilt: Number,
    },
   
}
</script>
  
<style scoped></style>