<template>
    <div :id="framename" v-waypoint="{ active: true, callback: onWaypoint }" />
</template>

<script>
export default {
    methods: {
        onWaypoint ({going, direction}) {
            if (going === this.$waypointMap.GOING_IN) {
                this.$emit('entered-frame', this.frameindex);
                console.log(`${this.frameindex} triggered waypoint`)
            }
            if (going === this.$waypointMap.GOING_OUT && direction !== undefined) {
                this.$emit('initiate-fade');
                console.log(`${this.frameindex} triggered fadeout`)
            }
        }
    },
    props: {
        frameindex: {
            type: Number,
            required: true,
        },
        framename: {
            type: String,
            required: false,
        }
    }
}
</script>


<style scoped>
div {
    height: 100vh;
    width: 100vw;
    /* 
    To allow fadeout before loading of next component, a margin of a component & half is added 
    Thus, a frame is shown for a scroll of 1 viewheight, blank is shown for 0.5 viewheight.
    */
    margin-bottom: 150vh;
}
</style>
