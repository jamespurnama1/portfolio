/*--------------------
Import Modules
--------------------*/
import '../style.scss';

function requireAll(r) {
  r.keys().forEach(r);
}
requireAll(require.context('../img', true));
import $ from 'jquery';
window.jQuery = $;
window.$ = $;
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
// import 'debug.addIndicators'

/*--------------------
Check jQuery DEBUGGING!
--------------------*/
// if (window.jQuery) {
//   // jQuery is loaded
//   console.log("jQuery is loaded.");
// } else {
//   // jQuery is not loaded
//   console.error("jQuery is not present.");
// };

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
var isChrome = /Chrome /.test(navigator.sayswho);
var isSafari = /Safari /.test(navigator.sayswho);
console.log(navigator.sayswho, "Chrome?", isChrome, "Safari?", isSafari);

//document ready
$(document).ready(function() {

/*--------------------
Lazyload
--------------------*/
window.lazySizesConfig = window.lazySizesConfig || {};
// window.lazySizesConfig.customMedia = {
//     '--small': '(max-width: 480px)',
//     '--medium': '(max-width: 900px)',
//     '--large': '(max-width: 1400px)',
// };
// $('.lazy-others').addClass('tremors');

/*--------------------
Mobile Checker
--------------------*/

  // Mobile

      if ($(window).width() < 480) {
    console.log("mobile view mode");
    var controller = new ScrollMagic.Controller({
      // refreshInterval: 0
    });
    $(window).resize(function() {
      if ($(window).width() >= 480) {
        location.reload();
        console.log("rotated to landscape");
      }
    }
  )};

// landscape mobile
  let scaled = false
  if ($(window).height() < 480) {
    let viewport = document.querySelector("meta[name=viewport]");
    viewport.setAttribute('content', 'width=device-width, initial-scale=0.5, maximum-scale=0.5, user-scalable=no');
    scaled = true;
    $("#ball").hide();
  };

  // $(window).resize(function() {
  //   console.log("scaled: " + scaled + ", width: " + $(window).width()); //DEBUGGING!
  // });


// desktop
  if ($(window).width() >= 480 || ($(window).width() >= 960 && scaled == true)) {
    console.log("desktop mode");
    $(window).resize(function() {
      if ($(window).width() < 480 || ($(window).width() < 960 && scaled == true)) {
        location.reload();
        console.log("rotated to portrait");
      };
  });
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
Safari Fix
--------------------*/
let ball = document.getElementById('ball');

if (isSafari == true ) {
  console.log("applying Safari Fix");
  TweenLite.set(ball, {
      transform: "translate(-50%, -50%) translateZ(100px)"
  });
  TweenLite.set("#magic-cursor", {
      transformStyle: "preserve-3d",
      transform: "translateZ(200px)"
  });
};

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

    TweenLite.set(ball, {
      scale: 0.25,
      xPercent: -67,
      yPercent: -65
    });

    TweenMax.set("circle",  {
      fill: "#f7f8fa"
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
        scale: 1,
        mixBlendMode: "difference",
       });
      active = true;
      });

    $(".icon-wrap").mouseleave(function(e) {
      TweenMax.to(this, 0.3, {
        scale: 1
      });
      TweenMax.to(ball, 0.3, {
        scale: 0.25,
        mixBlendMode: "difference",
      });
      TweenMax.to(this.querySelector(".button-icon"), 0.3, {
        x: 0,
        y: 0
       });
       TweenMax.to("circle", 0.3, {
        fill: "#f7f8fa"
      })
      active = false;
    });

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

/*--------------------
ScrollMagic Controller
--------------------*/
    var controller = new ScrollMagic.Controller({
      // refreshInterval: 0,
      vertical: false,
      offset: 20,
      // loglevel: 3 //DEBUGGING!
    })
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
      translateZ: "-100px",
      transformPerspective: 1000,
      transformOrigin: 'center center'
    });
  }

  window.addEventListener('mousemove', tilt, false);
  window.addEventListener('touchmove', tilt, false);

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
      width: window.innerwidth,
      height: window.innerheight
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
  let scenes = [];
  let x = 0;

/*--------------------
Smooth Scrollbar
--------------------*/
// intialize scrollbar
let scrollbar = Scrollbar.init(document.querySelector('#smoothscrollbar'), {
    damping: '0.3'
});

// listener smooth-scrollbar, update controller
scrollbar.addListener(function(status) {
  
  if(isChrome){ 
    controller.update();
  } else {
    scenes.forEach(function(scene){
           scene.refresh();       
    });
  }
  
});
$(".scrollbar-track").remove();

/*--------------------
href
--------------------*/

$(".button-icon").click(function(e){
  e.preventDefault();
  var url = $(this).attr('href');
  TweenMax.to("circle", 0.7, {
    fill: "black"
  }, 0.1)
  TweenMax.to('#ball', 0.5, {
    scale: 100,
    mixBlendMode: "initial",
    display: "initial",
    ease:Back.easeIn,
    onComplete: function(){
         window.location.href = url;                                           
    }
 }, 0.1);
});

/*--------------------
Smooth Entrance
--------------------*/

setTimeout(function() {
    $("[id^=preloader], [id*=preloader]").fadeOut(2000, function() {
      $(this).remove();
    })
  }, 3000);
}); //end of 'on.load'