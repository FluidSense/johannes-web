<template>
<div id="Start">
   <simple-slot-test>
       <single-text/>
   </simple-slot-test>
</div>
</template>

<script>
import SingleText from './Bases/SingleText.vue';
import SimpleSlotTest from './Bases/ContentFrame.vue';
export default {
    components: {
        SimpleSlotTest,
        SingleText,
    },
}
</script>
