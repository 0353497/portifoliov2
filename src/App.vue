<template>
  <Nav />
  <router-view />
</template>
<script>
import Nav from '@/components/Nav.vue'
export default {
  name: 'App',
  components: {
    Nav
  }
}

</script>

<style>
:root {
  --background-color: #f8f9fa;
  --text-color: #343a40;
  --background-secondary: #e9ecef;
  --text-secondary: #6c757d;
}

body {
  background-color: var(--background-color);
  color: var(--text-color);
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
