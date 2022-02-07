<template>
  <div id="app">
    <TheNavbar id="nav"/>
    <router-view id="content"/>
    <TheFooter id="footer"/>
  </div>
</template>


<script>
import TheNavbar from '@/components/TheNavbar.vue'
import TheFooter from '@/components/TheFooter.vue'

export default {
  components: {
    TheNavbar,
    TheFooter
  }
}
</script>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  position: relative;
  min-height: 100vh;
}

#footer {
  position: absolute;
  bottom: 0;
}

#content {
  padding-bottom: 100px;
}
</style>
