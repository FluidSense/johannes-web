<template>
    <div>
        <h1 v-for="title in titles" :key="title">{{ title }}</h1>
    </div>
</template>

<script>
export default {
    props: {
        titles: {
            type: Array,
            required: true
        }
    }
}
</script>

<style scoped>
div {
    display: flex;
    flex-direction: column;
    align-content: space-around;
    border-right:0.1vw solid black;
}
</style>
