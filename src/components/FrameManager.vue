<template>
    <div>
        <component @inactive-change="inactive = true" :is="currFrame" />
        <chevron-down v-if="inactive"/>
        <p>{{ currFrame }}</p>
    </div>
</template>

<script>
import ChevronDown from './Bases/ChevronDown.vue';
import WelcomeFrame from './WelcomeFrame.vue';
import IntroductionFrame from './IntroductionFrame.vue';
import GuidanceFrame from './GuidanceFrame.vue';
import { setTimeout } from 'timers';

const frames = [
    'welcome-frame',
    'introduction-frame',
    'guidance-frame',
];

export default {
    data () {
        return {
            frameIndex: 0,
            inactive: false,
            waitForScroll: false,
            prevTop: 0,
        }
    },
    computed: {
        currFrame: function () {
            return frames[this.frameIndex];
        },
    },
    components: {
        ChevronDown,
        WelcomeFrame,
        IntroductionFrame,
        GuidanceFrame
    },
    methods: {
        handleScroll (event) {
            if (!this.waitForScroll) {
                this.waitForScroll = true;
                if (window.scrollY > this.prevTop) this.frameIndex >= 0  && this.frameIndex < frames.length -1 ? this.frameIndex += 1 : null;
                else if (window.scrollY < this.prevTop) this.frameIndex <= 1 ? this.frameIndex -= 1: null;
                this.prevTop = window.scrollY;
                setTimeout(() => {this.waitForScroll = false}, 10000);
            }
        },
    },
    created () {
        window.addEventListener('scroll', this.handleScroll);
        setTimeout(() => {this.inactive = true}, 5000);
    },
}
</script>

