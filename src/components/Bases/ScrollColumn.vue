<template>
    <div class="scroll-column">
        <slot></slot>
    </div>
</template>


<style scoped>
.scroll-column {
    position: static;
    display: flex;
    flex-direction: column;
    justify-content: safe space-around;
    overflow-y: auto;
    height:100vh;
}
</style>
