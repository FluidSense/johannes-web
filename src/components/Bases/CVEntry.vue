<template>
    <div>
        <h3>{{ item.title }}</h3>
        <p><span style="font-weight:bold">Period: </span>{{ item.period }}</p>
        <p>{{ item.desc }}</p>
    </div>
</template>

<script>
export default {
    props: {
        item: {
            title: {
                type: String,
                required: true
            },
            position: {
                type: String,
                required: false,
            },
            period: {
                type: String,
                required: true
            },
            desc: {
                type: String,
                required: false
            }
        }
    }
}
</script>

