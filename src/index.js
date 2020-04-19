/*--------------------
Import Modules
--------------------*/
import './style.scss';
import Icon from './favicon.ico';

function requireAll(r) {
  r.keys().forEach(r);
}
requireAll(require.context('./img', true));
import $ from 'jquery';
window.jQuery = $;
window.$ = $;
import SiriWave from 'siriwave';
// import HorizontalScroll from '@oberon-amsterdam/horizontal';
import Scrollbar, { ScrollbarPlugin, addIndicators } from 'smooth-scrollbar';
// gsap 2.1.3
import {
  TweenMax,
  TimelineMax,
  Linear
} from "gsap/TweenMax";
// import { gsap } from 'gsap';
import ScrollMagic from 'scrollmagic';
import 'animation.gsap'
// import { ScrollScene, ScrollMagic } from 'scrollscene'
import 'lazysizes';
//DEBUGGING!
import 'debug.addIndicators'

/*--------------------
Horizontal Scroll Plugin
--------------------*/
class HorizontalScrollPlugin extends Scrollbar.ScrollbarPlugin {
  static pluginName = 'horizontalScroll';

  transformDelta(delta, fromEvent) {
    if (!/wheel/.test(fromEvent.type)) {
      return delta;
    }
    const { x, y } = delta; 

    return {
      y: 0,
      x: Math.abs(x) > Math.abs(y) ? x : y, };
    }
  }
  Scrollbar.use(HorizontalScrollPlugin);
  let option = {
    x: 0,
    speed: 1.5,
    limit: 2,
    time: 0.3,
  };

/*--------------------
Preloader
--------------------*/
var p = 0;

var siriWave = new SiriWave({
  container: document.getElementById('preloader'),
  autostart: true,
  speed: 0.05,
  amplitude: 0,
  cover: true
});
var interval = setInterval(increment, 300);

function increment() {
  p = p + 0.01;
  siriWave.setAmplitude(p)
  //console.log(p) //DEBUGGING!
}

/*--------------------
Lazyload
--------------------*/
window.lazySizesConfig = window.lazySizesConfig || {};
// window.lazySizesConfig.customMedia = {
//     '--small': '(max-width: 480px)',
//     '--medium': '(max-width: 900px)',
//     '--large': '(max-width: 1400px)',
// };
$('.lazy-others').addClass('jtc');

/*--------------------
Check jQuery DEBUGGING!
--------------------*/
if (window.jQuery) {
  // jQuery is loaded
  console.log("jQuery is loaded.");
} else {
  // jQuery is not loaded
  console.error("jQuery is not present.");
};

/*--------------------
Check UserAgent DEBUGGING!
--------------------*/
navigator.sayswho = (function() {
  var ua = navigator.userAgent,
    tem,
    M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
  if (/trident/i.test(M[1])) {
    tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
    return 'IE ' + (tem[1] || '');
  }
  if (M[1] === 'Chrome') {
    tem = ua.match(/\b(OPR|Edge)\/(\d+)/);
    if (tem != null) return tem.slice(1).join(' ').replace('OPR', 'Opera');
  }
  M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];
  if ((tem = ua.match(/version\/(\d+)/i)) != null) M.splice(1, 1, tem[1]);
  return M.join(' ');
})();
const isChrome = /Chrome /.test(navigator.sayswho);
console.log(navigator.sayswho, "Chrome?", isChrome);

