<template>
    <div>
        <img src="previewImage" class="uploading-image" />
        <input type="file" accept="image/jpeg, image/pdf" @change='uploadImage'>
    </div>
    </template>
    
    <script>
        export default {
            name:'imageupload',
            data(){
                return{
                    previewImage: null
                }
            },
            methods:{
                uploadImage(e){
                    const image = e.target.files[0];
                    const reader = new FileReader();
                    reader.readAsDataURL(image);
                    reader.onload = e =>{
                        this.previewImage = e.target.result;
                        console.log(this.previewImage);
                    };
                }
            }
        } 
    </script>

    <style scoped>
    .uploading-image{
        display:flex;
    }
    </style>