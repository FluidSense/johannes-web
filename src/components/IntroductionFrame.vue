<template>
<div>
    <overlay-text text="Mitt navn er Johannes Kvamme" />
    <fullscreen-image url="https://www.kvamme.land/Johannes/img/DSC_5310-edit2.jpg"/>
</div>
</template>

<script>
import FullscreenImage from './Bases/FullscreenImage.vue';
import OverlayText from './Bases/OverlayText.vue';
export default {
    components: {
        FullscreenImage,
        OverlayText,
    }
}
</script>