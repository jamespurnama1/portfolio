# [Portfolio Page](jameshenry.site)
This is a personal portfolio project at jameshenry.site


## Building
1. Clone the repository
2. Initialize NPM:
`npm install`
3. Build the project:
`npm run build`
or alternatively test build in webpack development mode
`npm run test`	
you can also open a live server port
`npm run start`

## Features

 - Responsive
 - Mobile web version available & refreshes page on phone rotation
 - ScrollMagic & GSAP interactivity
 - Lazyloading images & videos
 - Scroll damping with vertical scroll enabled

## To do (in order of priority)
1. Migrate to Vue (see Vue branch)
2. Update to the latest Three.js & improve Safari performance
3. Migrate from GSAP 2 -> GSAP 3
4. Migrate to Webpack v5 Beta
5. Enable WebP & Webm file format
6. Add BookXcess / BBW portfolio page & other portfolios
7. Change to fixed width in project details page for a better scrollmagic experience
8. Fix cursor blend mode on black text

## Dependencies

 -  [GSAP](https://greensock.com/gsap/) (for basic animations, tilt, and image sequencing)
 - [Scroll Magic](http://scrollmagic.io/) (Animate by scroll with GSAP)
 - [LazySizes](https://github.com/aFarkas/lazysizes) (for image lazyloading and responsive density)
 - [Siriwave](https://github.com/kopiro/siriwave) (Preloader page)
 - [Smooth Scrollbar](https://github.com/idiotWu/smooth-scrollbar) (For vertical enabled scrolling and damping)
 - [Three.js](threejs.org) (WebGL background)
 - [Babel](babeljs.io) (For Smooth Scrollbar plugin)
 - [Webpack](https://webpack.js.org/)
