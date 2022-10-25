<template>
    <div class="input-text text-center justify-content-center mt-2">
        <input id="name" class="input-text1 js-input" type="name" placeholder="Name" required><br><br>
    </div>
</template>
    
    <script>
        export default {
            name:'nametemplate',
            
        } 
    </script>

    <style scoped>
    .input-text1 {
        /* display: block; */
        width: 22%;
        height: 36px;
        border-width: 0 0 2px 0;
        border-color: #000;
        /* font-family: Lusitana, serif; */
        font-family: 'helvetica neue';
        font-size: 18px;
        line-height: 26px;
        font-weight: 400;
        background-color: rgb(248, 229, 162);
}
    </style>