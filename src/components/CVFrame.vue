<template>
    <div id="CV">
        <scroll-title-column :titles="titles"/>
        <scroll-column>
            <cv-entry v-for="entry in cv" :key="entry.title"/>
        </scroll-column>
    </div>
</template>

<script>
const titles = [
    'Study',
    'Work',
    'Skills',
];

import CVEntry from './Bases/CVEntry.vue';
import JohsCV from '../assets/cv.json';
const cv = JSON.parse(JohsCV);
export default {
    components: {
        CVEntry,
        ScrollTitleColumn,
    }
}
</script>

<style scoped>
#CV {
    display: flex;
    flex-direction: row;
}
</style>

