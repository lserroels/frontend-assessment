<template>
    <div id="filterByPriceComponent">
        <h4>Price range:</h4>
        <!-- <select v-model="selectedValue" @change="filterByPrice"> -->
        <div>
            <input type="range" v-model="selectedValue" :min="min" :max="max" />
            <span>{{ selectedValue }}</span>
        </div>
    </div>
</template>
  
<script>

export default {
    name: 'FilterByPriceComponent',
    props: {
        min: Number,
        max: Number
    },
    data() {
        return {
        }
    },
    computed: {
        selectedValue: {
            get() {
                return this.max; 
            },
            set(value) {
                this.$emit('price-filter-event', value);
            },
        },
    },
    
}
</script>
  
<style scoped></style>