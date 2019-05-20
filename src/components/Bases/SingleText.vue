<template>
    <div>
        <h1>{{ message }}</h1>
    </div>
</template>

<script>
export default {
    data () {
        return {
            message: 'Hei',
        }
    }
}
</script>

<style scoped>
div {
    display: flex;
    align-items: center;
    justify-content: center;
    width:100%;
    height:100%;
}

h1 {
    font-family: Arial, Helvetica, sans-serif;
    font-size:10vw;
    animation: fadeIn;
    animation-duration: 3s;
}

</style>


