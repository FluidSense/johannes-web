<template>
    <div class="activity-panel">
        <indicator-frame lightColor="red"/>
        <progress-bar :title="project.title" percentage="0"/>
    </div>
</template>

<script>
// TODO:    Add color to indicator based on activity.
//          Add progress to progressbar based on what?
import IndicatorFrame from './IndicatorFrame.vue';
import ProgressBar from './ProgressBar.vue';
export default {
    components: {
        IndicatorFrame,
        ProgressBar
    },
    props: {
        project: {
            title: {
                type: String,
                required: true
            },
            url: {
                type: String,
                required: false,
            }
        }
    }
}
</script>

<style scoped>
.activity-panel {
    display: flex;
    flex-direction: row;
    box-shadow: 0 0 0.1em black;
    border-radius: 1em;
    margin: 5% 10% 0 10%;
}
</style>

