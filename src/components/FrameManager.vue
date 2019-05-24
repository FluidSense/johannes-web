<template>
    <div>
        <burger-menu :active="currFrame"/>
        <template v-for="(item, index) in frames" style="height:100vh;">
            <component :is="item" :key="item"/>
            <p :key="item+index">{{ item }}</p>
        </template>
        <!-- How to show 1 responsively
        <component @inactive-change="inactive = true" :is="currFrame" />
        -->
        <chevron-down v-if="inactive"/>
    </div>
</template>

<script>
import ChevronDown from './Bases/ChevronDown.vue';
import WelcomeFrame from './WelcomeFrame.vue';
import IntroductionFrame from './IntroductionFrame.vue';
import GuidanceFrame from './GuidanceFrame.vue';
import CVFrame from './CVFrame.vue';
import BurgerMenu from './BurgerMenu.vue';
import { setTimeout } from 'timers';

// TODO: Add frames: links, CV

export default {
    data () {
        return {
            frameIndex: 0,
            inactive: false,
            waitForScroll: false,
            prevTop: 0,
            frames: [
                'welcome-frame',
                'introduction-frame',
                'guidance-frame',
                'cv-frame',
                ],
        }
    },
    computed: {
        currFrame: function () {
            return this.frames[this.frameIndex];
        },
    },
    components: {
        ChevronDown,
        WelcomeFrame,
        IntroductionFrame,
        GuidanceFrame,
        BurgerMenu,
        'cv-frame': CVFrame,
    },
    created () {
        //window.addEventListener('scroll', this.handleScroll);
        setTimeout(() => {this.inactive = true}, 5000);
    },
}
</script>

