<template>
    <div>
        <h3 v-for="title in titles" :key="title">{{ title }}</h3>
    </div>
</template>

<script>
export default {
    props: {
        titles: {
            type: Array,
            required: true
        }
    }
}
</script>
