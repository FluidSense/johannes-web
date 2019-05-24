<template>
    <simple-test-slot>
        <div id="Links">
            <link-column direction="right" :links="even(links)"/>
            <link-column direction="left" :links="odd(links)"/>
        </div>
    </simple-test-slot>
</template>

<script>
import Links from '../assets/links.json';
import LinkColumn from './Bases/LinkColumn.vue';
import SimpleTestSlot from './Bases/SimpleTestSlot.vue';
export default {
    data () {
        return {
            links: Links,
        }
    },
    methods: {
        even (obj) {
            return Object.entries(obj).map(arr => arr[1]).filter((item, index) => index % 2 === 0);
        },
        odd (obj) {
            return Object.entries(obj).map(arr => arr[1]).filter((item, index) => index % 2 === 1);
        }
    },
    components: {
        SimpleTestSlot,
        LinkColumn,
    }
}
</script>

<style scoped>
div {
    display: flex;
}
</style>
