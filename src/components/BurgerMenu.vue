<template>
    <div class="menu" :class="menuDisplay">
        <button @click="toggleMenu"><span class="material-icons" id="burger-button">{{menuIcon}}</span></button>
        <div :class="menuList">
            <button v-for="(frame, index) in menuOptions" :key="frame+index" v-scroll-to="`#${frame}`">{{ menuTranslation(frame) }}</button>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            menuHidden: true,
        }
    },
    computed: {
        menuList() {
            return this.menuHidden ? "menu-list-hidden" : "menu-list-showing";
        },
        menuDisplay() {
            return this.menuHidden ? "menu-hidden" : "menu-showing";
        },
        scrollDest(string) {
            return '#'+string;
        },
        menuIcon() {
            return this.menuHidden ? "menu" : "close";
        }

    },
    methods: {
        toggleMenu() {
            this.menuHidden = !this.menuHidden;
        },
        menuTranslation(option) {
            return this.translation[option];
        }
    },
    props: {
        active: {
            type: String,
            required: true,
        },
        menuOptions: {
            type: Array,
            required: true,
        },
        translation: {
            type: Object,
            required: false,
            default: function () {
                return this.menuOptions.reduce((acc, val) => {acc[val] = val; return acc;}, {});
            }
        }
    }
}
</script>

<style scoped>
.menu {
    position: fixed;
    z-index: 1;
    padding-bottom: 10vh;
}
.menu-hidden {
    background-color: transparent;
}

.menu-showing {
    background-color: cadetblue;
}

button {
    position: relative;
    padding-left: 1em;
    margin-top:1em;
    padding-right: 1em;
    background-color: transparent;
    border: none;
    color:white;
    font-size:1.5em;
    text-shadow: 0em 0 0.05em black;
}

ul {
    display: flex;
    list-style: none;
    flex-direction: column;
    align-items: flex-start;
    padding: 2em;
}

.menu-list-hidden {
    display: none;
}

.menu-list-showing {
    display: flex;
    flex-direction: column;
}

#burger-button {
    font-size:3em;
}
</style>
