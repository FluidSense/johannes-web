<template>
<simple-test-slot>
    <div id="CV">
        <scroll-title-column :titles="titles"/>
        <scroll-column>
            <cv-entry v-for="entry in cv" :key="entry.title" :item="entry"/>
        </scroll-column>
    </div>
</simple-test-slot>
</template>

<script>
import CVEntry from './Bases/CVEntry.vue';
import ScrollTitleColumn from './Bases/ScrollTitleColumn.vue';
import scrollColumn from './Bases/ScrollColumn.vue';
import JohsCV from '../assets/cv.json';
import SimpleTestSlot from './Bases/SimpleTestSlot.vue'
export default {
    data () {
        return {
            titles: [
                'Study',
                'Work',
                'Skills',
            ],
        }
    },
    computed: {
        cv () {
            return JohsCV;
        }
    },
    components: {
        "cv-entry": CVEntry,
        ScrollTitleColumn,
        scrollColumn,
        SimpleTestSlot,
        }
}
</script>

<style scoped>
#CV {
    display: flex;
    flex-direction: row;
}
</style>

