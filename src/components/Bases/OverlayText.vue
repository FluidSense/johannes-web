<template>
    <div>
        <h1 :style="styleProp">{{ text }}</h1>
    </div>
</template>

<script>
export default {
    props: {
        text: {
            type: String,
            required: true
        },
        styleProp: {
            type: String,
            required: false
        }
    },
}
</script>

<style scoped>
div {
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    width:100%;
    height:100%;
}

h1 {
    color:azure;
    font-family: Arial, Helvetica, sans-serif;
    font-size:10vw;
}

</style>


