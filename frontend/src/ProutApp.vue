<template>
  <Prout />
  <ButtonCounter message="bouh?" />
  <ButtonCounter />
  <ButtonCounter message="1" />
  <ButtonCounter message="42 56" />
  <ButtonCounter message="reloadeeeeeeeeeeeed?" />
</template>

<script>
import Prout from './components/Prout.vue';
import ButtonCounter from './components/ButtonCounter.vue';
export default {
  components: {
    Prout,
    ButtonCounter,
  },
};
</script>
