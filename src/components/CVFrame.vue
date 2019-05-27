<template>
<content-frame>
    <div id="cv-container">
        <scroll-title-column :titles="titles"/>
        <scroll-column id="cv-scroll-column">
            <template v-for="(catobject, category) in cv">
                <div :id="category" :key="category"/>
                <cv-entry v-for="(entry, name, index) in catobject" :key="entry.position+index" :item="entry" />
            </template>
        </scroll-column>
    </div>
</content-frame>
</template>

<script>
import CVEntry from './Bases/CVEntry.vue';
import ScrollTitleColumn from './Bases/ScrollTitleColumn.vue';
import scrollColumn from './Bases/ScrollColumn.vue';
import JohsCV from '../assets/cv.json';
import ContentFrame from './Bases/ContentFrame.vue'
export default {
    data () {
        return {
            /*titles: [
                'Utdanning',
                'Erfaring',
                'Verv',
                'Ferdigheter',
            ],*/
        }
    },
    computed: {
        cv () {
            return JohsCV;
        },
        titles () {
            return Object.keys(JohsCV);
        }
    },
    components: {
        "cv-entry": CVEntry,
        ScrollTitleColumn,
        scrollColumn,
        ContentFrame,
        }
}
</script>

<style scoped>
#cv-container {
    display: grid;
    grid-template-columns: 50% 50%;
    height: 100vh;
}

@media only screen and (max-width: 600px) {
    #cv-container {
        display: grid;
        grid-template-rows: 13% 87%;
        grid-template-columns: 100%;
        height: 85vh;
        width: 100vw;
        margin-top: 15vh;
    }
} 
</style>

