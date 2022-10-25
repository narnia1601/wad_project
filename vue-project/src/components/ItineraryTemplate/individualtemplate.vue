<template>
    <!-- Content Box -->
    <div class="container mb-3">
            <div class="col-1"></div>

            <div class="col-9 createtemplate container mt-3 border border-warning rounded-4">

                    <!-- header -->
                    <div class="row justify-content-center mt-2 p-3" style="font-weight: bold">
                        <!-- Item {{counter}} -->
                    </div>

                    <!-- body -->
                    <div class="row p-2 contact-form">
                        <!-- particulars -->
                        <div class="col-8 m-1">
                            <div class="form-field ">
                                <input id="name" class="input-text js-input" type="name" placeholder="Name" required>
                            </div>
                            <div class="form-field ">
                                <input id="description" class="input-text js-input" type="description" placeholder="Description">
                            </div>
                        </div>
                        <!-- picture -->
                        <div class="col-3 p-3">
                            <imageupload></imageupload>
                        </div>
                    </div>

            </div>

            <div class="col-1"></div>
    </div>
    
</template>

<script>

import imageupload from './imageupload.vue'

export default {
    name: "individualtemplate",
    data() {
        return {
            counter: 1,
            templatelist: [],
            templatecount: 0
        };
    },
    components: { 
        imageupload }
}
</script>

<style scoped>
hr {
    color: #6c757d;
}

.createtemplate {
    box-shadow: 2px 2px grey;
}

.align-center {
    text-align: center;
}

html {
    height: 100%;
}

body {
    height: 100%;
    position: relative;
    background-color: #f2eee3;
}

#display-image{
    width: 200px;
    height: 180px;
    border: 1px solid black;
    background-position: center;
    background-size: cover;
}

.contact-form .form-field {
    /* position: relative; */
    margin: 32px;
}
.contact-form .input-text {
    display: block;
    width: 50%;
    height: 36px;
    border-width: 0 0 2px 0;
    border-color: #000;
    font-family: Lusitana, serif;
    font-size: 18px;
    line-height: 26px;
    font-weight: 400;
    /* background-color: #f2eee3; */
}
.contact-form .input-text:focus {
    outline: none;
    position: static;
}
.contact-form .input-text:focus + .label {
    transform: translateY(-24px);
}

.contact-form .input-text.not-empty .label {
    margin-bottom: 100px;
    position: sticky;
    transform: translateY(-24px);

}

.contact-form .label {
    position: absolute;
    left: 20px;
    bottom: 11px;
    font-family: Lusitana, serif;
    font-size: 18px;
    line-height: 26px;
    font-weight: 400;
    color: #888;
    cursor: text;
    /* transition: transform 0.2s ease-in-out; */
    transition: transform 0.2s ease, padding 0.8s linear;

}
.contact-form .submit-btn {
    display: inline-block;
    background-color: #000;
    color: #fff;
    font-family: Raleway, sans-serif;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 16px;
    line-height: 24px;
    padding: 8px 16px;
    border: none;
    cursor: pointer;
}

</style>