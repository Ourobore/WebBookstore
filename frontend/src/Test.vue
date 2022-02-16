<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <test />
</template>

<script>
import test from './components/test.vue';
export default {
  name: 'App',
  components: {
    test,
  },
};
</script>

<style scoped>
img {
  width: 5em;
}
</style>
