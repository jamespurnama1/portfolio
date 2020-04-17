<template>
<div>
  <headertop></headertop>
  <div id="trigger"></div>
  <gsap></gsap>
</div>
</template>

<script>
import gsap from './gsap.vue';
import headertop from './headertop.vue';

export default {
  name: 'horizontalscroll',
  components: {
    gsap, headertop,
  },
};
</script>
