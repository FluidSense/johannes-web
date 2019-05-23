<template>
    <div class="menu" :class="menuDisplay">
        <button @click="toggleMenu"><span class="material-icons" id="burger-button">menu</span></button>
        <ul :class="menuList">
            <li><button>Start</button></li>
            <li><button>CV</button></li>
            <li><button>Links</button></li>
        </ul>
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
    padding: 1em 0 0 1em;
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

li {
    margin-top:2em;
}

.menu-list-hidden {
    display: none;
}

.menu-list-showing {
    display: flex;
}

#burger-button {
    font-size:3em;
}
</style>
