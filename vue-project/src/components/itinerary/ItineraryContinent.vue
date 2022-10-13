<script setup>
</script>

<template>
    <div class="card rounded rounded-4 shadow mx-4" id="card">
        <div class="card-body text-center">
            <img :src="printImage"/>
            <h6>{{ printContinentName }}</h6>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['img'],
        computed: {
            printImage(){
                return '/src/assets/' + this.img + '.png'
            },
            printContinentName(){
                var resultStr = ''
                var isCaps = true
                for(let i=0;i<this.img.length;i++){
                    if(typeof this.img[i] == 'string' && this.img[i].toLowerCase() !== this.img[i].toUpperCase()){
                        if(isCaps){
                            resultStr += this.img[i].toUpperCase()
                            isCaps = false
                        }else{
                            resultStr += this.img[i]
                        }
                    }else if(this.img[i] === '-'){
                        resultStr += ' '
                        isCaps = true
                    }
                }
                return resultStr.charAt(0).toUpperCase() + resultStr.slice(1)
            }
        }
    }
</script>

<style scoped>
    img{
        width: 100px;
    }
    #card{
        transition: 0.3s;
    }
    #card:hover{
        transform: translate(0, -10px);
    }
    #card:active{
        transform: translate(0,10px);
    }
</style>
