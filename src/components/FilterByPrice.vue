<template>
    <div id="filterByPriceComponent">
        <h4>Price range:</h4>
        <div>
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
  
<style scoped></style>