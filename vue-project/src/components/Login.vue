<template>
    <div class="card-body">
        <h5 class="card-title">Login</h5>
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
            <button class="btn btn-primary" @click="login" id="login">Login</button>
        </div>
        <div class="form-text text-center">
            <p>Don't have an account? <a href="#" class="text-primary" @click="toggleLoginOrRegister">Sign Up</a></p>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    import VueCookies from 'vue-cookies'
    export default {
        props: ['toggleLoginOrRegister', 'toggleForgetPassword'],
        data(){
            return {
                email: '',
                password: '',
                error: ''
            }
        },
        methods: {
            login(){
                var url = this.$link + '/login'
                if(this.email.length == 0 || this.password.length == 0){
                    this.error = 'Please fill up all information'
                }else{
                    axios.post(url, {
                        email: this.email,
                        password: this.password
                    })
                    .then(res => {
                        if(res.data == 'Incorrect email or password'){
                            this.error = 'Incorrect email or password'
                        }else{
                            VueCookies.set('id', res.data)
                            this.$router.push('/home')
                        }
                        console.log('It works')
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
