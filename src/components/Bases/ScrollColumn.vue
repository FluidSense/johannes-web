<template>
    <div class="scroll-column">
        <slot></slot>
    </div>
</template>


<style scoped>
.scroll-column {
    position: static;
    display: grid;
    grid-template-columns: 100%;
    overflow-y: auto;
    height:100vh;
}
</style>
