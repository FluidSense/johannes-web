<template>
    <div>
        <burger-menu :active="currFrame"/>
        <!-- THE GIST OF WHAT I WANT TO DO BUT WONT WORK -->
        <template v-for="item in frames" style="height:100vh;">
            <component :is="item" :key="item"/>
            <p :key="item+index">{{ item }}</p>
        </template>
        <!-- -->
        <!-- How to show 1 responsively
        <component @inactive-change="inactive = true" :is="currFrame" />
        -->
        <chevron-down v-if="inactive"/>
        <p>{{ currFrame }}</p>
    </div>
</template>

<script>
import ChevronDown from './Bases/ChevronDown.vue';
import WelcomeFrame from './WelcomeFrame.vue';
import IntroductionFrame from './IntroductionFrame.vue';
import GuidanceFrame from './GuidanceFrame.vue';
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
                ],
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
        GuidanceFrame,
        BurgerMenu,
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
        //window.addEventListener('scroll', this.handleScroll);
        setTimeout(() => {this.inactive = true}, 5000);
    },
}
</script>

