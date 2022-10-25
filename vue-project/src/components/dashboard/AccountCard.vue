<script>
export default {
    name: 'AccountCard'
}
</script>

<template>
    
        <div class="container mt-4 mb-4 p-3 d-flex justify-content-center">
            <div class="row card p-5">
                <div class=" image d-flex flex-column justify-content-center align-items-center">

                    <button class="btn btn-secondary">

                        <img src="https://admissions.smu.edu.sg/sites/admissions.smu.edu.sg/files/chatbot/smoo.png?20191126A" height="100" width="100" /></button> 
                        <span class="name mt-3">Smoo Bear</span> 
                        <span class="idd">@SmUBear</span>

                    <div class="d-flex flex-row justify-content-center align-items-center mt-3">
                        <span class="m-2 number">1069 <span class="stat">Followers</span></span>
                        <span class="m-2 number">69 <span class="stat">Following</span></span>
                    </div>

                    <!-- Profile buttons, need to link to edit profile -->
                    <!-- <div class=" d-flex flex-row justify-content-center align-items-center mt-3"> -->
                    <div class=" d-flex">
                        <button class=" m-2 btn1">Edit Profile</button>
                        <!-- To be able to share profile address -->
                        <button class="m-2 btn1">Share</button>
                    </div>

                    <div class=" px-2 rounded mt-4 date ">
                        <span class="join">Joined October,2022</span>
                    </div>


                    
                </div>
            </div>
        </div>
    


</template>

<style scoped>
* {
    margin: 0;
    padding: 0
}

.card {
    width: 350px;
    background-color: #efefef;
    border: none;
    cursor: pointer;
    transition: all 0.5s;
}

.image img {
    transition: all 0.5s
}

.card:hover .image img {
    transform: scale(1.5);
}

.btn {
    height: 140px;
    width: 140px;
    border-radius: 50%
}

.name {
    font-size: 22px;
    font-weight: bold
}


.number {
    font-size: 22px;
    font-weight: bold
}

.stat {
    font-size: 12px;
    font-weight: 500;
    color: #444444
}

.btn1 {
    height: 40px;
    width: 100px;
    
    border: none;
    background-color: white;
    color: black;
    font-size: 15px;
    border-radius: 2rem;
}

.btn2 {
    height: 40px;
    width: 100px;
    border: none;
    background-color: white;
    color: black;
    font-size: 15px;
    border-radius: 2rem;
}

.join {
    font-size: 14px;
    color: #a0a0a0;
    font-weight: bold
}
</style>