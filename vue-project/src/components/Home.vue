<script setup>
import About from './About.vue'
import Login from './Login.vue'
import Register from './Register.vue'
import ForgetPassword from './ForgetPassword.vue'
</script>

<template>
  <div>
    <div id="background">
      <div class="container px-4">
        <div class="row">
          <div class="col px-4 col-xs-12 col-lg-6 col-sm-12 order-xs-1">
            <div class="card">
              <Login v-if="isLogin && isForgetPassword == false" :toggleLoginOrRegister="toggleLoginOrRegister"
                :toggleForgetPassword="toggleForgetPassword"></Login>
              <ForgetPassword v-if="isForgetPassword == true" :toggleLoginOrRegister="toggleLoginOrRegister">
              </ForgetPassword>
              <Register v-if="isLogin == false && isForgetPassword == false"
                :toggleLoginOrRegister="toggleLoginOrRegister" :toggleForgetPassword="toggleForgetPassword"></Register>
            </div>
          </div>
          <div class="col col-xs-12 d-none d-lg-block col-lg-6 col-sm-12 order-xs-2">
            <span class="typed-text">{{ typeValue }}</span>
            <span class="cursor" :class="{ 'typing': typeStatus }">&nbsp;</span>
          </div>

        </div>
      </div>
    </div>
    
    <div>
      <About></About>
    </div>
    
  </div>
</template>

<script>
import VueCookies from 'vue-cookies'
export default {
  data: () => {
    return {
      typeValue: '',
      typeStatus: false,
      typeArray: ['Create your perfect itinerary now', 'Find the next best destination', 'Travel planning made simple'],
      typingSpeed: 100,
      erasingSpeed: 100,
      newTextDelay: 500,
      typeArrayIndex: 0,
      charIndex: 0,
      isLogin: false,
      isForgetPassword: false
    }
  },
  created() {
    const cookie = VueCookies.get('id')
    if (cookie != null) {
      this.$router.push('/home')
    }
    setTimeout(this.typeText, this.newTextDelay + 200)
  },
  methods: {
    typeText() {
      if (this.charIndex < this.typeArray[this.typeArrayIndex].length) {
        if (!this.typeStatus) {
          this.typeStatus = true;
        }
        this.typeValue += this.typeArray[this.typeArrayIndex].charAt(this.charIndex)
        this.charIndex += 1
        setTimeout(this.typeText, this.typingSpeed)
      } else {
        this.typeStatus = false;
        setTimeout(this.eraseText, this.newTextDelay)
      }
    },
    eraseText() {
      if (this.charIndex > 0) {
        if (!this.typeStatus) {
          this.typeStatus = true;
        }
        this.typeValue = this.typeArray[this.typeArrayIndex].substring(0, this.charIndex - 1)
        this.charIndex -= 1
        setTimeout(this.eraseText, this.erasingSpeed)
      } else {
        this.typeStatus = false;
        this.typeArrayIndex += 1
        if (this.typeArrayIndex > this.typeArray.length) {
          this.typeArrayIndex = 0
        }
        setTimeout(this.typeText, this.typingSpeed + 1000)
      }
      if (this.typeArrayIndex == this.typeArray.length) {
        this.typeArrayIndex = 0
      }
    },
    toggleLoginOrRegister() {
      this.isLogin = !this.isLogin
      if (this.isForgetPassword == true) {
        this.isForgetPassword = false
      }
    },
    toggleForgetPassword() {
      this.isForgetPassword = true
    }
  }
}
</script>

<style scoped>

#background {
  background: url('../assets/background.gif');
  background-size: cover;
  height: 100vh;
  padding-top: 100px;
}

a {
  text-decoration: none;
}

.typed-text {
  color: white;
  font-size: 70px;
}

.cursor {
  display: inline-block;
  margin-left: 3px;
  font-size: 70px;
  width: 4px;
  background-color: #fff;
  animation: cursorBlink 1s infinite;
}

.typing {
  animation: none;
}

@keyframes cursorBlink {
  49% {
    background-color: #fff;
  }

  50% {
    background-color: transparent;
  }

  99% {
    background-color: transparent;
  }
}
</style>
