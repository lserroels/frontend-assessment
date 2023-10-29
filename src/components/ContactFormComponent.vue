<template>
    <div id="ContactFormComponent">
        <h4>Contact Agent</h4>
        <form @submit.prevent="Submit">
            <div class="form-group">
                <input type="text" id="fullName" v-model="fullName" placeholder="Full Name *">
            </div>
            <div class="form-group">
                <input type="email" id="email" v-model="email" placeholder="Email *">
            </div>
            <div class="form-group">
                <input type="text" id="phone" v-model="phone" @input="filterNumbers" placeholder="Phone Number *">
            </div>
            <div class="form-group">
                <textarea id="comments" v-model="comments" placeholder="Comments *"></textarea>
            </div>
            <div id="divbuttton" class=" form-group">
                <button type="submit" class="btn btn-primary">Contact Now</button>
            </div>
        </form>
    </div>
</template>
  
<script>

import Swal from 'sweetalert2';

export default {
    name: 'ContactFormComponent',
    data() {
        return {
            fullName: '',
            email: '',
            phone: '',
            comments: '',
        }
    },
    methods: {
        Submit() {
            if (!this.fullName || !this.email || !this.validateEmail(this.email) || !this.phone || !this.comments)
                Swal.fire('Error', 'Please fill in all fields and check formatting', 'error')
            else
                Swal.fire('Success', 'Message sent succesfully', 'success')

        },
        filterNumbers() {
            this.phone = this.phone.replace(/\D/g, "");
        },
        validateEmail() {
            const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
            return emailPattern.test(this.email);
        }
    }
}
</script>
  
<style scoped>
#ContactFormComponent {
    background-color: gainsboro;
    margin-top: 40px;
    margin-right: 30px;
    padding: 10px;
    border-radius: 6px;
    min-height: 350px;
    padding: 40px;
    text-align: center;
}

.form-group {
    display: block;
    width: 100%;
}

input,
textarea {
    width: 100%;
    margin-top: 5px;
}
#divbuttton{
    margin-top: 20px;
}


</style>