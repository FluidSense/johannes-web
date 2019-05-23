
<template>
<frame>
    <overlay-text styleProp="font-size: 5em;" text="Du kan navigere direkte med menyen her" />
    <fullscreen-image url="https://www.kvamme.land/Johannes/img/DSC_5310-edit2.jpg"/>
</frame>
</template>

<script>
import FullscreenImage from './Bases/FullscreenImage.vue';
import OverlayText from './Bases/OverlayText.vue';
import Frame from './Bases/Frame.vue';
export default {
    components: {
        FullscreenImage,
        OverlayText,
        Frame,
    }
}
</script>