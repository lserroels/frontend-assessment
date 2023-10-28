<template>
    <div id="filterConteinerComponent">
        <FilterByBedrooms :bedsOptions=options @bedrooms-filter-event="FilterByBedrooms"></FilterByBedrooms>
        <FilterByBathrooms :bathsOptions=options @bathrooms-filter-event="FilterByBathrooms"></FilterByBathrooms>
        <FilterByParking :parkingOptions=options @parking-filter-event="FilterByParking"></FilterByParking>
    </div>
</template>
    
<script>

import FilterByBedrooms from './FilterByBedrooms.vue';
import FilterByBathrooms from './FilterByBathrooms.vue';
import FilterByParking from './FilterByParking.vue';
export default {
    name: 'FilterConteinerComponent',
    props: {
        propertiesList: []
    },
    data() {
        return {
            options: ['1', '2', '3', '4', '5', '6'],
            selectedBedrooms: '',
            selectedBathrooms: '',
            selectedParking: '',
        }
    },
    components: {
        FilterByBedrooms,
        FilterByBathrooms,
        FilterByParking
    },
    computed: {
        filteredList() {
            return this.propertiesList.filter(prop => (this.selectedBedrooms == '' || prop.Bedrooms == this.selectedBedrooms) 
                                                    &&(this.selectedBathrooms == '' || prop.Bathrooms == this.selectedBathrooms)
                                                    &&(this.selectedParking == '' || prop.Parking == this.selectedParking))
        }
    },
    watch: {
        filteredList: {
            handler(newFilteredList) {
                return this.$emit('filter', newFilteredList)
            }
        }
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
        }
    },
}
</script>
    
<style scoped></style>