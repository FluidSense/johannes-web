<template>
    <div class="menu" :class="menuDisplay">
        <button @click="toggleMenu"><span class="material-icons" id="burger-button">menu</span></button>
        <div :class="menuList">
            <button v-for="(frame, index) in frames" :key="frame+index" v-scroll-to="frame">{{ frame }}</button>
            <button v-scroll-to="'#Start'">Start</button>
            <button v-scroll-to="'#CV'">CV</button>
            <button v-scroll-to="'#Links'">Links</button>
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
        }

    },
    methods: {
        toggleMenu() {
            this.menuHidden = !this.menuHidden;
        }
    },
    props: {
        active: {
            type: String,
            required: true,
        }
    }
}
</script>

<style scoped>
.menu {
    position: fixed;
    z-index: 1;
    padding: 1em 1em 2em 1em;
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
