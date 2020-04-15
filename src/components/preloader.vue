<template>
<div id="preloader"></div>
</template>

<script>
import SiriWave from 'siriwave';

let p = 0;

const siriWave = new SiriWave({
  container: document.getElementById('preloader'),
  autostart: true,
  speed: 0.05,
  amplitude: 0,
  cover: true,
});

export default {
  name: 'preloader',
  onload: () => {
    setInterval(() => {
      p += 0.01;
      siriWave.setAmplitude(p);
    }, 300);
  },
};
</script>

<style scoped lang="scss">
#preloader {
  height: 100%;
  width: 100%;
}
</style>
