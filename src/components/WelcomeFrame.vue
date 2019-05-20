<template>
<div>
    <frame>
        <single-text></single-text>
    </frame>
</div>
</template>

<script>
import SingleText from './Bases/SingleText.vue';
import Frame from './Bases/Frame.vue';
export default {
    components: {
        Frame,
        SingleText,
    }
}
</script>
