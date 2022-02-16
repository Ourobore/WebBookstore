<script>
export default {
  props: ['message'],
  data() {
    return {
      count: 0,
    };
  },
};
</script>

<template>
  <button @click="count++">
    You clicked me {{ count }} times. {{ message }}
  </button>
</template>
