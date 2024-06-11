import gsap from 'gsap';
import './assets/css/reset.css'
import './assets/css/tailwind.css'
import './assets/css/variable.css'
import './assets/css/style.css'
import './assets/css/marquee.css'
import { ScrollTrigger } from 'gsap/all';
import Marquee from './src/Marquee';

// gsap.registerPlugin(ScrambleTextPlugin);
gsap.registerPlugin(ScrollTrigger);


document.querySelectorAll('.capsule_animation').forEach((element) => {
  // Générer un nombre aléatoire entre 5 et 15 (en secondes)
  const randomSeconds = Math.floor(Math.random() * (15 - 5 + 1) + 5);

  new Marquee({
    el: element.querySelector('.marquee__container'),
    container: element,
    text: '',
    destroyEl: false,
    directLoad: true,
    autoplay: true,
    fontFamily: 'system-ui',
    direction: 1,
    timingAnimation: [1, 100], // 1 sec for 500px,
    duration: randomSeconds
  });
})

// 1 - animation tasse de café
gsap.to(".tasseCofee", {
  scrollTrigger: {
    trigger: ".tasseCofee",
    start: "-=500px",
    end: "+=200px",
    scrub: 1
  },
  opacity: 1,
  scale: 1,
  duration: 1
});


// 2 - animation texte en dessous de la tasse de café
gsap.to(".test", {
  scrollTrigger: {
    trigger: ".world",
    toggleActions: "restart pause reverse none",
    scrub: 1
  },
  x: 400,
  duration: 3
});


// 3 - animation div utilisation capsule
gsap.to(".section--capsuleElement1", {
  scrollTrigger: {
    trigger: ".tache",
    start: "center -=200px",
    end: "+=200px",
    toggleActions: "restart pause reverse none",
    scrub: 1
  },
  opacity: 1
});
gsap.to(".section--capsuleElement2", {
  scrollTrigger: {
    trigger: ".tache",
    start: "center -=300px",
    end: "+=100px",
    toggleActions: "restart pause reverse none",
    scrub: 1
  },
  opacity: 1
});
gsap.to(".section--capsuleElement3", {
  scrollTrigger: {
    trigger: ".tache",
    start: "center -=400px",
    end: "+=100px",
    toggleActions: "restart pause reverse none",
    scrub: 1
  },
  opacity: 1
});


// 4 - animation calendrier
gsap.to(".capsules_calendar", {
  scrollTrigger: {
    trigger: ".capsules_calendar",
    start: "top",
    end: "+=200px",
    scrub: 1
  },
  y: 200,
  duration: 3
});



// 5 - animation transition "soit"
gsap.to(".pTransition", {
  scrollTrigger: {
    trigger: ".pTransition",
    start: "center center",
    end: "+=50",
    scrub: 1
  },
  opacity: 1
});

// 6 - animation aparition caspule

gsap.from('.section--time', {
  scrollTrigger: {
    trigger: ".pTransition",
    start: "top top",
    end: "top",
    toggleActions: "restart pause reverse none",
    scrub: 4
  },
  yPercent: -10,
  paused: true,
  duration: 3
});
gsap.to(".section--time", {
  scrollTrigger: {
    trigger: ".pTransition",
    start: "+=300 center",
    end: "+=150",
    scrub: 1
  },
  opacity: 1
});



// 7 - animation transition capsule 
gsap.to(".section--time", {
  scrollTrigger: {
    trigger: ".section--time",
    start: "top top",
    toggleActions: "restart pause reverse none",
    end: "+=200px",
    scrub: 1
  },
  y: 400,
  duration: 2
});


// 8 - animation question recyclage
gsap.to(".section--recyclageQuestion", {
  scrollTrigger: {
    trigger: ".section--recyclage",
    start: "+=200 center",
    end: "+=150",
    scrub: 1
  },
  opacity: 1
});

// 9 - animation tonne
// gsap.to(".title", {
//   duration: 3, scrambleText: 
//   { text: "ScrambleText allows you to animate the scrambling of text.",
//   revealDelay: 0.5 }
//   // tweenLength: false 
// });