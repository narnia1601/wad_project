<template>

    <div v-if="counter == 0">
        <div class="justify-content-center text-center">
            <button class="btn btn-outline-dark" @click="addItem">New Item</button>
        </div>
    </div>

    <div v-else>
        <div v-for="(num,idx) of templatelist" class="text-center">
            <div class="text-center mt-2 fs-4">
                Item {{num+1}}
            </div>
            <individualtemplate></individualtemplate>
            <button class="btn btn-outline-danger" @click="deleteItem(idx)">Delete Item {{num+1}}</button><br><br>
        </div>
        <div class="justify-content-center text-center">
                <button class="btn btn-outline-dark" @click="addItem">Add Item</button>
                
        </div>
        <div class="text-center m-4">
                <button class="btn btn-primary text-light">Save</button>
        </div>
    </div>

</template>

<script>

import imageupload from './imageupload.vue'
import individualtemplate from './individualtemplate.vue'

export default {
    name: "nametemplate",
    data() {
        return {
            counter: 0,
            templatelist: [],
            templatecount: 0
        };
    },
    components: { 
        imageupload,
        individualtemplate
    },
    methods: {
        addItem() {
            this.templatelist.push(this.counter)
            this.counter++
            console.log(this.templatelist)
        },
        deleteItem(element) {
            console.log(element)
            this.templatelist.splice(element, 1)
        }
    }
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