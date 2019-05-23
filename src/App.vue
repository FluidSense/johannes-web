<template>
  <div id="app">
    <frame-manager/>
  </div>
</template>

<script>
import FrameManager from './components/FrameManager.vue';
export default {
  name: 'app',
  components: {
    FrameManager
  }
}
</script>

<style src='material-icons/iconfont/material-icons.css' />
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: relative;
}
body, html {
    width: 100%;
    height: 100%;
    margin:0;
}

@keyframes fadeIn {
    from {opacity: 0;}
    to {opacity: 1;}
}
</style>
