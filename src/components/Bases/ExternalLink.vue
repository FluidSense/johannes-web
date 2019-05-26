<template>
    <div class="external-link">
        <a :href="link.url" target="_blank">
            <img :src="link.icon"/>
        </a>
    </div>
</template>

<script>
export default {
    props: {
        link: {
            title: String,
            linkObject: {
                title: {
                    type: String,
                    required: true,
                },
                url: {
                    type: String,
                    required: true,
                },
                icon: {
                    type: String,
                    required: false,
                }
            }
        }
    }
}
</script>


<style scoped>
img {
    height: 10vmax;
    width: 10vmax;
}
.external-link {
    border: 1em black;
    display: flex;
    flex-direction: row;
    width: auto;
    height: auto;
}
.external-link-right > a {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 1em;
    padding-right: 1em;
    border-left: 1.4em solid cadetblue;
}

.external-link-right::before {
    border-bottom: 5vmax solid transparent;
    border-top: 7.2vmax solid transparent;
    border-right: 4vmax solid cadetblue;
    content: "";
    margin-left:5vmax;
}

.external-link-left > a {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 1em;
    padding-right: 1em;
    border-right: 1.4em solid cadetblue;
}

.external-link-left::after {
    border-bottom: 5vmax solid transparent;
    border-top: 7.2vmax solid transparent;
    border-left: 4vmax solid cadetblue;
    content: "";
    margin-right: 5vmax;
}
</style>
