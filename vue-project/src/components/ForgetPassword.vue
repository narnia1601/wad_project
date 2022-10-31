<template>
    <div class="card-body">
        <h5 class="card-title">Forget Password</h5>
        <div class="mb-3">
            <label for="email" class="form-label">Enter your email address to reset your password</label>
            <input type="email" id="email" class="form-control">
        </div>
        <div class="mb-3">
            <label for="password" class="form-label">New Password</label>
            <input type="password" id="password1" class="form-control">
        </div>
        <div class="mb-3">
            <label for="password" class="form-label">Confirm Password</label>
            <input type="password" id="password2" class="form-control">
        </div>
        <div class="mb-3">
            <button class="btn btn-primary" id="login">Reset your password</button>
        </div>
        <div class="form-text text-center">
            <p>Remember your account? <a href="#" class="text-primary" @click="toggleLoginOrRegister">Login</a></p>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['toggleLoginOrRegister'],
    }
</script>

<style scoped>
    #login{
      width: 100%
    }
</style>
