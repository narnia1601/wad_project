<template>
    <div class="card-body">
        <h5 class="card-title">Register</h5>
        <div class="row">
            <div class="col">
                <div class="mb-3">
                <label for="firstName" class="form-label">First Name</label>
                <input type="text" v-model="firstName" id="firstName" class="form-control">
            </div>
            </div>
            <div class="col">
                <div class="mb-3">
                    <label for="lastName" class="form-label">Last Name</label>
                    <input type="text" v-model="lastName" id="lastName" class="form-control">
                </div>
            </div>
        </div>
        <div class="mb-3">
            <label for="email" class="form-label">Email address</label>
            <input type="email" v-model="email" id="email" class="form-control">
        </div>
        <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input type="password" v-model="password" id="password" class="form-control">
            <div class="form-text text-end">
            <a href="#" class="text-secondary" @click="toggleForgetPassword">Forgot password?</a>
            </div>
        </div>
        <div class="mb-3" v-if="error.length > 0" style="color: red;">{{ error }}</div>
        <div class="mb-3">
            <button class="btn btn-primary" id="login" @click="register">Register</button>
        </div>
        <div class="form-text text-center">
            <p>Have an account? <a href="#" class="text-primary" @click="toggleLoginOrRegister">Login</a></p>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    import VueCookies from 'vue-cookies'
    export default {
        props: ['toggleLoginOrRegister', 'toggleForgetPassword', 'registerOrLogin'],
        data() {
            return {
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                error: ''                
            }
        },
        methods: {
            register(){
                var url = this.$link + '/register'
                if(this.firstName.length == 0 || this.lastName.length == 0 || this.email.length == 0 || this.password.length == 0){
                    this.error = 'Please fill up all information'
                }else{
                    axios.post(url, {
                    firstName: this.firstName,
                    lastName: this.lastName,
                    email: this.email,
                    password: this.password
                    })
                    .then(res => {
                        if(res.data != "It's working"){
                            this.error = res.data
                        }else{
                            VueCookies.set('id', res.data)
                            this.$router.push('/home')
                        }
                    })
                }
            }
        },
    }
</script>

<style scoped>
    #login{
      width: 100%
    }
</style>
