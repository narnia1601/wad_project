<template>
  <div id="background">
    <div class="container px-4">
      <div class="row">
        <div class="col">
          <span class="typed-text">{{ typeValue }}</span>
          <span class="cursor" :class="{'typing': typeStatus}">&nbsp;</span>
        </div>
        <div class="col px-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Login</h5>
              <div class="mb-3">
                <label for="email" class="form-label">Email address</label>
                <input type="email" id="email" class="form-control">
              </div>
              <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input type="password" id="password" class="form-control">
                <div class="form-text text-end">
                  <a href="#" class="text-secondary">Forgot password?</a>
                </div>
              </div>
              <div class="mb-3">
                <button class="btn btn-primary" id="login">Login</button>
              </div>
              <div class="form-text text-center">
                  <p>Don't have an account? <a href="">Sign Up</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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
        charIndex: 0
      }
    },
    created(){
      setTimeout(this.typeText, this.newTextDelay + 200)
    },
    methods: {
      typeText(){
        if(this.charIndex < this.typeArray[this.typeArrayIndex].length){
          if(!this.typeStatus){
            this.typeStatus = true;
          }
          this.typeValue += this.typeArray[this.typeArrayIndex].charAt(this.charIndex)
          this.charIndex += 1
          setTimeout(this.typeText, this.typingSpeed)
        }else{
          this.typeStatus = false;
          setTimeout(this.eraseText, this.newTextDelay)
        }
      },
      eraseText(){
        if(this.charIndex > 0){
          if(!this.typeStatus){
            this.typeStatus = true;
          }
          this.typeValue = this.typeArray[this.typeArrayIndex].substring(0, this.charIndex - 1)
          this.charIndex -= 1
          setTimeout(this.eraseText, this.erasingSpeed)
        }else{
          this.typeStatus = false;
          this.typeArrayIndex += 1
          if(this.typeArrayIndex > this.typeArray.length){
            this.typeArrayIndex = 0
          }
          setTimeout(this.typeText, this.typingSpeed + 1000)
        }
        if(this.typeArrayIndex == this.typeArray.length){
          this.typeArrayIndex = 0
        }
      },
    }
  }
</script>

<style scoped>
    #background{
        background: url('../assets/background.gif'); 
        background-size: cover;
        height: 100vh;
        padding-top: 100px;
    }
    a{
      text-decoration: none;
    }
    #login{
      width: 100%
    }
    .typed-text{
      color: white;
      font-size: 70px;
    }
    .cursor{
      display: inline-block;
      margin-left: 3px;
      font-size: 70px;
      width: 4px;
      background-color: #fff;
      animation: cursorBlink 1s infinite;
    }
    .typing{
      animation: none;
    }
    @keyframes cursorBlink{
      49% { background-color: #fff; }
      50% { background-color: transparent; }
      99% { background-color: transparent; }
    }
</style>
