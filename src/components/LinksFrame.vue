<template>
    <content-frame>
        <div id="link-frame">
            <link-column direction="right" :links="even(links)"/>
            <div id="link-description">
                <h3>
                    Du finner andre sider med informasjon om meg og mine prosjekter via disse lenkene her.
                </h3>
            </div>
            <link-column direction="left" :links="odd(links)"/>
        </div>
    </content-frame>
</template>

<script>
import Links from '../assets/links.json';
import LinkColumn from './Bases/LinkColumn.vue';
import ContentFrame from './Bases/ContentFrame.vue';
export default {
    data () {
        return {
            links: Links,
        }
    },
    methods: {
        even (obj) {
            return Object.entries(obj).map(arr => arr[1]).filter((item, index) => index % 2 === 0);
        },
        odd (obj) {
            return Object.entries(obj).map(arr => arr[1]).filter((item, index) => index % 2 === 1);
        }
    },
    components: {
        ContentFrame,
        LinkColumn,
    }
}
</script>

<style scoped>
#link-frame {
    display: grid;
    height: 100%;
    grid-template-columns: 45% 10% 45%;
}

#link-description {
    display: flex;
    justify-content: center;
    align-items: center;
}

#link-description > h3  {
    line-height: 1.6em;
}

@media only screen and (max-width: 600px) {
    #link-frame {
        grid-template-columns: 100%;
        height: 85%;
        margin-top:15vh;
    }
}
</style>
