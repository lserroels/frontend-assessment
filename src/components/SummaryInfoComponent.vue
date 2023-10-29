<template>
    <div id="SummaryInfoComponent">

        <div class="row">
            <div class="col-md-2">
                <h2>{{Bedrooms}}</h2>
                <h5>BED</h5>
            </div>
            <div class="col-md-2">
                <h2>{{Bathrooms}}</h2>
                <h5>BATH</h5>
            </div>
            <div class="col-md-2">
                <h2>{{Parking}}</h2>
                <h5>PARKING</h5>
            </div>            
            <div class="col-md-3">
                <h2>{{Sqft}}</h2>
                <h5>SQFT</h5>
            </div>            
            <div class="col-md-3">
                <h2>{{YearBuilt}}</h2>
                <h5>YEAR BUILT</h5>
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
  
<style scoped>
#SummaryInfoComponent{
    margin-top: 20px;
    padding: 10px;
    border: solid 2px gainsboro;
}

div.row div{
text-align: center;
}

h5 {
    color: grey;
}
</style>