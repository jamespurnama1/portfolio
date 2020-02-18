import './style.css';
import Icon from './favicon.ico';

function requireAll(r) {
  r.keys().forEach(r);
}
requireAll(require.context('./img', true));
import $ from 'jquery';
window.jQuery = $;
window.$ = $;
import HorizontalScroll from '@oberon-amsterdam/horizontal';
//gsap 2.1.3
// import {
//   gsap
// } from "gsap";
// import TweenMax from 'gsap/TweenMax.min.js';
import {
  TweenMax,
  TimelineMax,
  Linear
} from "gsap/TweenMax";
// import "scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap";
// import TimelineMax from 'gsap/TimelineMax';
import ScrollMagic from 'scrollmagic';
import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';
import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators';
// import 'animation.gsap';
import 'lazysizes';
// import 'debug.addIndicators';
// var gsap = require('gsap');
// TweenMax/TimelineMax will be global in v2. In v3, they will be on the gsap object
// var TweenMax = TweenMax || gsap.TweenMax;
// var TimelineMax = TimelineMax || gsap.TimelineMax;
// factory(require('scrollmagic'), TweenMax, TimelineMax);

// Check if mobile
function isMobile() {
  return (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
}

if (isMobile()) {} else {
  new HorizontalScroll();
}

// Icon loader
// function component() {
//   const element = document.createElement('div');
//
//   const myIcon = new Image();
//   myIcon.src = Icon;
//
//   element.appendChild(myIcon);
//
//   return element;
// }

//dynamic position
// var parent = $('.blocka');
// var position = parent.offset();
// $('.trigger2').offset({
//   top: position.top,
//   left: position.left
// });

// lazyload sizing
window.lazySizesConfig = window.lazySizesConfig || {};
// window.lazySizesConfig.customMedia = {
//     '--small': '(max-width: 480px)',
//     '--medium': '(max-width: 900px)',
//     '--large': '(max-width: 1400px)',
// };
$('.lazy-others').addClass('jtc');

//ScrollMagic
window.onload = function() {
  if (window.jQuery) {
    // jQuery is loaded
    console.log("jQuery is loaded.");
  } else {
    // jQuery is not loaded
    console.error("jQuery is not present.");
  };

  // init controller
  const controller = new ScrollMagic.Controller({
    vertical: false
  });
  const images = [
    "jtc__image--1",
    "jtc__image--2",
    "jtc__image--3",
    "jtc__image--4",
    "jtc__image--5",
    "jtc__image--6",
    "jtc__image--7",
    "jtc__image--8",
    "jtc__image--9",
  ];

  const images2 = [
    "sagoo__image--1",
    "sagoo__image--2",
    "sagoo__image--3",
    "sagoo__image--4",
    "sagoo__image--5",
    "sagoo__image--6",
    "sagoo__image--7",
    "sagoo__image--8",
    "sagoo__image--9",
  ];

  const images3 = [
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
  ];

  const images4 = [
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
  ];

  const images5 = [
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
  ];

  const images6 = [
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
    "accha__image--18",
  ];
  // // tween
  // TweenMax.set(".fadeIn", {
  //   autoAlpha: 0
  // });
  // var pin = TweenMax.staggerTo(".fadeIn", 1, {
  //   autoAlpha: 1
  // }, 1);
  //
  // TweenMax.set(".fadeIn2", {
  //   autoAlpha: 0
  // });
  // var pin2 = TweenMax.staggerTo(".fadeIn2", 1, {
  //   autoAlpha: 1
  // }, 1);
  //
  // TweenMax.set(".fadeIn3", {
  //   autoAlpha: 0
  // });
  // var pin3 = TweenMax.staggerTo(".fadeIn3", 1, {
  //   autoAlpha: 1
  // }, 1);
  //jack the clipper
  // var obj = {curImg: -6};
  // // create tween
  // var tween = TweenMax.to(obj, 100,
  //   {
  //     curImg: images.length,  // Animate the property
  //     roundProps: "curImg",       // Use integers
  //     immediateRender: false,      //Loading image
  //     ease: Linear.easeNone,
  //           // Equal time for all images
  //     onUpdate: function () {
  //       $(".jtc").html(images[obj.curImg]); // Image set up
  //     }
  //   }
  // );
  //   // build scene
  //  var scene = new ScrollMagic.Scene({triggerElement: "#trigger", duration: "80%"})
  //          .setTween(tween)
  //          .addIndicators() // add indicators (requires plugin)
  //          .addTo(controller);

  //jacktheclipper
  const obj = {
    curImg: 0
  };

  const tween = TweenMax.to(obj, 0.5, {
    curImg: images.length - 1,
    roundProps: "curImg",
    immediateRender: false,
    ease: Linear.easeNone,
    onUpdate: function() {
      var element = document.querySelectorAll('.jtc');
      for (var i = 0; i < element.length; i++) {
        element[i].style.visibility = 'hidden';
      }
      document.getElementById(images[obj.curImg]).style.visibility = 'visible';
    }
  });

  const imagesScene = new ScrollMagic.Scene({
      triggerElement: "#trigger",
      duration: "80%"
    })
    .setTween(tween)
    .setClassToggle(".reveal", "visible")
    .addIndicators()
    .addTo(controller);

  //sagoo
  const obj2 = {
    curImg: 0
  };

  const tween2 = TweenMax.to(obj2, 0.5, {
    curImg: images2.length - 1,
    roundProps: "curImg",
    immediateRender: false,
    ease: Linear.easeNone,
    onUpdate: function() {
      var element2 = document.querySelectorAll('.sagoo');
      for (var i = 0; i < element2.length; i++) {
        element2[i].style.visibility = 'hidden';
      }
      document.getElementById(images2[obj2.curImg]).style.visibility = 'visible';
    }
  });

  const imagesScene2 = new ScrollMagic.Scene({
      triggerElement: "#trigger2",
      duration: "80%"
    })
    .setTween(tween2)
    .setClassToggle(".reveal2", "visible")
    .addIndicators()
    .addTo(controller);

  //tremors
  const obj3 = {
    curImg: 0
  };

  const tween3 = TweenMax.to(obj3, 0.5, {
    curImg: images3.length - 1,
    roundProps: "curImg",
    immediateRender: false,
    ease: Linear.easeNone,
    onUpdate: function() {
      var element3 = document.querySelectorAll('.tremors');
      for (var i = 0; i < element3.length; i++) {
        element3[i].style.visibility = 'hidden';
      }
      document.getElementById(images3[obj3.curImg]).style.visibility = 'visible';
    }
  });

  const imagesScene3 = new ScrollMagic.Scene({
      triggerElement: "#trigger3",
      duration: "80%"
    })
    .setTween(tween3)
    .setClassToggle(".reveal3", "visible")
    .addIndicators()
    .addTo(controller);

  //bbw
  const obj4 = {
    curImg: 0
  };

  const tween4 = TweenMax.to(obj4, 0.5, {
    curImg: images4.length - 1,
    roundProps: "curImg",
    immediateRender: false,
    ease: Linear.easeNone,
    onUpdate: function() {
      var element4 = document.querySelectorAll('.bbw');
      for (var i = 0; i < element4.length; i++) {
        element4[i].style.visibility = 'hidden';
      }
      document.getElementById(images4[obj4.curImg]).style.visibility = 'visible';
    }
  });

  const imagesScene4 = new ScrollMagic.Scene({
      triggerElement: "#trigger4",
      duration: "80%"
    })
    .setTween(tween4)
    .setClassToggle(".reveal4", "visible")
    .addIndicators()
    .addTo(controller);

  //publication
  const obj5 = {
    curImg: 0
  };

  const tween5 = TweenMax.to(obj5, 0.5, {
    curImg: images5.length - 1,
    roundProps: "curImg",
    immediateRender: false,
    ease: Linear.easeNone,
    onUpdate: function() {
      var element5 = document.querySelectorAll('.publication');
      for (var i = 0; i < element5.length; i++) {
        element5[i].style.visibility = 'hidden';
      }
      document.getElementById(images5[obj5.curImg]).style.visibility = 'visible';
    }
  });

  const imagesScene5 = new ScrollMagic.Scene({
      triggerElement: "#trigger5",
      duration: "80%"
    })
    .setTween(tween5)
    .setClassToggle(".reveal5", "visible")
    .addIndicators()
    .addTo(controller);

  //accha
  const obj6 = {
    curImg: 0
  };

  const tween6 = TweenMax.to(obj6, 0.5, {
    curImg: images6.length - 1,
    roundProps: "curImg",
    immediateRender: false,
    ease: Linear.easeNone,
    onUpdate: function() {
      var element6 = document.querySelectorAll('.accha');
      for (var i = 0; i < element6.length; i++) {
        element6[i].style.visibility = 'hidden';
      }
      document.getElementById(images6[obj6.curImg]).style.visibility = 'visible';
    }
  });

  const imagesScene6 = new ScrollMagic.Scene({
      triggerElement: "#trigger6",
      duration: "80%"
    })
    .setTween(tween6)
    .setClassToggle(".reveal6", "visible")
    .addIndicators()
    .addTo(controller);

  // if (document.getElementsByClassName('trigger, trigger2, trigger3').length > 0) {
  //   var scene = new ScrollMagic.Scene({
  //       triggerElement: '.trigger',
  //       duration: 400
  //     })
  //     .setTween(tween)
  //     .addIndicators({
  //       zindex: 999
  //     }) // add indicators (requires plugin)
  //     .addTo(controller);
  //
  //     var scene2 = new ScrollMagic.Scene({
  //         triggerElement: '.trigger2',
  //         duration: 400
  //       })
  //       .setTween(tween2)
  //       .addIndicators({
  //         zindex: 999
  //       }) // add indicators (requires plugin)
  //       .addTo(controller);
  //
  //       var scene3 = new ScrollMagic.Scene({
  //           triggerElement: '.trigger3',
  //           duration: 400
  //         })
  //         .setTween(tween3)
  //         .addIndicators({
  //           zindex: 999
  //         }) // add indicators (requires plugin)
  //         .addTo(controller);
  // }

  // scene
  // if (document.getElementById('trigger').length > 0){
  // var scene = new ScrollMagic.Scene({
  //     triggerElement: '#trigger',
  //     // duration: 400
  //   })
  //   .setPin(pin)
  //   .addIndicators() // add indicators (requires plugin)
  //   .addTo(controller);
  // }

  // if (document.getElementById('trigger2').length > 0){
  // var scene2 = new ScrollMagic.Scene({
  //     triggerElement: '#trigger2',
  //     // duration: 400
  //   })
  //   .setPin(pin2)
  //   .addIndicators() // add indicators (requires plugin)
  //   .addTo(controller);
  // }

  // if (document.getElementById('trigger3').length > 0){
  // var scene3 = new ScrollMagic.Scene({
  //     triggerElement: '#trigger3',
  //     // duration: 400
  //   })
  //   .setPin(pin3)
  //   .addIndicators() // add indicators (requires plugin)
  //   .addTo(controller);
  // }
// (function ($) {
//
//   var request = null;
//   var mouse = {
//     x: 0,
//     y: 0
//   };
//   var cx = window.innerWidth / 2;
//   var cy = window.innerHeight / 2;
// });
//
//   $('body').mousemove(function(event) {
//
//     mouse.x = event.pageX;
//     mouse.y = event.pageY;
//
//     cancelAnimationFrame(request);
//     request = requestAnimationFrame(update);
//   });
//
//   function update() {
//
//     dx = mouse.x - cx;
//     dy = mouse.y - cy;
//
//     tiltx = (dy / cy);
//     tilty = -(dx / cx);
//     radius = Math.sqrt(Math.pow(tiltx, 2) + Math.pow(tilty, 2));
//     degree = (radius * 20);
//     TweenLite.to(".block", 1, {
//       transform: 'rotate3d(' + tiltx + ', ' + tilty + ', 0, ' + degree + 'deg)',
//       ease: Power2.easeOut
//     });
//   }
//
//   $(window).resize(function() {
//     cx = window.innerWidth / 2;
//     cy = window.innerHeight / 2;
//   });

//cursor
var mouse = { x: 0, y: 0 };
var pos = { x: 0, y: 0 };
var ratio = 0.15;
var active = false;
var ball = document.getElementById("ball");

TweenLite.set(ball, { xPercent: -50, yPercent: -50 });

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

        TweenLite.set(ball, { x: pos.x, y: pos.y });
    }
}

