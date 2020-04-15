<template>
<div>
  <preloader></preloader>
  <horizontalscroll></horizontalscroll>
</div>
</template>

<script>
import preloader from './components/preloader.vue';
import horizontalscroll from './components/horizontalscroll.vue';

export default {
  name: 'portfolio',
  components: {
    preloader,
    horizontalscroll,
  },
};
</script>

<style lang="scss">

</style>
