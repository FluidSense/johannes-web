<template>
    <div v-waypoint="{ active:true, callback: OnWaypoint }" :class="conditionalClass">
        <slot></slot>
    </div>
</template>

<script>
export default {
    data () {
        return {
            showing: false,
        }
    },
    computed: {
        conditionalClass () {
            return this.showing ? "" : "hidden";
        }
    },
    methods: {
        OnWaypoint({el, going, direction}){
            if (going === this.$waypointMap.GOING_IN) {
                console.log('waypoint going in!', el)
                this.showing = true;
            }
            if (going === this.$waypointMap.GOING_OUT) {
                this.showing = false;
            }
            if (direction === this.$waypointMap.DIRECTION_TOP) {
                console.log('waypoint going top!', el)
            }
        }
    }
}
</script>


<style scoped>
div {
    width: 100vw;
    height: 100vh;
}
</style>