$(".icon-wrap").mouseenter(function(e) {
    TweenMax.to(ball, 0.3, { scale: 2 });
    active = true;
});

$(".icon-wrap").mouseleave(function(e) {
    TweenMax.to(this, 0.3, { scale: 1 });
    TweenMax.to(ball, 0.3, { scale: 1 });
    TweenMax.to(this.querySelector(".button-icon"), 0.3, { x: 0, y: 0 });
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
    TweenMax.to(ball, 0.3, { x: pos.x, y: pos.y });
}

// const handleMousePos = (e) => {
//   const CURSOR = document.querySelector('#mouse-cursor');
//   const HOVER = document.querySelectorAll('.cursor-hover');
//   const {
//     pageX: posX,
//     pageY: posY
//   } = e;
// console.log( e );
//   const runMouseOver = () => {
//     CURSOR.style.transform = 'scale(3)';
//     CURSOR.style.background = '#FF1744';
//   };
//   HOVER.forEach(hover => hover.addEventListener('mouseenter', runMouseOver));
//
//   const runMouseLeave = () => {
//     CURSOR.style.transform = '';
//     CURSOR.style.background = '';
//   };
//   HOVER.forEach(hover => hover.addEventListener('mouseleave', runMouseLeave));
//
//   return (
//     CURSOR.style.left = `${posX - 10}px`,
//     CURSOR.style.top = `${posY - 10}px`
//   );
// };
// document.addEventListener('mousemove', handleMousePos);

//tilt
var selector = document.getElementsByClassName('tilt');

TweenMax.set(selector, {
  transformStyle: 'preserve-3d'
});

document.body.addEventListener('mousemove', function(e) {
  var body = document.body,
    html = document.documentElement;
  var height = Math.max(body.scrollHeight, body.offsetHeight,
    html.clientHeight, html.scrollHeight, html.offsetHeight);
  var width = Math.max(body.scrollWidth, body.offsetWidth,
    html.clientWidth, html.scrollWidth, html.offsetWidth);
  var sxPos = e.pageX / width * 100 - 50;
  var syPos = e.pageY / height * 100 - 50;
  // console.log("x:" + sxPos + ", y:" + syPos);
  TweenMax.to(selector, 1, {
    rotationY: 0.15 * sxPos,
    rotationX: 0.20 * syPos,
    rotationZ: 0,
    transformPerspective: 500,
    transformOrigin: 'center center'
  });
});
};