$(document).ready(function() {

  // Check if mobile
  function isMobile() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
  }

  if (isMobile()) {
    var controller = new ScrollMagic.Controller({});

  } else {

/*--------------------
Horizontal Scroll
--------------------*/
    // new HorizontalScroll({
    //   // container: document.querySelector('#container')
    // });

/*--------------------
Custom Cursor
--------------------*/
    var mouse = {
      x: 0,
      y: 0
    };
    var pos = {
      x: 0,
      y: 0
    };
    var ratio = 0.7;
    var active = false;
    let ball = document.getElementById('ball');

    TweenLite.set('#ball', {
      xPercent: -50,
      yPercent: -50
    });

    $(window).mouseleave(function() {
      ball.style.opacity = "0";
      });
    $(window).mouseenter(function() {
      ball.style.opacity = "1";
      });

    document.addEventListener("mousemove", mouseMove);

    function mouseMove(e) {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    }

    TweenLite.ticker.addEventListener("tick", updatePosition);

    function updatePosition() {
      if (!active) {
        pos.x += (mouse.x - pos.x) * ratio;
        pos.y += (mouse.y - pos.y) * ratio;

        TweenLite.set("#ball", {
          x: pos.x,
          y: pos.y
        });
      }
    }

/*--------------------
Magnet Cursor
--------------------*/

    //general .icon-wrap
    $(".icon-wrap").mouseenter(function(e) {
      TweenMax.to(ball, 0.3, {
        scale: 4
       });
      active = true;
      });

    $(".icon-wrap").mouseleave(function(e) {
      TweenMax.to(this, 0.3, {
        scale: 1
      });
      TweenMax.to(ball, 0.3, {
        scale: 1
      });
      TweenMax.to(this.querySelector(".button-icon"), 0.3, {
        x: 0,
        y: 0
       });
       active = false;
    });

    // //#icon-wrap-works
    // $("#icon-wrap-works").mouseenter(function(e) {
    //   TweenMax.to(ball, 0.3, {
    //     scale: 4
    //   });
    //   active = true;
    //   // $("#works").css("color","black");
    // });

    // $("#icon-wrap-works").mouseleave(function(e) {
    //   TweenMax.to(this, 0.3, {
    //     scale: 1
    //   });
    //   TweenMax.to(ball, 0.3, {
    //     scale: 1
    //   });
    //   TweenMax.to(this.querySelector("#works"), 0.3, {
    //     x: 0,
    //     y: 0
    //   });
    //   active = false;
    //   // $("#works").css("color","white");
    // });

    // //#icon-wrap-contact
    // $("#icon-wrap-contact").mouseenter(function(e) {
    //   TweenMax.to(ball, 0.3, {
    //     scale: 4
    //   });
    //   active = true;
    //   // $("#contact").css("color","black");
    // });

    // $("#icon-wrap-contact").mouseleave(function(e) {
    //   TweenMax.to(this, 0.3, {
    //     scale: 1
    //   });
    //   TweenMax.to(ball, 0.3, {
    //     scale: 1
    //   });
    //   TweenMax.to(this.querySelector("#contact"), 0.3, {
    //     x: 0,
    //     y: 0
    //   });
    //   active = false;
    //   // $("#contact").css("color","white");
    // });

    $(".icon-wrap").mousemove(function(e) {
      parallaxCursor(e, this, 3);
      callParallax(e, this);
    });

    function callParallax(e, parent) {
      parallaxIt(e, parent, parent.querySelector(".button-icon"), 10);
    }

    function parallaxIt(e, parent, target, movement) {
      var boundingRect = parent.getBoundingClientRect();
      var relX = e.clientX - boundingRect.left;
      var relY = e.clientY - boundingRect.top;

      TweenMax.to(target, 0.3, {
        x: (relX - boundingRect.width / 2) / boundingRect.width * movement,
        y: (relY - boundingRect.height / 2) / boundingRect.height * movement,
        ease: Power2.easeOut
      });
    }

    function parallaxCursor(e, parent, movement) {
      var rect = parent.getBoundingClientRect();
      var relX = e.clientX - rect.left;
      var relY = e.clientY - rect.top;
      pos.x = rect.left + rect.width / 2 + (relX - rect.width / 2) / movement;
      pos.y = rect.top + rect.height / 2 + (relY - rect.height / 2) / movement;
      TweenMax.to(ball, 0.3, {
        x: pos.x,
        y: pos.y
      });
    }
  } //end of 'if mobile'

/*--------------------
Tilt with GSAP
--------------------*/
  var selector = document.getElementsByClassName('visible');

  TweenMax.set(selector, {
    transformStyle: 'preserve-3d'
  });
  var tilt = function(e) {
    var html = document.documentElement;
    var height = Math.max(html.clientHeight, html.offsetHeight);
    var width = Math.max(html.clientWidth, html.offsetWidth);
    var sxPos = e.clientX / width * 100 - 50;
    var syPos = e.clientY / height * 100 - 50;
    // console.log("x:" + sxPos + ", y:" + syPos); // DEBUGGING!
    TweenMax.to(selector, 1, {
      rotationY: -0.15 * sxPos,
      rotationX: -0.20 * syPos,
      translateZ: 10,
      transformPerspective: 1000,
      transformOrigin: 'center center'
    });
  }


  window.addEventListener('mousemove', tilt, false);
  window.addEventListener('touchmove', tilt, false);


  // var request = null;
  // var mouse = {
  //   x: 0,
  //   y: 0
  // };
  // var cx = window.innerWidth / 2;
  // var cy = window.innerHeight / 2;
  //
  // $('body').mousemove(function(event) {
  //
  //   mouse.x = event.pageX;
  //   mouse.y = event.pageY;
  //
  //   cancelAnimationFrame(request);
  //   request = requestAnimationFrame(update);
  // });
  //
  // function update() {
  //
  //   dx = mouse.x - cx;
  //   dy = mouse.y - cy;
  //
  //   tiltx = (dy / cy);
  //   tilty = -(dx / cx);
  //   radius = Math.sqrt(Math.pow(tiltx, 2) + Math.pow(tilty, 2));
  //   degree = (radius * 20);
  //   TweenLite.to("#container", 1, {
  //     transform: 'rotate3d(' + tiltx + ', ' + tilty + ', 0, ' + degree + 'deg)',
  //     ease: Power2.easeOut
  //   });
  // }
  //
  // $(window).resize(function() {
  //   cx = window.innerWidth / 2;
  //   cy = window.innerHeight / 2;
  // });

/*--------------------
Three.js Canvas
--------------------*/
  var slider = 50;

  (function() {
    var canvas, mouse = {
        x: 0,
        y: 0,
        down: false
      },
      world = {
        width: window.innerWidth,
        height: window.innerHeight
      },
      camera, scene, renderer, uniforms, container;

    function initialize() {
      container = document.getElementById('threejs');
      camera = new THREE.Camera(20, world.width / world.height, 1, 10000);
      camera.position.z = 1800;
      scene = new THREE.Scene();
      renderer = new THREE.WebGLRenderer();
      renderer.setSize(world.width, world.height);
      container.appendChild(renderer.domElement);
      window.addEventListener('resize', windowResizeMoveHandler, false);
      createProjector();
      windowResizeMoveHandler();
    }

    function createProjector() {
      uniforms = {
        time: {
          type: "f",
          value: 1.0
        },
        resolution: {
          type: "v2",
          value: new THREE.Vector2()
        },
        mouse: {
          type: "v2",
          value: new THREE.Vector2()
        },
        slider: {
          type: "f",
          value: 50.
        }
      };
      var material = new THREE.MeshShaderMaterial({
        uniforms: uniforms,
        vertexShader: document.querySelector('#vertexShader').textContent,
        fragmentShader: document.querySelector('#fragmentShader').textContent
      });
      var mesh = new THREE.Mesh(new Plane(60, 60, 1, 1), material);
      mesh.position.z = 100;
      mesh.scale.x = 100;
      mesh.scale.y = 100;
      mesh.scale.z = 100;
      scene.addObject(mesh);
    }

    function windowResizeMoveHandler(event) {
      world.width = window.innerWidth;
      world.height = window.innerHeight;
      uniforms.resolution.value.x = world.width;
      uniforms.resolution.value.y = world.height;
      renderer.setSize(world.width, world.height);
      camera.aspect = world.width / world.height;
      camera.updateProjectionMatrix();
    }

    function animate() {
      requestAnimationFrame(animate);
      render();
    }

    function render() {
      uniforms.slider.value = slider + 0.01;
      uniforms.time.value += (0.02 * (slider / 100.));
      renderer.render(scene, camera);
    }
    initialize();
    animate();
  })();

/*--------------------
ScrollMagic & GSAP
--------------------*/
  var controller = new ScrollMagic.Controller({
    refreshInterval: 0,
    vertical: false,
    loglevel: 3 //DEBUGGING!
  })

  var images = [
    "jtc__image--1",
    "jtc__image--2",
    "jtc__image--3",
    "jtc__image--4",
    "jtc__image--5",
    "jtc__image--6",
    "jtc__image--7",
    "jtc__image--8",
    "jtc__image--9",
    "sagoo__image--1",
    "sagoo__image--2",
    "sagoo__image--3",
    "sagoo__image--4",
    "sagoo__image--5",
    "sagoo__image--6",
    "sagoo__image--7",
    "sagoo__image--8",
    "sagoo__image--9",
    "tremors__image--1",
    "tremors__image--2",
    "tremors__image--3",
    "tremors__image--4",
    "tremors__image--5",
    "tremors__image--6",
    "tremors__image--7",
    "tremors__image--8",
    "tremors__image--9",
    "tremors__image--10",
    "tremors__image--11",
    "tremors__image--12",
    "tremors__image--13",
    "tremors__image--14",
    "bbw__image--1",
    "bbw__image--2",
    "bbw__image--3",
    "bbw__image--4",
    "bbw__image--5",
    "bbw__image--6",
    "bbw__image--7",
    "bbw__image--8",
    "bbw__image--9",
    "bbw__image--10",
    "bbw__image--11",
    "bbw__image--12",
    "bbw__image--13",
    "bbw__image--14",
    "publication__image--1",
    "publication__image--2",
    "publication__image--3",
    "publication__image--4",
    "publication__image--5",
    "publication__image--6",
    "publication__image--7",
    "publication__image--8",
    "publication__image--9",
    "publication__image--10",
    "publication__image--11",
    "publication__image--12",
    "publication__image--13",
    "publication__image--14",
    "accha__image--1",
    "accha__image--2",
    "accha__image--3",
    "accha__image--4",
    "accha__image--5",
    "accha__image--6",
    "accha__image--7",
    "accha__image--8",
    "accha__image--9",
    "accha__image--10",
    "accha__image--11",
    "accha__image--12",
    "accha__image--13",
    "accha__image--14",
    "accha__image--15",
    "accha__image--16",
    "accha__image--17",
    "accha__image--18"
  ];
  let scenes = [];
  let x = 0;

  var obj = {
    curImg: 0
  };

  var tween = TweenMax.to(obj, 0.5, {
    curImg: images.length - 1,
    roundProps: "curImg",
    immediateRender: false,
    ease: Linear.easeNone,
    onUpdate: function() {
      var elements = document.getElementsByClassName('lazyloaded');
      for (var i = 0; i < elements.length; i++) {
        elements[i].style.visibility = 'hidden';
        console.log("okay i'm hiding now"); //DEBUGGING!
      }
      document.getElementById(images[obj.curImg]).style.visibility = 'visible';
    }
  });
  scenes.push(new ScrollMagic.Scene({
    triggerElement: "#trigger",
    duration: "480%"
  })
  .setTween(tween)
  .setClassToggle(".reveal", "visible")
  .addIndicators() //DEBUGGING!
  .addTo(controller)
  );

  //chrome optimization
  if(isChrome){
    controller.scrollPos(function () {
      return x;
    });
  }
/*--------------------
Smooth Scrollbar
--------------------*/
// intialize scrollbar
let scrollbar = Scrollbar.init(document.querySelector('#smoothscrollbar'), {damping: '0.2'});

// add listener to refresh the scene manually
// scrollbar.addListener(() => {
//   imagesScene.refresh()
// })

  // listener smooth-scrollbar, update controller
scrollbar.addListener(function(status) {

  x = status.offset.x;
  
  if(isChrome){ 
    controller.update();
  } else {
    scenes.forEach(function(scene){
           scene.refresh();       
    });
  }
  
});
/*--------------------
Remove Preloader
--------------------*/
  setTimeout(function() {
    $("#preloader").fadeOut(1000, function() {
      $(this).remove();
    })
  }, 3000);
}); //end of 'on.load'
