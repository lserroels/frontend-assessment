<template>
    <div id="HeaderDetailComponent">

        <div class="row">
            <div class="col-md-4">
                <h1>{{ title }}</h1>
                <h4>{{ location }}</h4>
            </div>
            <div class="middle col-md-4">
                <h1 class="price">{{ price }}</h1>
                <h4>{{ formatDate(dateListed) }}</h4>
            </div>
            <div class="right col-md-4">
                <button class="btn btn-primary">Save Property</button>
            </div>
        </div>
    </div>
</template>
  
<script>
import Utils from '@/Utils';

export default {
    name: 'HeaderDetailComponent',
    props: {
        title: String,
        location: String,
        price: Number,
        dateListed: Date
    },
    methods: {
        formatDate(date) {
            return Utils.formatDate(date)
        }
    }

}
</script>
  
<style scoped>
#HeaderDetailComponent{
    margin-top: 30px;
    margin-left: 30px;
    margin-right: 30px;
}
h4 {
    color: grey;
}

.middle {
    text-align: end;
    padding-right: 30px;
}
.right{
    text-align: center;
}
.price::before {
    content: "$";
}
</style>