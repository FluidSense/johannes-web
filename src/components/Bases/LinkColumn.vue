<template>
    <div class="link-col" :class="colDirClass">
        <external-link v-for="(item, index) in links" :key="index" :link="item" :class="entryDirClass"/>
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
        colDirClass () {
            return this.direction === "left" ? "links-left" : "links-right";
        },
        entryDirClass () {
            return this.direction === "left" ? "external-link-left" : "external-link-right";
        }
    },
    components: {
        ExternalLink,
    }
}
</script>


<style scoped>
.link-col {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}

.links-left {
    align-items: flex-end;
}

.links-right {
    align-items: flex-start;
}
</style>
