<template>
    <div id="ContactFormComponent">
        <h1>Contact Agent</h1>
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
            <button type="submit">Contact Now</button>
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
                Swal.fire('Error', 'Please fill all fields', 'error')
            else
                Swal.fire('Success', 'Please fill all fields', 'success')

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
  
<style scoped></style>