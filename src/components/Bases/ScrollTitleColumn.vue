<template>
    <div>
        <h1 v-for="title in titles" :key="title" v-scroll-to="{el: `#${title}`, container: '#cv-scroll-column'}">{{ norwegianTitle(title) }}</h1>
    </div>
</template>

<script>
export default {
    data () {
        return {
            titleTranslation: {
                'work': 'Erfaring',
                'study': 'Utdanning',
                'appointments': 'Verv',
                'skills': 'Ferdigheter'
            }
        }
    },
    methods: {
        norwegianTitle(title) {
            return this.titleTranslation[title];
        }
    },
    props: {
        titles: {
            type: Array,
            required: true
        }
    }
}
</script>

<style scoped>
div {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    border-right:0.1vw solid black;
    position: static;
}

@media only screen and (max-width: 600px) {
    div {
        flex-direction: row;
        border: 0;
        width: 100vw;
        justify-content: space-evenly;
    }
    h1 {
        font-size: 100%;
    }
}
</style>
