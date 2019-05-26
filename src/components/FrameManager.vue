<template>
    <div>
        <burger-menu :active="currFrame" :frames="frames"/>
        <template v-for="(item, index) in frames" style="height:100vh;">
            <waypoint-frame
                @entered-frame="enterFrame" 
                @initiate-fade="initiateFade = true"
                :framename="item"
                :frameindex="index"
                :key="item+index" 
            />
        </template>
        <component :is="currFrame" class="fadeable" :class="conditionalFade"/>
        <chevron-down v-if="inactive"/>
    </div>
</template>

<script>
import ChevronDown from './Bases/ChevronDown.vue';
import WelcomeFrame from './WelcomeFrame.vue';
import IntroductionFrame from './IntroductionFrame.vue';
import GuidanceFrame from './GuidanceFrame.vue';
import CVFrame from './CVFrame.vue';
import LinksFrame from './LinksFrame';
import BurgerMenu from './BurgerMenu.vue';
import WaypointFrame from './Bases/WaypointFrame.vue';
import { setTimeout } from 'timers';

/* 

Ok, nyeste idé: Hva om et div er et waypoint, like stort som skjermen.
Div-en har en waypoint-callback som sier ifra hvilken frame som skal vises.
Frame Manager får da beskjed av Waypoint av hva CurrFrame skal være.
Med en margin-bottom på en del, så vil man kunne trigge GOING_OUT for å starte fade-out animation også.
CurrFrame vil alltid være fixed position.

*/


export default {
    data () {
        return {
            frameIndex: 0,
            inactive: false,
            waitForScroll: false,
            prevTop: 0,
            initiateFade: false,
            frames: [
                'welcome-frame',
                'introduction-frame',
                'guidance-frame',
                'cv-frame',
                'links-frame',
                ],
        }
    },
    computed: {
        currFrame: function () {
            return this.frames[this.frameIndex];
        },
        conditionalFade () {
            return this.initiateFade ? 'fade-out' : 'fade-in';
        }
    },
    components: {
        ChevronDown,
        WelcomeFrame,
        IntroductionFrame,
        GuidanceFrame,
        BurgerMenu,
        'cv-frame': CVFrame,
        LinksFrame,
        WaypointFrame,
    },
    methods: {
        enterFrame (frameindex) {
            this.initiateFade = false;
            this.frameIndex = frameindex;
        }
    },
    created () {
        //window.addEventListener('scroll', this.handleScroll);
        setTimeout(() => {this.inactive = true}, 5000);
    },
}
</script>

