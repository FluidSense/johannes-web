<template>
    <content-frame>
        <div id="introduction">
            <overlay-text text="Mitt navn er Johannes Kvamme" />
            <fullscreen-image url="https://www.kvamme.land/Johannes/img/DSC_5310-edit2.jpg"/>
        </div>
    </content-frame>
</template>

<script>
import FullscreenImage from './Bases/FullscreenImage.vue';
import OverlayText from './Bases/OverlayText.vue';
import ContentFrame from './Bases/ContentFrame.vue';
export default {
    components: {
        FullscreenImage,
        OverlayText,
        ContentFrame
    }
}
</script>