<template>
<div v-show="toggle" id="preloader" ref="preloader"></div>
</template>

<script>
import SiriWave from 'siriwave';

export default {
  name: 'preloader',
  data() {
    return { siriWave: SiriWave, p: 0, toggle: true };
  },
  mounted() {
    this.siriWave = this.initiate();
    this.p = 0;
    this.$nextTick(() => {
      if (this.$refs.preloader) {
        console.log('Now it does!');
        this.loop();
      }
    });
  },

  methods: {
    initiate() {
      return new SiriWave({
        container: document.getElementById('preloader'),
        autostart: true,
        speed: 0.05,
        amplitude: 0,
        cover: true,
      });
    },
    loop() {
      if (this.p < 1) {
        setTimeout(() => {
          this.p += 0.01;
          this.siriWave.setAmplitude(this.p);
          this.loop();
        }, 100);
      } else {
        this.toggle = false;
      }
    },
  },
};
</script>

<style scoped lang="scss">
#preloader {
  height: 150%;
  width: 150%;
  background: black;
  position: fixed;
  top: -25%;
  left: -25%;
  z-index: 1000;
  overflow: hidden;
}
</style>
