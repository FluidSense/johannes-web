<template>
    <div>
        <a :href="link.url">
            <p>{{ link.title }}</p>
        </a>
    </div>
</template>

<script>
export default {
    props: {
        link: {
            title: String,
            linkObject: {
                title: {
                    type: String,
                    required: true,
                },
                url: {
                    type: String,
                    required: true,
                },
                icon: {
                    type: String,
                    required: false,
                }
            }
        }
    }
}
</script>


<style scoped>
div {
    border: 1em black;
}
a {
    display: flex;
    flex-direction: row;
}
</style>
