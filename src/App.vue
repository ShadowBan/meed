<template>
  <div id="app">
    <ShareButton></ShareButton>
  </div>
</template>

<script>

import ShareButton from "./components/ShareButton.vue"

export default {
  name: "app",
  components: {
    ShareButton
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
