<template>
    <p>{{ greeting }} World</p>
</template>

<script>
    module.exports = {
        data: () => {
            greeting: 'Hello'
        }
    };
</script>

<style>
    p{
        font-size: 50px;
        color: red;
    }
</style>