<template>
    <div class="indicator-frame">
        <indicator-light :lightColor="lightColor"/>
    </div>
</template>

<script>
import IndicatorLight from './IndicatorLight.vue';
export default {
    props: {
        lightColor: {
            type: String,
            required: false
        }
    },
    components: {
        IndicatorLight
    }
}
</script>

<style scoped>
.indicator-frame {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 5vmax;
    height: 5vmax;
    margin-right: 1em;
    box-shadow: 0.1em 0 0.1em gray;
    border-radius: 1em 0 0 1em;

}
</style>


