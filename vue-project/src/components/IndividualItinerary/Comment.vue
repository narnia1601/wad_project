<template>
    <div class="card">
        <div class="card-body">
            <div class="row">
                <div class="col text-start">
                    <div class="card-title">
                        {{ firstName }}
                    </div>
                </div>
                <div class="col text-end">
                    <div class="card-title">
                        {{ comment }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        props: ['firstName','comment']
    }
</script>

<style scoped>

</style>
