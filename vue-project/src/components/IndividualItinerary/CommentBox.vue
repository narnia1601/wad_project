<template>

<div class="container mt-5">

    <!-- Own Comment -->
    <div class="row">

        <div class="col-1">
            <!-- Profile icon -->
            <svg xmlns="http://www.w3.org/2000/svg" width="40px" height="50px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 48 48"><g fill="#adb5bd"><path fill-rule="evenodd" d="M24 42c9.941 0 18-8.059 18-18S33.941 6 24 6S6 14.059 6 24s8.059 18 18 18Zm0 2c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z" clip-rule="evenodd"/><path d="M12 35.63c0-1.033.772-1.906 1.8-2.02c7.715-.854 12.72-.777 20.418.019a1.99 1.99 0 0 1 1.108 3.472c-9.085 7.919-14.277 7.81-22.686.008c-.41-.38-.64-.92-.64-1.478Z"/><path fill-rule="evenodd" d="M34.115 34.623c-7.637-.79-12.57-.864-20.206-.019A1.028 1.028 0 0 0 13 35.631c0 .286.119.557.32.745c4.168 3.866 7.326 5.613 10.413 5.624c3.098.011 6.426-1.722 10.936-5.652a.99.99 0 0 0-.554-1.724ZM13.69 32.616c7.796-.863 12.874-.785 20.632.018a2.99 2.99 0 0 1 1.662 5.221c-4.575 3.988-8.385 6.16-12.257 6.145c-3.883-.014-7.525-2.223-11.766-6.158A3.018 3.018 0 0 1 11 35.63a3.028 3.028 0 0 1 2.69-3.015Z" clip-rule="evenodd"/><path d="M32 20a8 8 0 1 1-16 0a8 8 0 0 1 16 0Z"/><path fill-rule="evenodd" d="M24 26a6 6 0 1 0 0-12a6 6 0 0 0 0 12Zm0 2a8 8 0 1 0 0-16a8 8 0 0 0 0 16Z" clip-rule="evenodd"/></g></svg>
        </div>

        <!-- Comment input text box -->
        <div class="col-11">
            <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Ask a question or share your thoughts!" aria-label="Ask a question or share your thoughts!" aria-describedby="basic-addon2">
                <span class="input-group-text bg-yellow ps-2 pe-2" id="basic-addon2">
                    <button class="btn btn-yellow border border-0">Post</button>
                </span>
            </div>
        </div>
    </div>

    <!-- Other people's comments -->
    <div class="row border rounded pt-2 pb-2">

        <div class="col-1">
            <!-- Profile icon -->
            <svg xmlns="http://www.w3.org/2000/svg" width="40px" height="50px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 48 48"><g fill="#adb5bd"><path fill-rule="evenodd" d="M24 42c9.941 0 18-8.059 18-18S33.941 6 24 6S6 14.059 6 24s8.059 18 18 18Zm0 2c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z" clip-rule="evenodd"/><path d="M12 35.63c0-1.033.772-1.906 1.8-2.02c7.715-.854 12.72-.777 20.418.019a1.99 1.99 0 0 1 1.108 3.472c-9.085 7.919-14.277 7.81-22.686.008c-.41-.38-.64-.92-.64-1.478Z"/><path fill-rule="evenodd" d="M34.115 34.623c-7.637-.79-12.57-.864-20.206-.019A1.028 1.028 0 0 0 13 35.631c0 .286.119.557.32.745c4.168 3.866 7.326 5.613 10.413 5.624c3.098.011 6.426-1.722 10.936-5.652a.99.99 0 0 0-.554-1.724ZM13.69 32.616c7.796-.863 12.874-.785 20.632.018a2.99 2.99 0 0 1 1.662 5.221c-4.575 3.988-8.385 6.16-12.257 6.145c-3.883-.014-7.525-2.223-11.766-6.158A3.018 3.018 0 0 1 11 35.63a3.028 3.028 0 0 1 2.69-3.015Z" clip-rule="evenodd"/><path d="M32 20a8 8 0 1 1-16 0a8 8 0 0 1 16 0Z"/><path fill-rule="evenodd" d="M24 26a6 6 0 1 0 0-12a6 6 0 0 0 0 12Zm0 2a8 8 0 1 0 0-16a8 8 0 0 0 0 16Z" clip-rule="evenodd"/></g></svg>
        </div>
        <div class="col-11">

            <div>
                <span>
                    <b>Clovis</b>
                </span>
                <span class="ms-2 text-muted">
                    1 day ago
                </span>

                <!-- Upvote icon -->
                <span class="float-end">
                    <button class="border-0 bg-white p-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="#adb5bd" d="M12.781 2.375c-.381-.475-1.181-.475-1.562 0l-8 10A1.001 1.001 0 0 0 4 14h4v7a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-7h4a1.001 1.001 0 0 0 .781-1.625l-8-10zM15 12h-1v8h-4v-8H6.081L12 4.601L17.919 12H15z"/></svg>
                    </button>
                    <span>25</span>
                </span>
            </div>

            <div class="row mb-0">
                <p class="mb-1 ps-0">Amazing itinerary! I love the places you visited :)</p>
            </div>

        </div>
    </div>
</div>

</template>

<script>

export default {
    name: 'CommentBox'
}

</script>

<style scoped>

.bg-yellow {
    background-color: #FCE499;
}


</style>