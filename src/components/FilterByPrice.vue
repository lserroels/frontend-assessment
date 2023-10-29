<template>
    <div id="filterByPriceComponent" class="row">
        <div class="col-6">
        <h5>Price range:</h5>
        </div>
        <div class="col-6">  
            <input type="range" v-model="selectedValue" :min="min" :max="max" @change="filterByPrice" />
            <span>{{ selectedValue }}</span>
        </div>
    </div>
</template>
  
<script>

export default {
    name: 'FilterByPriceComponent',
    props: {
        min: Number,
        max: Number,
    },
    data() {
        return {
            selectedValue: 0
        }
    },
    methods: {
        filterByPrice() {
            this.$emit('price-filter-event', this.selectedValue)
        }
    },
}
</script>
  
<style scoped>
h5{
    text-align: end;
}

</style>