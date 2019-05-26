<template>
    <div class="cv-entry">
        <div class="cv-title">
        <h3>{{ item.organisation }}, {{ item.section}}</h3>
        <p style="margin: 0 0.5em 0 0.5em;"> - </p>
        <p>{{ item.position }}</p>
        </div>
        <p><span style="font-weight:bold">Periode: </span>{{ item.period }}</p>
        <p class="cv-desc">{{ item.desc }}</p>
    </div>
</template>

<script>
export default {
    props: {
        item: {
            organisation: {
                type: String,
                required: true
            },
            location: {
                type: String,
                required: false
            },
            section: {
                type: String,
                required: false
            },
            position: {
                type: String,
                required: true
            },
            period: {
                type: String,
                required: true
            },
            desc: {
                type: String,
                required: true
            }
        }
    }
}
</script>


<style scoped>
.cv-entry {
    min-height: 33vh;
    margin:2em 1em 0em 1em;
}
.cv-title {
    display: flex;
    width: 100vw;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

@media only screen and (max-width: 600px) {
    
}
</style>
