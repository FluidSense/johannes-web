<template>
    <div :class="dirClass">
        <external-link v-for="(item, index) in links" :key="index" :link="item"/>
    </div>
</template>

<script>
import ExternalLink from './ExternalLink.vue';
export default {
    props: {
        direction: {
            type: String,
            required: false,
        },
        links: {
            type: Array,
            required: true,
        }
    },
    computed: {
        dirClass () {
            return this.direction === "left" ? "links-left" : "links-right";
        }
    },
    components: {
        ExternalLink,
    }
}
</script>


<style scoped>
div {
    width: 45vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.links-left {
    align-items: flex-end;
}

.links-right {
    align-items: flex-start;
}
</style>
