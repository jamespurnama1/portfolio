<template>
  <div>
    <div class="reveal">
      <img src="../img/jtc1.jpg" class="lazyloaded" id="jtc__image--1" alt="Jack The Clipper" />
      <img src="../img/jtc2.jpg" class="lazyloaded" id="jtc__image--2" alt="Jack The Clipper" />
      <img src="../img/jtc3.jpg" class="lazyloaded" id="jtc__image--3" alt="Jack The Clipper" />
      <img src="../img/jtc4.jpg" class="lazyloaded" id="jtc__image--4" alt="Jack The Clipper" />
      <img src="../img/jtc5.jpg" class="lazyloaded" id="jtc__image--5" alt="Jack The Clipper" />
      <img src="../img/jtc6.jpg" class="lazyloaded" id="jtc__image--6" alt="Jack The Clipper" />
      <img src="../img/jtc7.jpg" class="lazyloaded" id="jtc__image--7" alt="Jack The Clipper" />
      <img src="../img/jtc8.jpg" class="lazyloaded" id="jtc__image--8" alt="Jack The Clipper" />
      <img src="../img/jtc9.jpg" class="lazyloaded" id="jtc__image--9" alt="Jack The Clipper" />
    </div>
  </div>
</template>

<script>
import { TweenMax, Linear } from 'gsap/TweenMax';

export default {
  data() {
    return {
      images: [
        'jtc__image--1',
        'jtc__image--2',
        'jtc__image--3',
        'jtc__image--4',
        'jtc__image--5',
        'jtc__image--6',
        'jtc__image--7',
        'jtc__image--8',
        'jtc__image--9',
        'sagoo__image--1',
        'sagoo__image--2',
        'sagoo__image--3',
        'sagoo__image--4',
        'sagoo__image--5',
        'sagoo__image--6',
        'sagoo__image--7',
        'sagoo__image--8',
        'sagoo__image--9',
        'tremors__image--1',
        'tremors__image--2',
        'tremors__image--3',
        'tremors__image--4',
        'tremors__image--5',
        'tremors__image--6',
        'tremors__image--7',
        'tremors__image--8',
        'tremors__image--9',
        'tremors__image--10',
        'tremors__image--11',
        'tremors__image--12',
        'tremors__image--13',
        'tremors__image--14',
        'bbw__image--1',
        'bbw__image--2',
        'bbw__image--3',
        'bbw__image--4',
        'bbw__image--5',
        'bbw__image--6',
        'bbw__image--7',
        'bbw__image--8',
        'bbw__image--9',
        'bbw__image--10',
        'bbw__image--11',
        'bbw__image--12',
        'bbw__image--13',
        'bbw__image--14',
        'publication__image--1',
        'publication__image--2',
        'publication__image--3',
        'publication__image--4',
        'publication__image--5',
        'publication__image--6',
        'publication__image--7',
        'publication__image--8',
        'publication__image--9',
        'publication__image--10',
        'publication__image--11',
        'publication__image--12',
        'publication__image--13',
        'publication__image--14',
        'accha__image--1',
        'accha__image--2',
        'accha__image--3',
        'accha__image--4',
        'accha__image--5',
        'accha__image--6',
        'accha__image--7',
        'accha__image--8',
        'accha__image--9',
        'accha__image--10',
        'accha__image--11',
        'accha__image--12',
        'accha__image--13',
        'accha__image--14',
        'accha__image--15',
        'accha__image--16',
        'accha__image--17',
        'accha__image--18',
      ],
    };
  },

  mounted() {
    const obj = { curImg: 0 };

    const tween = TweenMax.to(obj, 0.5, {
      curImg: this.images.length - 1,
      roundProps: 'curImg',
      immediateRender: false,
      ease: Linear.easeNone,
      onUpdate() {
        const elements = document.getElementsByClassName('lazyloaded');
        for (let i = 0; i < elements.length; i += 1) {
          elements[i].style.visibility = 'hidden';
          console.log("okay i'm hiding now"); // DEBUGGING!
        }
        document.getElementById(this.images[obj.curImg]).style.visibility = 'visible';
      },
    });

    const scene = this.$scrollmagic.scene({
      triggerElement: '#trigger',
      duration: '480%',
    })

      .setTween(tween)
      .setClassToggle('.reveal', 'visible')
      .addIndicators(); // DEBUGGING!
      // .addTo(controller);
    // Add scene to element scrollmagic controller
    this.$scrollmagic.attachTo(this.$refs.scrollBox);

    // Attaching scrollmagic controller to element
    this.$refs.scrollBox.$scrollmagic.addScene(scene);
  },


  methods: {

  },

};
</script>

<style>
/* styles emitted */
</style>
