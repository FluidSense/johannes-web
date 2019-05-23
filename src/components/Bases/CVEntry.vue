<template>
    <div>
        <h3>{{ title }}</h3>
        <p><span style="font-weight:bold">Period:</span>{{ period }}</p>
        <p>{{ details }}</p>
    <div>
</template>

<script>
export default {
    props: {
        entry: {
            title: {
                type: String,
                required: true
            },
            period: {
                type: String,
                required: true
            },
            details: {
                type: String,
                required: false
            }
        }
    }
}
</script>

