<template>
    <div class="indicator-light" :class="indicatorLightColor" />
</template>

<script>
export default {
    computed: {
        indicatorLightColor () {
            return `indicator-light-${this.lightColor}`;
        }
    },
    props: {
        lightColor: {
            type: String,
            required: false,
            default: 'red'
        }
    }
}
</script>

<style scoped>
.indicator-light {
    border-radius: 50%;
    width: 1vmax;
    height: 1vmax;
}

.indicator-light-green {
    background-color: green;
    box-shadow: 0 0 0.3em green;
}

.indicator-light-red {
    background-color: red;
    box-shadow: 0 0 0.3em red;
}

.indicator-light-yellow {
    background-color: yellow;
    box-shadow: 0 0 0.3em yellow;
}
</style>

