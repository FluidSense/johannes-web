<template>
    <content-frame>
        <div class="top-bar">
            <h3>Her finner du noen av mine utvalgte prosjekter</h3>
            <button><span class="material-icons">help_outline</span></button>
        </div>
        <div id="project-frame">
            <activity-panel v-for="project in projects" :key="project.key" :project="project"/>
        </div>
    </content-frame>
</template>

<script>
import ContentFrame from './Bases/ContentFrame.vue';
import ActivityPanel from './Bases/ActivityPanel.vue';
import projects from '../assets/projects.json';
export default {
    data () {
        return {
            projects
        }
    },
    components: {
        ContentFrame,
        ActivityPanel
    }
}
</script>

<style scoped>
.top-bar {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    margin: 10vh 0 10vh 0;
}

.top-bar > h3 {
    grid-column-start: 2;
}
.top-bar > button {
    grid-column-start: 3;
    width: max-content;
    height: max-content;
    border: 0;
    background-color: transparent;
    margin: auto;
    color: gray;
    text-shadow: 0 0 0.1em black;
}
#project-frame {
    display: grid;
    grid-template-columns: 1fr 1fr;
}
</style>

