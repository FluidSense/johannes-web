<template>
    <img :src="url" />
</template>

<script>
export default {
    props: {
        url: String,
    }
}
</script>


<style scoped>
img {
    width: 100%;
}
</style>

