<template>
    <div id="filterConteinerComponent">
        <FilterByBedrooms :bedsOptions=getBedsOptions @bedrooms-filter-event="FilterByBedrooms"></FilterByBedrooms>
        <FilterByBathrooms :bathsOptions=getBathOptions @bathrooms-filter-event="FilterByBathrooms"></FilterByBathrooms>
        <FilterByParking :parkingOptions=getParkingOptions @parking-filter-event="FilterByParking"></FilterByParking>
        <FilterByPrice :max=getMaxPriceRange :min=getMinPriceRange :selectedValueProp=getMaxPriceRange @price-filter-event="FilterByPrice"></FilterByPrice>
    </div>
</template>
    
<script>

import FilterByBedrooms from './FilterByBedrooms.vue'
import FilterByBathrooms from './FilterByBathrooms.vue'
import FilterByParking from './FilterByParking.vue'
import FilterByPrice from './FilterByPrice.vue'

export default {
    name: 'FilterConteinerComponent',
    props: {
        propertiesList: [],
    },
    data() {
        return {
            selectedBedrooms: '',
            selectedBathrooms: '',
            selectedParking: '',
            selectedPrice: 0
        }
    },
    components: {
        FilterByBedrooms,
        FilterByBathrooms,
        FilterByParking,
        FilterByPrice
    },
    computed: {
        filteredList() {
            return this.propertiesList.filter(prop => (this.selectedBedrooms == '' || prop.Bedrooms == this.selectedBedrooms)
                && (this.selectedBathrooms == '' || prop.Bathrooms == this.selectedBathrooms)
                && (this.selectedParking == '' || prop.Parking == this.selectedParking)
                && (this.selectedPrice == 0 || prop['Sale Price'] <= this.selectedPrice))
        },
        getBedsOptions() {
            return [...new Set(this.propertiesList.map(item => item.Bedrooms).sort())];
        },
        getBathOptions() {
            return [...new Set(this.propertiesList.map(item => item.Bathrooms).sort())];
        },
        getParkingOptions() {
            return [...new Set(this.propertiesList.map(item => item.Parking).sort())];
        },
        getMinPriceRange() {
            return this.propertiesList.reduce((min, item) => {
                if (item['Sale Price'] < min) {
                    return item['Sale Price'];
                }
                return min;
            }, Infinity);
        },
        getMaxPriceRange() {
            return  this.propertiesList.reduce((max, item) => {
                if (item['Sale Price'] > max) {
                    return item['Sale Price'];
                }
                return max;
            }, -Infinity);
        }
    },
    watch: {
        filteredList: {
            handler(newFilteredList) {
                return this.$emit('filter', newFilteredList)
            }
        },
    },
        methods: {
            FilterByBedrooms(bedrooms) {
                this.selectedBedrooms = bedrooms
            },
            FilterByBathrooms(bathrooms) {
                this.selectedBathrooms = bathrooms
            },
            FilterByParking(parking) {
                this.selectedParking = parking
            },
            FilterByPrice(price) {
                this.selectedPrice = price
            },
        },
    }
</script>
    
<style scoped></style>